// "use client";
// import axios from "axios";
// import dynamic from "next/dynamic";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import "react-splitter-layout/lib/index.css";
// import { CompletedExercises, exercise } from "../../../_components/CourseList";
// import ContentSection from "./_components/ContentSection";
// import CodeEditor from "./_components/CodeEditor";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// const SplitterLayout = dynamic(() => import("react-splitter-layout"), {
//   ssr: false,
// });

// export type CourseExercise = {
//   courseId: number;
//   chapterId: number;
//   desc: string;
//   name: string;
//   exercises: exercise[];
//   exerciseData: ExerciseData;
//   completedExercise: CompletedExercises[];
// };

// export type ExerciseData = {
//   chapterId: number;
//   courseId: number;
//   exerciseId: string;
//   exerciseName: string;
//   exercisesContent: ExercisesContent;
// };
// export type ExercisesContent = {
//   content: string;
//   hint: string;
//   hintXp: string;
//   starterCode: any;
//   task: string;
// };

// function Playground() {
//   const [loading, setLoading] = useState(false);

//   const { courseId, chapterId, exerciseslug } = useParams();
//   const [courseExerciseData, setCourseExerciseData] =
//     useState<CourseExercise>();
//   const [exerciseInfo, setExerciseInfo] = useState<exercise>();
//   const [nextButtonRoute, setNextButtonRoute] = useState<string>();
//   const [prevButtonRoute, setPrevButtonRoute] = useState<string>();

//   useEffect(() => {
//     GetExerciseCourseDetail();
//   }, []);

//   const GetExerciseCourseDetail = async () => {
//     setLoading(true);
//     const result = await axios.post("/api/exercise", {
//       courseId: courseId,
//       chapterId: chapterId,
//       exerciseId: exerciseslug,
//     });
//     console.log("COURSE:", result.data);
//     setCourseExerciseData(result.data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   useEffect(() => {
//     courseExerciseData && GetExerciseDetail();
//   }, [courseExerciseData]);

//   const GetExerciseDetail = () => {
//     const exerciseInfo = courseExerciseData?.exercises?.find(
//       (item) => item.slug === exerciseslug
//     );
//     setExerciseInfo(exerciseInfo);
//   };

//   const GetPrevNextButtonRoute = () => {
//     //Get Current Index of Exercise
//     const currentExerciseIndex =
//       courseExerciseData?.exercises?.findIndex(
//         (item) => item.slug === exerciseslug
//       ) ?? 0;
//     const NextExercise =
//       courseExerciseData?.exercises[currentExerciseIndex + 1].slug;
//     const PrevExercise =
//       courseExerciseData?.exercises[currentExerciseIndex - 1].slug;

//     setNextButtonRoute(
//       NextExercise
//         ? "/courses/" + courseId + "/" + chapterId + "/" + NextExercise
//         : undefined
//     );
//     setPrevButtonRoute(
//       PrevExercise
//         ? "/courses/" + courseId + "/" + chapterId + "/" + PrevExercise
//         : undefined
//     );
//   };

//   return (
//     <div className="border-t-4">
//       <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
//         <div>
//           <ContentSection
//             courseExerciseData={courseExerciseData}
//             loading={loading}
//           />
//         </div>
//         <div>
//           <CodeEditor
//             courseExerciseData={courseExerciseData}
//             loading={loading}
//           />
//         </div>
//       </SplitterLayout>
//       <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex p-4 justify-between items-center">
//         <Link href={prevButtonRoute ?? "/courses/" + courseId}>
//           <Button variant={"pixel"} className="text-xl">
//             Previous
//           </Button>
//         </Link>

//         <div className="flex gap-3 items-center">
//           <Image src="/star.png" alt="Icon" height={40} width={40} />
//           <h2 className="text-2xl">
//             You can Earn{" "}
//             <span className="text-3xl gradient-title">{exerciseInfo?.xp} </span>{" "}
//             Xp
//           </h2>
//         </div>
//         <Link href={nextButtonRoute ?? "/courses/" + courseId}>
//           <Button variant={"pixel"} className="text-xl">
//             Next
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Playground;

"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-splitter-layout/lib/index.css";
import { CompletedExercises, exercise } from "../../../_components/CourseList";
import ContentSection from "./_components/ContentSection";
import CodeEditor from "./_components/CodeEditor";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
  completedExercise: CompletedExercises[];
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
  const [exerciseInfo, setExerciseInfo] = useState<exercise>();
  const [nextButtonRoute, setNextButtonRoute] = useState<string>();
  const [prevButtonRoute, setPrevButtonRoute] = useState<string>();

  useEffect(() => {
    GetExerciseCourseDetail();
  }, [exerciseslug]);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (courseExerciseData) {
      GetExerciseDetail();
      GetPrevNextButtonRoute();
    }
  }, [courseExerciseData, exerciseslug]);

  const GetExerciseDetail = () => {
    const exerciseInfo = courseExerciseData?.exercises?.find(
      (item) => item.slug === exerciseslug
    );
    setExerciseInfo(exerciseInfo);
  };

  const GetPrevNextButtonRoute = () => {
    if (!courseExerciseData?.exercises) return;

    // Get Current Index of Exercise
    const currentExerciseIndex = courseExerciseData.exercises.findIndex(
      (item) => item.slug === exerciseslug
    );

    if (currentExerciseIndex === -1) return;

    // Get next exercise
    const nextExercise = courseExerciseData.exercises[currentExerciseIndex + 1];
    setNextButtonRoute(
      nextExercise
        ? "/courses/" + courseId + "/" + chapterId + "/" + nextExercise.slug
        : undefined
    );

    // Get previous exercise
    const prevExercise = courseExerciseData.exercises[currentExerciseIndex - 1];
    setPrevButtonRoute(
      prevExercise
        ? "/courses/" + courseId + "/" + chapterId + "/" + prevExercise.slug
        : undefined
    );
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
        <div>
          <CodeEditor
            courseExerciseData={courseExerciseData}
            loading={loading}
          />
        </div>
      </SplitterLayout>
      <div className="font-game fixed bottom-0 w-full bg-zinc-900 flex p-4 justify-between items-center">
        <Link href={prevButtonRoute ?? "/courses/" + courseId}>
          <Button
            variant={"pixel"}
            className="text-xl"
            disabled={!prevButtonRoute}
          >
            Previous
          </Button>
        </Link>

        <div className="flex gap-3 items-center">
          <Image src="/star.png" alt="Icon" height={40} width={40} />
          <h2 className="text-2xl">
            You can Earn{" "}
            <span className="text-3xl gradient-title">{exerciseInfo?.xp} </span>{" "}
            Xp
          </h2>
        </div>
        <Link href={nextButtonRoute ?? "/courses/" + courseId}>
          <Button
            variant={"pixel"}
            className="text-xl"
            disabled={!nextButtonRoute}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Playground;
