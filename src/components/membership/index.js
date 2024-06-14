"use client";

import { membershipPlans } from "@/utils";
import React from "react";
import CommonCard from "../common-card";
// import JobIcon from "../job-icon";
import { IoStarSharp } from "react-icons/io5";
import { Button } from "../ui/button";

const Memebrship = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex items-baseline justify-between border-b pb-6 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Premium Plans
        </h1>
      </div>

      <div className="py-20 pb-24 pt-6 ">
        <div className="container mx-auto p-0 space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {membershipPlans.map((plan, i) => (
              <CommonCard
                key={i}
                icon={
                  <div className="flex justify-between">
                    <div className="">{plan.icon}</div>
                    <h1 className="font-bold text-2xl">{plan.heading}</h1>
                  </div>
                }
                description={
                  <div className="mt-3 text-sm text-gray-600 font-medium">
                    {plan.description}
                  </div>
                }
                title={
                  <div className="mt-3 font-bold">{`₹ ${plan.price} / Month `}</div>
                }
                footerContent={
                  <Button className="disabled:opacity-75 flex h-11 items-center justify-center">
                    Subscribe
                  </Button>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memebrship;
