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

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
};

function CourseChapters({ loading, courseDetail }: Props) {
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
                        {/* <Button className="font-game text-xl" variant={"pixel"}>
                          {exc?.xp} xp
                        </Button> */}

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
