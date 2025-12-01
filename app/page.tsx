import Image from "next/image";
import MotionWrapperDelay from "./components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";

import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero section */}
      <Hero />
    </div>
  );
}
