"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/utils/cn";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
});

const Header = ({ user, profileInfo }) => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Feed",
      path: "/feed",
      show: profileInfo,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Activity",
      path: "/activity",
      // show: user,
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Companies",
      path: "/companies",
      // show: true,
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Jobs",
      path: "/jobs",
      // show: user,
      show: profileInfo,
    },
    {
      label: "Membership",
      path: "/membership",
      // show: user,
      show: profileInfo,
    },
    {
      label: "Account",
      path: "/account",
      // show: user,
      show: profileInfo,
    },
  ];

  return (
    <div data-aos="fade-down" data-aos-delay="1000">
      <header
        className={cn(
          "flex h-16 w-full shrink-0 items-center font-normal",
          font.className
        )}
      >
        {/* For mobile screen */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <RiMenuUnfold3Fill className="h-6 w-6" size={24} />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"/"}>
              <h3>Skill Connect</h3>
            </Link>
            <div className="grid gap-2 py-6 hover:underline">
              {menuItems.map((menuItem, i) =>
                menuItem.show ? (
                  <Link
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    href={menuItem.path}
                    key={i}
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex md:hidden items-center ml-7">
          <UserButton afterSignOutUrl="/" />
        </div>
        {/* For mobile screen */}

        {/* Larger screen navbar */}
        <Link
          className="hidden font-bold italic text-2xl gap-1 lg:flex mr-6"
          href={"/"}
        >
          <Image
            className="w-16"
            src="./logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <span className={("", font.className)}>Skill Connect</span>
        </Link>

        <nav className="ml-auto hidden lg:flex gap-6">
          {menuItems.map((menuItem, i) => {
            return menuItem.show ? (
              <Link
                onClick={() => sessionStorage.removeItem("filterParams")}
                className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium hover:underline transition-all duration-300 hover:scale-110"
                href={menuItem.path}
                key={i}
              >
                {menuItem.label}
              </Link>
            ) : null;
          })}
          <UserButton afterSignOutUrl="/" />
        </nav>
        {/* Larger screen navbar */}
      </header>
    </div>
  );
};

export default Header;
