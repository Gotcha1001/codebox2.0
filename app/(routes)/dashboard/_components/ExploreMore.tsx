import FeatureMotionWrapper from "@/app/components1/FramerMotion/FeatureMotionWrapper";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import Image from "next/image";

const ExplorMoreOptions = [
  {
    id: 1,
    title: "Quizz Pack",
    desc: "Practice what you learned with bite-sized code challenges.",
    icon: "/tree.png",
  },
  {
    id: 2,
    title: "Video Courses",
    desc: "Learn with structured video lessons taught step-by-step.",
    icon: "/game.png",
  },
  {
    id: 3,
    title: "Community Project",
    desc: "Build real-world apps by collaborating with the community.",
    icon: "/growth.png",
  },
  {
    id: 4,
    title: "Explore Apps",
    desc: "Explore rebuild app which you can try as a demo and build it ",
    icon: "/start-up.png",
  },
];

function ExploreMore() {
  return (
    <div className="mt-8">
      <MotionWrapperDelay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-3xl mb-2 font-game">Explore More</h2>
      </MotionWrapperDelay>
      <div className="grid grid-cols-2 gap-5">
        {ExplorMoreOptions.map((option, index) => (
          <FeatureMotionWrapper key={index} index={index}>
            <div className="flex gap-2 p-2 border rounded-xl bg-radial from-purple-500 to-indigo-900">
              <Image src={option.icon} alt="Icon" height={80} width={80} />
              <div>
                <h2 className="font-medium text-2xl font-game">
                  {option?.title}
                </h2>
                <p className="font-game text-gray-400">{option.desc}</p>
              </div>
            </div>
          </FeatureMotionWrapper>
        ))}
      </div>
    </div>
  );
}

export default ExploreMore;
