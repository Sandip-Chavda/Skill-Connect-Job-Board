import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroButton = () => {
  return (
    <div className="flex space-x-7 !mt-10 ">
      <Link href={"/jobs"}>
        <Button
          // onClick={() => router.push("/jobs")}
          className="flex h-11 items-center justify-center px-5"
        >
          Browse Jobs
        </Button>
      </Link>
      <Link href={"/jobs"}>
        <Button
          // onClick={() =>
          //   router.push(
          //     user
          //       ? profileInfo?.role === "candidate"
          //         ? "/activity"
          //         : "/jobs"
          //       : "/jobs"
          //   )
          // }
          className="flex h-11 items-center justify-center px-5"
        >
          Post Jobs
        </Button>
      </Link>
    </div>
  );
};

export default HeroButton;
