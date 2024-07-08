import { cn } from "@/utils/cn";
import { Playfair_Display } from "next/font/google";
import React from "react";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const HeroHeading = ({ title }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <div
          className={cn(
            "md:text-3xl text-2xl text-black border-neutral-700 rounded-r-full rounded-l-full p-2 border-l-2 border-r-2",
            font.className
          )}
        >
          {title}
        </div>
        <div className="h-1 w-28 mt-1 flex justify-center bg-neutral-300" />
      </div>
    </>
  );
};

export default HeroHeading;
