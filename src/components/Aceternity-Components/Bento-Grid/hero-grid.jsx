"use client";

import React from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { cn } from "@/utils/cn";
import { Playfair_Display } from "next/font/google";
import HeroButton from "../hero-button/button";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-[calc(100%-50px)] mx-auto md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title || ""}
          description={item.description || ""}
          header={item.header || ""}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon || ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className={cn(
        "flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2",
        font.className
      )}
    >
      <motion.p
        initial="initial"
        whileHover="animate"
        className="text-5xl leading-snug"
      >
        Connect Your Skill With The Your Dream Company
      </motion.p>
      <HeroButton />
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  // const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col items-center justify-center space-y-2"
    >
      <motion.div
        variants={variants}
        style={{
          maxWidth: Math.random() * (100 - 40) + 40 + "%",
        }}
        className="flex flex-row rounded-full p-2  items-center  w-full"
      >
        <Image
          alt="logo"
          src={"./logo.svg"}
          height={170}
          width={170}
          className=""
        />
      </motion.div>
      {/* <div>
        <Image
          alt="logo"
          src={"./logo.svg"}
          height={170}
          width={170}
          className=""
        />
      </div> */}
    </motion.div>
  );
};

const SkeletonThree = () => {
  // const variants = {
  //   initial: {
  //     backgroundPosition: "0 50%",
  //   },
  //   animate: {
  //     backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
  //   },
  // };
  return (
    <div
      // initial="initial"
      // animate="animate"
      // variants={variants}
      // transition={{
      //   duration: 5,
      //   repeat: Infinity,
      //   repeatType: "reverse",
      // }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col"
      // style={{
      //   background:
      //     "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      //   backgroundSize: "400% 400%",
      // }}
    >
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className="object-cover rounded-lg !h-full md:mt-5"
      >
        <source src="/globeanimation1.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      {/* <motion.div className="h-full w-full rounded-lg"></motion.div> */}
    </div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 35,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -35,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      {/* <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      > */}
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-red-100 p-4 dark:bg-black dark:border-white/[0.1] border border-red-500 flex flex-col items-center justify-center"
      >
        <Image
          src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-16 w-16"
        />
        <p
          className={cn(
            "sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4",
            font.className
          )}
        >
          {/* Students can leverage our platform to showcase their skills
          effectively & get hired. */}
          Students can effectively showcase skills and get hired.
        </p>
        <p
          className={cn(
            "border border-red-950 bg-red-400/75 dark:bg-red-900/20 text-red-950 text-xs rounded-full px-3 py-1.5 font-semibold mt-4",
            font.className
          )}
        >
          Skill Showcase
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-lime-200 p-4 dark:bg-black dark:border-white/[0.1] border border-lime-500 flex flex-col items-center justify-center">
        <Image
          src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-16 w-16"
        />
        <p
          className={cn(
            "sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4",
            font.className
          )}
        >
          Discover and hire top-tier talent through our platform
        </p>
        <p
          className={cn(
            "border border-lime-700 bg-lime-500/45 font-semibold dark:bg-green-900/20 text-lime-800 text-xs rounded-full px-3 py-1.5 mt-4",
            font.className
          )}
        >
          Hire Talents
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-indigo-200 p-4 dark:bg-black dark:border-white/[0.1] border border-indigo-700 flex flex-col items-center justify-center"
      >
        <Image
          src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-16 w-16"
        />
        <p
          className={cn(
            "sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4",
            font.className
          )}
        >
          Share latest skills and jobs through posts & grow connections.
        </p>
        <p
          className={cn(
            "border border-indigo-500 bg-indigo-300 dark:bg-orange-900/20 text-indigo-800 text-xs font-semibold rounded-full px-3 py-1.5 mt-4",
            font.className
          )}
        >
          Socialize
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    // title: "",
    // description: (
    //   <span className="text-sm">
    //     Experience the power of AI in generating unique content.
    //   </span>
    // ),
    header: <SkeletonOne />,
    className: "md:col-span-2 hover:shadow-none shadow-none border-none",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: (
      <div className={cn("", font.className)}>
        Streamlining Skills Job Connections
      </div>
    ),
    description: (
      <span className={cn("text-sm")}>
        Our app simplifies job searching and hiring, connecting employers with
        candidates effortlessly
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 bg-[#EFEEF3]",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },

  {
    // title: "Contextual Suggestions",
    // description: (
    //   <span className="text-sm">
    //     Get AI-powered suggestions based on your writing context.
    //   </span>
    // ),
    header: <SkeletonThree />,
    className: "md:col-span-1 bg-black drak:bg-white",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: (
      <p className={cn("text-white text-xl", font.className)}>
        Find all you need in one place for seamless access
      </p>
    ),
    description: (
      <span className={cn("text-sm text-neutral-300/80")}>
        Access all your essential resources conveniently in one place for
        seamless workflow and enhanced productivity.Effortlessly manage and
        access all your necessities from a single, user-friendly platform for
        maximum efficiency.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-3 h-[430px] bg-black",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 h-[430px] bg-black",
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
