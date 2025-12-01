"use client";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-3">
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
        <Image src={"/machine.webp"} alt="robo" width={120} height={120} />
        <h2 className="font-game text-2xl p-2 border bg-zinc-800 rounded-lg rounded-bl-none">
          Welcome Back,{" "}
          <span className="text-yellow-300">{user?.fullName}</span>, Start
          Learning Something New...
        </h2>
      </MotionWrapperDelay>
    </div>
  );
}

export default WelcomeBanner;
