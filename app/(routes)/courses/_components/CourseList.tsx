"use client";
import FeatureMotionWrapper from "@/app/components1/FramerMotion/FeatureMotionWrapper";
import axios from "axios";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tag: string;
};

function CourseList() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllCourses();
  }, []);

  const GetAllCourses = async () => {
    setLoading(true);
    const result = await axios.get("/api/courses");
    console.log(result);
    setCourseList(result?.data);
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-3">
      {courseList?.map((course, index) => (
        <FeatureMotionWrapper index={index} key={index}>
          <div
            key={index}
            className="border-4 rounded-xl hover:bg-radial from-purple-500 to-indigo-900 cursor-pointer"
          >
            <Image
              src={course?.bannerImage}
              alt={course.title}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="font-game text-2xl">{course?.title}</h2>
              <p className="font-game text-xl text-gray-400 line-clamp-2">
                {course?.desc}
              </p>
              <h2 className="bg-zinc-800 flex gap-2 font-game text-2xl p-1 rounded-2xl items-center inline-flex px-4 mt-3">
                <ChartNoAxesColumnIncreasingIcon className="h-6 w-6" />
                {course?.level}
              </h2>
            </div>
          </div>
        </FeatureMotionWrapper>
      ))}
    </div>
  );
}

export default CourseList;
