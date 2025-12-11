import { PricingTable } from "@clerk/nextjs";
import React from "react";

function Pricing() {
  return (
    <div className="font-game text-3xl mt-28 flex flex-col w-full items-center justify-center px-77">
      <h2 className="text-4xl text-center">Pricing</h2>
      <h2 className="text-2xl text-center">
        Join for unlimited access to all features and courses
      </h2>
      <PricingTable />
    </div>
  );
}

export default Pricing;
