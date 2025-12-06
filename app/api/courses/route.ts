import { db } from "@/config/db";
import {
  CompletedExerciseTable,
  CourseChaptersTable,
  CourseTable,
  EnrolledCourseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  const user = await currentUser();

  if (courseId) {
    const result = await db
      .select()
      .from(CourseTable)
      //@ts-ignore
      .where(eq(CourseTable.courseId, courseId));

    const chapterResult = await db
      .select()
      .from(CourseChaptersTable) //@ts-ignore
      .where(eq(CourseChaptersTable.courseId, courseId));

    const enrolledCourse = await db
      .select()
      .from(EnrolledCourseTable)
      .where(
        and(
          //@ts-ignore
          eq(EnrolledCourseTable?.courseId, courseId),
          //@ts-ignore
          eq(
            EnrolledCourseTable.userId,
            user?.primaryEmailAddress?.emailAddress
          )
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
          eq(
            CompletedExerciseTable.userId,
            user?.primaryEmailAddress?.emailAddress
          )
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
  } else {
    //Fetch all courses
    const result = await db.select().from(CourseTable);

    return NextResponse.json(result);
  }
}
