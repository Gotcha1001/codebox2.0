import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Course } from "../../_components/CourseList";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

function CourseChapters({ loading, courseDetail }: Props) {
  const EnableExercise = (
    chapterIndex: number,
    exerciseIndex: number,
    chapterExercisesLength: number
  ) => {
    const completed = courseDetail?.completedExercises;

    // If nothing is completed, enable FIRST exercise ONLY
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex === 0;
    }

    // last completed
    const last = completed[completed.length - 1];

    // Convert to global exercise number
    const currentExerciseNumber =
      chapterIndex * chapterExercisesLength + exerciseIndex + 1;

    const lastCompletedNumber =
      (last.chapterId - 1) * chapterExercisesLength + last.exerciseId;

    return currentExerciseNumber === lastCompletedNumber + 2;
  };

  const isExerciseCompleted = (chapterId: number, exerciseId: number) => {
    const completedChapters = courseDetail?.completedExercises;
    const completedChapter = completedChapters?.find(
      (item) => item.chapterId == chapterId && item.exerciseId == exerciseId
    );
    return completedChapter ? true : false;
  };

  // const isExerciseCompleted = (chapterId: number, exerciseIndex: number) => {
  //   return courseDetail?.completedExercises?.some(
  //     (item) =>
  //       item.chapterId === chapterId && item.exerciseId === exerciseIndex + 1
  //   );
  // };

  // Also fix EnableExercise — make it sequential per chapter
  const isExerciseUnlocked = (chapterId: number, exerciseIndex: number) => {
    // First exercise of first chapter is always unlocked
    if (
      chapterId === courseDetail?.chapters?.[0]?.chapterId &&
      exerciseIndex === 0
    ) {
      return true;
    }

    // Find previous exercise (same chapter, previous index OR last of previous chapter)
    const prevExerciseInSameChapter = courseDetail?.completedExercises?.some(
      (item) =>
        item.chapterId === chapterId && item.exerciseId === exerciseIndex
    );

    const prevChapterLastExercise = courseDetail?.completedExercises?.some(
      (item) =>
        item.chapterId === chapterId - 1 &&
        item.exerciseId ===
          courseDetail?.chapters?.find((c) => c.chapterId === chapterId - 1)
            ?.exercises?.length
    );

    return prevExerciseInSameChapter || prevChapterLastExercise;
  };

  return (
    <div>
      {courseDetail?.chapters?.length == 0 ? (
        <div>
          <Skeleton className="w-full h-[100px] rounded-2xl" />
          <Skeleton className="w-full h-[100px] mt-5 rounded-2xl" />
          <Skeleton className="w-full h-[100px] mt-5 rounded-2xl" />
        </div>
      ) : (
        <div className="p-5 border-4 rounded-2xl">
          {courseDetail?.chapters?.map((chapter, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="p-3 hover:bg-radial from-purple-500 to-indigo-900 font-game text-4xl">
                  <div className="flex gap-10">
                    <h2 className="h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-radial from-blue-500 to-black">
                      {index + 1}
                    </h2>
                  </div>
                  {chapter?.name}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-7 bg-zinc-900">
                    {chapter?.exercises.map((exc, indexExe) => (
                      <div
                        key={indexExe}
                        className="flex items-center justify-between mb-7"
                      >
                        <div className="flex items-center gap-10 font-game">
                          <h2 className="text-3xl">
                            Exercise
                            {index * chapter?.exercises?.length + indexExe + 1}
                          </h2>
                          <h2 className="text-3xl">{exc.name}</h2>
                        </div>

                        {EnableExercise(
                          index,
                          indexExe,
                          chapter?.exercises?.length
                        ) ? (
                          <Link
                            href={
                              "/courses/" +
                              courseDetail?.courseId +
                              "/" +
                              chapter.chapterId +
                              "/" +
                              exc?.slug
                            }
                          >
                            <Button
                              className="font-game text-xl"
                              variant={"pixel"}
                            >
                              {exc?.xp} xp
                            </Button>
                          </Link>
                        ) : isExerciseCompleted(
                            chapter?.chapterId,
                            indexExe + 1
                          ) ? (
                          <Button
                            className="font-game text-xl bg-green-500"
                            variant={"pixel"}
                          >
                            Completed
                          </Button>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                className="font-game text-xl"
                                variant={"pixelDisabled"}
                              >
                                ???
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-game text-xl">
                                Please Enroll First
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseChapters;
