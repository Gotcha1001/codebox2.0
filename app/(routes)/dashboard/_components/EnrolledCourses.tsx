// "use client";
// import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import CourseProgressCard from "./CourseProgressCard";

// export type EnrolledCourseInfo = {
//   bannerImage: string;
//   courseId: number;
//   completedExercises: number;
//   level: string;
//   title: string;
//   totalExercises: number;
//   xpEarned: number;
// };

// function EnrolledCourses() {
//   const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseInfo[]>(
//     []
//   );
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     GetUserEnrolledCourses();
//   }, []);

//   const GetUserEnrolledCourses = async () => {
//     setLoading(true);
//     const result = await axios.get("/api/courses?courseId=enrolled");
//     console.log("ENROLLED:", result?.data);
//     setEnrolledCourses(result.data);
//     setLoading(false);
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-3xl font-game mb-2">Your Enrolled Courses</h2>
//       {loading && <Skeleton className="w-full rounded-2xl my-5" />}
//       {enrolledCourses?.length == 0 ? (
//         <MotionWrapperDelay
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           variants={{
//             hidden: { opacity: 0, x: -100 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
//             <Image src={"/books.png"} alt="book" width={90} height={90} />
//             <h2 className="font-game text-2xl">
//               You Don't Have Any Enrolled Courses Yet'
//             </h2>
//             <Link href={"/courses"}>
//               <Button
//                 variant={"pixel"}
//                 className="font-game text-lg"
//                 size={"lg"}
//               >
//                 Browse All Courses
//               </Button>
//             </Link>
//           </div>
//         </MotionWrapperDelay>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
//           {enrolledCourses?.map((course, index) => (
//             <div key={index}>
//               <CourseProgressCard course={course} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default EnrolledCourses;

"use client";

import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CourseProgressCard from "./CourseProgressCard";

export type EnrolledCourseInfo = {
  bannerImage: string;
  courseId: number;
  completedExercises: number;
  level: string;
  title: string;
  totalExercises: number;
  xpEarned: number;
};

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourseInfo[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetUserEnrolledCourses();
  }, []);

  const GetUserEnrolledCourses = async () => {
    setLoading(true);
    try {
      // Fixed: Changed from courseId=enrolled to enrolled=true
      const result = await axios.get("/api/courses?enrolled=true");
      console.log("ENROLLED:", result?.data);
      setEnrolledCourses(result.data);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-game mb-2">Your Enrolled Courses</h2>
      {loading && <Skeleton className="w-full rounded-2xl my-5" />}
      {enrolledCourses?.length == 0 ? (
        <MotionWrapperDelay
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
            <Image src={"/books.png"} alt="book" width={90} height={90} />
            <h2 className="font-game text-2xl">
              You Don't Have Any Enrolled Courses Yet'
            </h2>
            <Link href={"/courses"}>
              <Button
                variant={"pixel"}
                className="font-game text-lg"
                size={"lg"}
              >
                Browse All Courses
              </Button>
            </Link>
          </div>
        </MotionWrapperDelay>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
          {enrolledCourses?.map((course, index) => (
            <div key={index}>
              <CourseProgressCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EnrolledCourses;
