import Image from "next/image";
import { EnrolledCourseInfo } from "./EnrolledCourses";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

type Props = {
  course: EnrolledCourseInfo;
};

function CourseProgressCard({ course }: Props) {
  return (
    <Link href={"/courses/" + course?.courseId}>
      <div className="border-4 p-2 rounded-lg">
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
          <Image
            src={course?.bannerImage}
            alt={course.title}
            height={500}
            width={500}
            className="w-full h-[170px] rounded-2xl object-cover"
          />
        </MotionWrapperDelay>
        <div className="font-game p-4">
          <h2 className="text-lg font-light text-gray-500">Course</h2>
          <h2 className="text-3xl">{course?.title}</h2>
          <h2 className="mt-3 text-lg border-2 rounded-lg mb-2 p-2 bg-radial from-purple-500 to-indigo-900">
            {course?.completedExercises} Completed{" "}
            <span>Out Of {course?.totalExercises}</span>
          </h2>
          <Progress
            value={(course?.completedExercises / course?.totalExercises) * 100}
          />
        </div>
      </div>
    </Link>
  );
}

export default CourseProgressCard;
