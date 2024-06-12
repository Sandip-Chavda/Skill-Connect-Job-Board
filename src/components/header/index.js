"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = ({ user, profileInfo }) => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    // {
    //   label: "Feed",
    //   path: "/feed",
    //   show: profileInfo,
    // },
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
      // label: "Companies",
      // path: "/companies",
      // show: true,
      // show: profileInfo?.role === "candidate",
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: user,
      // show: profileInfo,
    },
    {
      label: "Membership",
      path: "/membership",
      show: user,
      // show: profileInfo,
    },
    {
      label: "Account",
      path: "/account",
      show: user,
      // show: profileInfo,
    },
  ];

  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        {/* For mobile screen */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <RiMenuUnfold3Fill className="h-6 w-6" size={24} />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3>Skill Connect</h3>
            </Link>
            <div className="grid gap-2 py-6">
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
              <UserButton afterSignOutUrl="/" />
            </div>
          </SheetContent>
        </Sheet>
        {/* For mobile screen */}

        {/* Larger screen navbar */}
        <Link className="hidden lg:flex mr-6" href={"/"}>
          Skill Connect
        </Link>

        <nav className="ml-auto hidden lg:flex gap-6">
          {menuItems.map((menuItem, i) => {
            return menuItem.show ? (
              <Link
                className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium "
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
