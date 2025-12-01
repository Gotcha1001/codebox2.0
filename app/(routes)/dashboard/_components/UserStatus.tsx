"use client";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function UserStatus() {
  const { user } = useUser();

  return (
    <div className="p-7 border-4 rounded-2xl min-w-sm">
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
        <div className="flex gap-3 items-center">
          <Image src={"/alex_walk.gif"} alt="walk" height={70} width={70} />
          <h2 className="capitalize font-game text-2xl">
            {user?.primaryEmailAddress?.emailAddress}
          </h2>
        </div>
      </MotionWrapperDelay>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center gap-3">
          <MotionWrapperDelay
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image src={"/star.png"} alt="star" height={35} width={35} />
          </MotionWrapperDelay>

          <div>
            <h2 className="text-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-500">Total Rewards</h2>
          </div>
        </div>
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
            <Image src={"/badge.png"} alt="star" height={35} width={35} />
          </MotionWrapperDelay>

          <div>
            <h2 className="text-3xl font-game">4</h2>
            <h2 className="font-game text-xl text-gray-500">Badge</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
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
            <Image src={"/fire.png"} alt="star" height={35} width={35} />
          </MotionWrapperDelay>

          <div>
            <h2 className="text-3xl font-game">7</h2>
            <h2 className="font-game text-xl text-gray-500">Daily Strike</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
