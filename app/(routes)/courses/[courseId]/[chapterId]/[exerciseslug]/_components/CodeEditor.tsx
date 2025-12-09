import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
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
  console.log(IsCompleted);

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

  return (
    <div>
      <SandpackProvider
        theme={nightOwl}
        template="static"
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
          <SplitterLayout
            percentage
            primaryMinSize={30}
            secondaryMinSize={30}
            secondaryInitialSize={50}
          >
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

            <SandpackPreview
              showNavigator
              showOpenInCodeSandbox={false}
              showOpenNewtab
              style={{
                height: "100%",
              }}
            />
          </SplitterLayout>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default CodeEditor;
