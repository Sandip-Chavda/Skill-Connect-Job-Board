import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HeroButton = () => {
  const router = useRouter();

  const postJobButton = () => {
    router.push("/sign-in");
  };

  return (
    <div className="flex space-x-7 !mt-10 ">
      <button
        data-aos="fade-right"
        onClick={postJobButton}
        className="relative inline-flex h-9 overflow-hidden rounded-3xl p-[2px] focus:outline-none"
      >
        <span className="absolute inset-[-5000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DC2626_0%,#4D7C0F_50%,#4338CA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-slate-950 px-6 !py-1 md:text-base font-medium text-white backdrop-blur-3xl">
          Post Jobs
        </span>
      </button>

      <button
        data-aos="fade-left"
        onClick={postJobButton}
        className="relative inline-flex h-9 overflow-hidden rounded-3xl p-[2px] focus:outline-none"
      >
        <span className="absolute inset-[-5000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DC2626_0%,#4D7C0F_50%,#4338CA_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-white px-6 !py-1 md:text-base font-medium text-black backdrop-blur-3xl hover:text-white hover:bg-black transition-colors duration-300">
          Explore Jobs
        </span>
      </button>
    </div>
  );
};

export default HeroButton;
