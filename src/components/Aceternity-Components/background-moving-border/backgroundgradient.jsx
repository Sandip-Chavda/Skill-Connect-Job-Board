"use client";
import React from "react";
// import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow, IconGavel } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "./ackground-gradient";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/utils/cn";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Link from "next/link";
import { FaGlobe, FaRegHeart } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/navigation";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function BackgroundGradientDemo() {
  const router = useRouter();

  const redirectToLogin = () => {
    router.push("/sign-in");
  };

  const redirectToPremium = () => {
    router.push("/sign-in");
  };

  return (
    <div className="">
      <BackgroundGradient className="rounded-t-[22px] w-full  h-full p-4 sm:p-10  flex bg-gradient-to-r from-red-100 via-lime-100 to-indigo-100 flex-col">
        <div className="flex flex-col gap-y-6 md:flex-row items-baseline justify-evenly">
          {/* 1 */}
          <div className="flex flex-col">
            <div>
              <Image
                alt="logo"
                src="/logo.svg"
                className="w-16 h-16"
                height={50}
                width={50}
              />
            </div>
            <div className={cn("text-lg font-semibold mt-1", font.className)}>
              Want to make sure we&apos;re the right fit?
            </div>
            <div className={cn("text-sm font-normal mt-1 text-neutral-500")}>
              Find out how you can up your carrier.
              <br />
              Check all you perks with premium.
            </div>
            <div>
              <div className="space-y-2 mt-2">
                <div>
                  <button
                    onClick={redirectToLogin}
                    className="relative inline-flex h-9 overflow-hidden rounded-3xl p-[2px] focus:outline-none bg-transparent"
                  >
                    <span className="absolute inset-[-5000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DC2626_0%,#4D7C0F_50%,#4338CA_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-white/80 px-3 !py-1 md:text-base font-medium text-black backdrop-blur-3xl hover:text-white hover:bg-black transition-colors duration-300">
                      Get Started
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={redirectToPremium}
                    className="relative inline-flex h-9 overflow-hidden rounded-3xl p-[2px] focus:outline-none bg-transparent"
                  >
                    <span className="absolute inset-[-5000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DC2626_0%,#4D7C0F_50%,#4338CA_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-black px-3 !py-1 md:text-base font-medium text-white backdrop-blur-3xl ">
                      Premium plans
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="">
            <div className="">
              <HiOutlineSquares2X2 className="w-8 h-8 text-red-500" />
            </div>
            <div className={cn("mt-3 mb-2 font-semibold", font.className)}>
              Navigation
            </div>

            <div className="flex flex-col gap-y-1 font-medium text-sm text-neutral-500">
              <Link
                className="hover:text-red-500 hover:underline duration-300 w-fit transition-opacity"
                href="/jobs"
              >
                Jobs
              </Link>
              <Link
                className="hover:text-red-500 hover:underline duration-300 w-fit transition-opacity"
                href="/companies"
              >
                Companies
              </Link>
              <Link
                className="hover:text-red-500 hover:underline duration-300 w-fit transition-opacity"
                href="/feed"
              >
                Feed
              </Link>
              <Link
                className="hover:text-red-500 hover:underline duration-300 w-fit transition-opacity"
                href="/membership"
              >
                Membership
              </Link>
              <Link
                className="hover:text-red-500 hover:underline duration-300 w-fit transition-opacity"
                href="/activity"
              >
                Activities
              </Link>
            </div>
          </div>

          {/* 3 */}
          <div className="">
            <div className="">
              <IconGavel className="w-8 h-8 text-lime-600" />
            </div>
            <div className={cn("mt-3 mb-2 font-semibold", font.className)}>
              Legal Info
            </div>

            <div className="flex flex-col gap-y-1 font-medium text-sm text-neutral-500">
              <Link
                className="hover:text-lime-600 hover:underline duration-300 w-fit transition-opacity"
                href="/"
              >
                Term & conditions
              </Link>
              <Link
                className="hover:text-lime-600 hover:underline duration-300 w-fit transition-opacity"
                href="/"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-lime-600 hover:underline duration-300 w-fit transition-opacity"
                href="/"
              >
                Copyrights ©
              </Link>
            </div>
          </div>

          {/* 4 */}
          <div className="">
            <div className="">
              <FaRegHeart className="w-7 h-7 text-indigo-600" />
            </div>
            <div className={cn("mt-3 mb-2 font-semibold", font.className)}>
              Made by{" "}
              <Link
                className="font-extrabold text-indigo-500"
                href="https://www.linkedin.com/in/sandip-chavda-86704a2aa/"
              >
                Sandip Chavda
              </Link>
            </div>

            <div className="flex gap-3 font-medium text-sm text-neutral-500">
              <Link
                className="hover:text-indigo-600 hover:underline duration-300 w-fit transition-opacity text-base gap-1"
                href="https://www.linkedin.com/in/sandip-chavda-86704a2aa/"
                target="_blank"
              >
                <FaLinkedinIn
                  className="text-blue-500 hover:scale-125 transition duration-300"
                  size={20}
                />
              </Link>
              <Link
                className="hover:text-indigo-600 hover:underline duration-300 w-fit transition-opacity"
                target="_blank"
                href="https://github.com/Sandip-Chavda"
              >
                <FaGithub
                  className="text-black hover:scale-125 transition duration-300"
                  size={20}
                />
              </Link>
              <Link
                target="_blank"
                className="hover:text-indigo-600 hover:underline duration-300 w-fit transition-opacity"
                href="https://sandip-chavda-portfolio.vercel.app/"
              >
                <FaGlobe
                  className="text-orange-500 hover:scale-125 transition duration-300"
                  size={20}
                />
              </Link>
              <Link
                target="_blank"
                className="hover:text-indigo-600 hover:underline duration-300 w-fit transition-opacity"
                href="https://x.com/SandipC70731202"
              >
                <BsTwitterX
                  className="text-black hover:scale-125 transition duration-300"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
