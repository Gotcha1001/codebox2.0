import MotionWrapperDelay from "@/app/components1/FramerMotion/MotionWrapperDelay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

function InviteFriend() {
  return (
    <div className="flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900">
      <Image
        src={"/mail.png"}
        alt="Mail"
        className="horizontal-rotate"
        height={80}
        width={80}
      />
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
        <h2 className="text-3xl font-game">Invite Friend</h2>
      </MotionWrapperDelay>

      <p className="font-game">
        Having Fun? Share the love with a friend ! Enter an email and will send
        them a personal invite
      </p>
      <div className="flex gap-2 items-center mt-5">
        <Input placeholder="Enter an email to invite" className="min-w-sm" />
        <Button variant={"pixel"} className="font-game text-2xl">
          Invite
        </Button>
      </div>
    </div>
  );
}

export default InviteFriend;
