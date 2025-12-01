"use client";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-game mb-2">Your Enrolled Courses</h2>
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
            <Button variant={"pixel"} className="font-game text-lg" size={"lg"}>
              Browse All Courses
            </Button>
          </div>
        </MotionWrapperDelay>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}

export default EnrolledCourses;
