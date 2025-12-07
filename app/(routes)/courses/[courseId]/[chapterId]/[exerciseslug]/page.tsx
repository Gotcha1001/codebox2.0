"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-splitter-layout/lib/index.css";
import { exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";

const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
  ssr: false,
});

export type CourseExercise = {
  courseId: number;
  chapterId: number;
  desc: string;
  name: string;
  exercises: exercise[];
  exerciseData: ExerciseData;
};

export type ExerciseData = {
  chapterId: number;
  courseId: number;
  exerciseId: string;
  exerciseName: string;
  exercisesContent: ExercisesContent;
};
export type ExercisesContent = {
  content: string;
  hint: string;
  hintXp: string;
  starterCode: any;
  task: string;
};

function Playground() {
  const [loading, setLoading] = useState(false);

  const { courseId, chapterId, exerciseslug } = useParams();
  const [courseExerciseData, setCourseExerciseData] =
    useState<CourseExercise>();

  useEffect(() => {
    GetExerciseCourseDetail();
  }, []);

  const GetExerciseCourseDetail = async () => {
    setLoading(true);
    const result = await axios.post("/api/exercise", {
      courseId: courseId,
      chapterId: chapterId,
      exerciseId: exerciseslug,
    });
    console.log("COURSE:", result.data);
    setCourseExerciseData(result.data);
    setLoading(false);
  };

  return (
    <div className="border-t-4">
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </div>
        <div>Code Editor</div>
      </SplitterLayout>
    </div>
  );
}

export default Playground;
