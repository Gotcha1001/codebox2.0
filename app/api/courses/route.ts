// import { db } from "@/config/db";
// import {
//   CompletedExerciseTable,
//   CourseChaptersTable,
//   CourseTable,
//   EnrolledCourseTable,
// } from "@/config/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { and, desc, eq } from "drizzle-orm";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const courseId = searchParams.get("courseId");
//   const user = await currentUser();

//   if (courseId) {
//     const result = await db
//       .select()
//       .from(CourseTable)
//       //@ts-ignore
//       .where(eq(CourseTable.courseId, courseId));

//     const chapterResult = await db
//       .select()
//       .from(CourseChaptersTable) //@ts-ignore
//       .where(eq(CourseChaptersTable.courseId, courseId));

//     const enrolledCourse = await db
//       .select()
//       .from(EnrolledCourseTable)
//       .where(
//         and(
//           //@ts-ignore
//           eq(EnrolledCourseTable?.courseId, courseId),
//           //@ts-ignore
//           eq(
//             EnrolledCourseTable.userId,
//             user?.primaryEmailAddress?.emailAddress
//           )
//         )
//       );

//     const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

//     const completedExercises = await db
//       .select()
//       .from(CompletedExerciseTable)
//       .where(
//         and(
//           //@ts-ignore
//           eq(CompletedExerciseTable.courseId, courseId),
//           //@ts-ignore
//           eq(
//             CompletedExerciseTable.userId,
//             user?.primaryEmailAddress?.emailAddress
//           )
//         )
//       )
//       .orderBy(
//         desc(CompletedExerciseTable?.courseId),
//         desc(CompletedExerciseTable?.exerciseId)
//       );

//     return NextResponse.json({
//       ...result[0],
//       chapters: chapterResult,
//       userEnrolled: isEnrolledCourse,
//       courseEnrolledInfo: enrolledCourse[0],
//       completedExercises: completedExercises,
//     });
//   } else {
//     //Fetch all courses
//     const result = await db.select().from(CourseTable);

//     return NextResponse.json(result);
//   }
// }
// import { db } from "@/config/db";
// import {
//   CompletedExerciseTable,
//   CourseChaptersTable,
//   CourseTable,
//   EnrolledCourseTable,
// } from "@/config/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { and, desc, eq, inArray } from "drizzle-orm";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const courseId = searchParams.get("courseId");
//   const user = await currentUser();

//   // Handle special case: fetch enrolled courses
//   if (courseId === "enrolled") {
//     try {
//       // Get all courses this user is enrolled in
//       const enrolledCourses = await db
//         .select()
//         .from(EnrolledCourseTable)
//         .where(
//           eq(
//             EnrolledCourseTable.userId,
//             user?.primaryEmailAddress?.emailAddress!
//           )
//         );

//       if (enrolledCourses.length === 0) {
//         return NextResponse.json([]);
//       }

//       // Get the course IDs and filter out any null values
//       const courseIds = enrolledCourses
//         .map((ec) => ec.courseId)
//         .filter((id): id is number => id !== null);

//       // If no valid course IDs, return empty array
//       if (courseIds.length === 0) {
//         return NextResponse.json([]);
//       }

//       // Fetch full course details for enrolled courses
//       const courses = await db
//         .select()
//         .from(CourseTable)
//         .where(inArray(CourseTable.courseId, courseIds));

//       // Enhance courses with enrollment data and exercise counts
//       const enrichedCourses = await Promise.all(
//         courses.map(async (course) => {
//           // Get enrollment info for this course
//           const enrollmentInfo = enrolledCourses.find(
//             (ec) => ec.courseId === course.courseId
//           );

//           // Get chapters to calculate total exercises
//           const chapters = await db
//             .select()
//             .from(CourseChaptersTable)
//             .where(eq(CourseChaptersTable.courseId, course.courseId));

//           // Calculate total exercises
//           let totalExercises = 0;
//           chapters.forEach((chapter) => {
//             if (chapter.exercises && Array.isArray(chapter.exercises)) {
//               totalExercises += chapter.exercises.length;
//             }
//           });

//           // Get completed exercises count
//           const completedExercises = await db
//             .select()
//             .from(CompletedExerciseTable)
//             .where(
//               and(
//                 eq(CompletedExerciseTable.courseId, course.courseId),
//                 eq(
//                   CompletedExerciseTable.userId,
//                   user?.primaryEmailAddress?.emailAddress!
//                 )
//               )
//             );

//           return {
//             ...course,
//             xpEarned: enrollmentInfo?.xpEarned || 0,
//             enrolledDate: enrollmentInfo?.enrolledDate,
//             totalExercises,
//             completedExercisesCount: completedExercises.length,
//             chapters,
//           };
//         })
//       );

//       return NextResponse.json(enrichedCourses);
//     } catch (error) {
//       console.error("Error fetching enrolled courses:", error);
//       return NextResponse.json(
//         { error: "Failed to fetch enrolled courses" },
//         { status: 500 }
//       );
//     }
//   }

//   // Handle specific course by ID
//   if (courseId) {
//     try {
//       const result = await db
//         .select()
//         .from(CourseTable)
//         .where(eq(CourseTable.courseId, parseInt(courseId)));

//       const chapterResult = await db
//         .select()
//         .from(CourseChaptersTable)
//         .where(eq(CourseChaptersTable.courseId, parseInt(courseId)));

