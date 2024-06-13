"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HomepageButtonControls = ({ user, profileInfo }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="flex space-x-4 ">
      <Button
        onClick={() => router.push("/jobs")}
        className="flex h-11 items-center justify-center px-5"
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Browse Job"
            : "Job Dashboard"
          : "Browse Job"}
      </Button>
      <Button
        onClick={() =>
          router.push(
            user
              ? profileInfo?.role === "candidate"
                ? "/activity"
                : "/jobs"
              : "/jobs"
          )
        }
        className="flex h-11 items-center justify-center px-5"
      >
        {user
          ? profileInfo?.role === "candidate"
            ? "Job Updates"
            : "Post New Job"
          : "Post New Job"}
      </Button>
    </div>
  );
};

export default HomepageButtonControls;
