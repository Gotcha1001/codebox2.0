"use client";
import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function UpgradeToPro() {
  const { has } = useAuth();
  const hasUnlimitedAccess = has && has({ plan: "unlimited" });

  return (
    !hasUnlimitedAccess && (
      <div className="flex items-center flex-col p-5 border-4 rounded-2xl mt-8">
        <Image src={"/logo (1).png"} alt="logo" height={70} width={70} />
        <h2 className="text-3xl font-game text-center">Upgrade To Pro</h2>
        <p className="font-game text-gray-500 text-xl text-center">
          Join Pro Membership and Get all the course access
        </p>
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
          <Link href={"/pricing"}>
            <Button variant={"pixel"} className="font-game text-2xl">
              Upgrade
            </Button>
          </Link>
        </MotionWrapperDelay>
      </div>
    )
  );
}

export default UpgradeToPro;