//       const enrolledCourse = await db
//         .select()
//         .from(EnrolledCourseTable)
//         .where(
//           and(
//             eq(EnrolledCourseTable?.courseId, parseInt(courseId)),
//             eq(
//               EnrolledCourseTable.userId,
//               user?.primaryEmailAddress?.emailAddress!
//             )
//           )
//         );

//       const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

//       const completedExercises = await db
//         .select()
//         .from(CompletedExerciseTable)
//         .where(
//           and(
//             eq(CompletedExerciseTable.courseId, parseInt(courseId)),
//             eq(
//               CompletedExerciseTable.userId,
//               user?.primaryEmailAddress?.emailAddress!
//             )
//           )
//         )
//         .orderBy(
//           desc(CompletedExerciseTable?.courseId),
//           desc(CompletedExerciseTable?.exerciseId)
//         );

//       return NextResponse.json({
//         ...result[0],
//         chapters: chapterResult,
//         userEnrolled: isEnrolledCourse,
//         courseEnrolledInfo: enrolledCourse[0],
//         completedExercises: completedExercises,
//       });
//     } catch (error) {
//       console.error("Error fetching course:", error);
//       return NextResponse.json(
//         { error: "Failed to fetch course details" },
//         { status: 500 }
//       );
//     }
//   }

//   // Fetch all courses
//   try {
//     const result = await db.select().from(CourseTable);
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Error fetching all courses:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch courses" },
//       { status: 500 }
//     );
//   }
// }
import { db } from "@/config/db";
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CourseTable,
  EnrolledCourseTable,
  ExerciseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, asc, desc, eq, inArray } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  if (!userEmail) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  if (courseId) {
    // Single course logic (unchanged)
    const result = await db
      .select()
      .from(CourseTable)
      //@ts-ignore
      .where(eq(CourseTable.courseId, courseId));

    const chapterResult = await db
      .select()
      .from(CourseChaptersTable)
      //@ts-ignore
      .where(eq(CourseChaptersTable.courseId, courseId));

    const enrolledCourse = await db
      .select()
      .from(EnrolledCourseTable)
      .where(
        and(
          //@ts-ignore
          eq(EnrolledCourseTable?.courseId, courseId),
          //@ts-ignore
          eq(EnrolledCourseTable.userId, userEmail)
        )
      );

    const isEnrolledCourse = enrolledCourse?.length > 0 ? true : false;

    const completedExercises = await db
      .select()
      .from(CompletedExerciseTable)
      .where(
        and(
          //@ts-ignore
          eq(CompletedExerciseTable.courseId, courseId),
          //@ts-ignore
          eq(CompletedExerciseTable.userId, userEmail)
        )
      )
      .orderBy(
        desc(CompletedExerciseTable?.courseId),
        desc(CompletedExerciseTable?.exerciseId)
      );

    return NextResponse.json({
      ...result[0],
      chapters: chapterResult,
      userEnrolled: isEnrolledCourse,
      courseEnrolledInfo: enrolledCourse[0],
      completedExercises: completedExercises,
    });
  } else if (searchParams.get("enrolled") === "true") {
    // Fetch only enrolled courses for the user

    // 1️⃣ Fetch all enrolled courses
    const enrolledCourses = await db
      .select()
      .from(EnrolledCourseTable)
      //@ts-ignore
      .where(eq(EnrolledCourseTable.userId, userEmail));

    if (enrolledCourses.length === 0) {
      return NextResponse.json([]);
    }

    // Extract courseIds and filter out null/undefined values
    const courseIds = enrolledCourses
      .map((c) => c.courseId)
      .filter((id): id is number => id != null);

    if (courseIds.length === 0) {
      return NextResponse.json([]);
    }

    // 2️⃣ Fetch all course details
    const courses = await db
      .select()
      .from(CourseTable)
      //@ts-ignore
      .where(inArray(CourseTable.courseId, courseIds));

    // 3️⃣ Fetch all exercises for enrolled courses (from ExerciseTable)
    const exercises = await db
      .select()
      .from(ExerciseTable)
      //@ts-ignore
      .where(inArray(ExerciseTable.courseId, courseIds));

    // 4️⃣ Fetch completed exercises
    const completed = await db
      .select()
      .from(CompletedExerciseTable)
      .where(
        and(
          //@ts-ignore
          inArray(CompletedExerciseTable.courseId, courseIds),
          //@ts-ignore
          eq(CompletedExerciseTable.userId, userEmail)
        )
      );

    // 5️⃣ Format output
    const formattedResult = courses.map((course) => {
      const courseEnrollInfo = enrolledCourses.find(
        (e) => e.courseId === course.courseId
      );

      // Count total exercises for this course
      const courseExercises = exercises.filter(
        (ex) => ex.courseId === course.courseId
      );

      // Count completed exercises for this course
      const courseCompleted = completed.filter(
        (cx) => cx.courseId === course.courseId
      );

      return {
        courseId: course.courseId,
        title: course.title,
        bannerImage: course?.bannerImage,
        totalExercises: courseExercises.length,
        completedExercises: courseCompleted.length,
        xpEarned: courseEnrollInfo?.xpEarned || 0,
        level: course.level,
      };
    });

    return NextResponse.json(formattedResult);
  } else {
    // Fetch ALL courses
    const result = await db.select().from(CourseTable);

    return NextResponse.json(result);
  }
}
