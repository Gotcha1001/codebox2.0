import Image from "next/image";
import MotionWrapperDelay from "./components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex min-h-screen justify-center bg-radial from-purple-500 to-indigo-900">
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
        <h1 className="font-game gradient-title text-5xl"> Welcome back</h1>
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
          <div className="flex items-center justify-center">
            <Button variant={"sex5"}>Start</Button>
          </div>
        </MotionWrapperDelay>
      </MotionWrapperDelay>
    </div>
  );
}
