// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   useSandpack,
// } from "@codesandbox/sandpack-react";
// import SplitterLayout from "react-splitter-layout";
// import "react-splitter-layout/lib/index.css";
// import { CourseExercise } from "../page";
// import { Button } from "@/components/ui/button";
// import { nightOwl } from "@codesandbox/sandpack-themes";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import { toast } from "sonner";

// type Props = {
//   courseExerciseData: CourseExercise | undefined;
//   loading: boolean;
// };

// const CodeEditorChildren = ({ onCompleteExercise, IsCompleted }: any) => {
//   const { sandpack } = useSandpack();

//   return (
//     <div className="font-game absolute bottom-40 left-1/2 flex -translate-x-1/2 gap-4">
//       <Button
//         onClick={() => sandpack.runSandpack()}
//         variant={"pixel"}
//         size={"lg"}
//         className="text-xl cursor-pointer"
//       >
//         RunCode
//       </Button>
//       <Button
//         disabled={IsCompleted}
//         onClick={() => onCompleteExercise()}
//         variant={"pixel"}
//         size={"lg"}
//         className="bg-[#a3e534] text-xl"
//       >
//         {IsCompleted ? "Already Completed !" : "Mark Completed!"}
//       </Button>
//     </div>
//   );
// };

// function CodeEditor({ courseExerciseData, loading }: Props) {
//   const { exerciseslug } = useParams();
//   const exerciseIndex = courseExerciseData?.exercises?.findIndex(
//     (item) => item.slug === exerciseslug
//   );

//   const IsCompleted = courseExerciseData?.completedExercise?.find(
//     (item) => item?.exerciseId === Number(exerciseIndex) + 1
//   );
//   console.log(IsCompleted);

//   const onCompleteExercise = async () => {
//     if (exerciseIndex == undefined) {
//       return;
//     }
//     const result = await axios.post("/api/exercise/complete", {
//       courseId: courseExerciseData?.courseId,
//       chapterId: courseExerciseData?.chapterId,
//       exerciseId: exerciseIndex + 1,
//       xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
//     });
//     console.log("EXERCISE COMPLETE:", result);
//     toast.success("Exercise Completed!");
//   };

//   return (
//     <div>
//       <SandpackProvider
//         theme={nightOwl}
//         //@ts-ignore
//         template={courseExerciseData?.editorType ?? "react"}
//         style={{
//           height: "100vh",
//         }}
//         files={courseExerciseData?.exerciseData?.exercisesContent?.starterCode}
//         options={{
//           autorun: false,
//           autoReload: false,
//         }}
//       >
//         <SandpackLayout
//           style={{
//             height: "100%",
//           }}
//         >
//           <SplitterLayout
//             percentage
//             primaryMinSize={30}
//             secondaryMinSize={30}
//             secondaryInitialSize={50}
//           >
//             <div className="relative h-full">
//               <SandpackCodeEditor
//                 showTabs
//                 style={{
//                   height: "100%",
//                 }}
//               />
//               <CodeEditorChildren
//                 onCompleteExercise={onCompleteExercise}
//                 IsCompleted={IsCompleted}
//               />
//             </div>

//             <SandpackPreview
//               showNavigator
//               showOpenInCodeSandbox={false}
//               showOpenNewtab
//               style={{
//                 height: "100%",
//               }}
//             />
//           </SplitterLayout>
//         </SandpackLayout>
//       </SandpackProvider>
//     </div>
//   );
// }

// export default CodeEditor;

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { CourseExercise } from "../page";
import { Button } from "@/components/ui/button";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

const CodeEditorChildren = ({ onCompleteExercise, IsCompleted }: any) => {
  const { sandpack } = useSandpack();

  return (
    <div className="font-game absolute bottom-40 left-1/2 flex -translate-x-1/2 gap-4">
      <Button
        onClick={() => sandpack.runSandpack()}
        variant={"pixel"}
        size={"lg"}
        className="text-xl cursor-pointer"
      >
        RunCode
      </Button>
      <Button
        disabled={IsCompleted}
        onClick={() => onCompleteExercise()}
        variant={"pixel"}
        size={"lg"}
        className="bg-[#a3e534] text-xl"
      >
        {IsCompleted ? "Already Completed !" : "Mark Completed!"}
      </Button>
    </div>
  );
};

function CodeEditor({ courseExerciseData, loading }: Props) {
  const { exerciseslug } = useParams();
  const exerciseIndex = courseExerciseData?.exercises?.findIndex(
    (item) => item.slug === exerciseslug
  );

  const IsCompleted = courseExerciseData?.completedExercise?.find(
    (item) => item?.exerciseId === Number(exerciseIndex) + 1
  );

  const onCompleteExercise = async () => {
    if (exerciseIndex == undefined) {
      return;
    }
    const result = await axios.post("/api/exercise/complete", {
      courseId: courseExerciseData?.courseId,
      chapterId: courseExerciseData?.chapterId,
      exerciseId: exerciseIndex + 1,
      xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
    });
    console.log("EXERCISE COMPLETE:", result);
    toast.success("Exercise Completed!");
  };

  // Get the correct template based on editorType
  const getTemplate = () => {
    const editorType = courseExerciseData?.editorType?.toLowerCase();

    // Map your editorTypes to Sandpack templates
    switch (editorType) {
      case "html":
      case "static":
        return "static"; // For HTML/CSS/JS
      case "react":
        return "react";
      case "react-ts":
        return "react-ts";
      case "vanilla":
      case "javascript":
        return "vanilla";
      case "vanilla-ts":
      case "typescript":
        return "vanilla-ts";
      case "vue":
        return "vue";
      case "vue-ts":
        return "vue-ts";
      case "angular":
        return "angular";
      case "svelte":
        return "svelte";
      case "solid":
        return "solid";
      case "nextjs":
        return "nextjs";
      case "vite-react":
        return "vite-react";
      case "vite-react-ts":
        return "vite-react-ts";
      case "node":
        return "node";
      // Python is not supported by Sandpack, fallback to static
      case "python":
        console.warn(
          "Python is not supported by Sandpack. Using static template."
        );
        return "static";
      default:
        return "static"; // Default to static for HTML courses
    }
  };

  return (
    <div>
      <SandpackProvider
        theme={nightOwl}
        template={getTemplate()}
        style={{
          height: "100vh",
        }}
        files={courseExerciseData?.exerciseData?.exercisesContent?.starterCode}
        options={{
          autorun: false,
          autoReload: false,
        }}
      >
        <SandpackLayout
          style={{
            height: "100%",
          }}
        >
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="relative h-full">
                <SandpackCodeEditor
                  showTabs
                  style={{
                    height: "100%",
                  }}
                />
                <CodeEditorChildren
                  onCompleteExercise={onCompleteExercise}
                  IsCompleted={IsCompleted}
                />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50} minSize={30}>
              <SandpackPreview
                showNavigator
                showOpenInCodeSandbox={false}
                showOpenNewtab
                style={{
                  height: "100%",
                }}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default CodeEditor;
