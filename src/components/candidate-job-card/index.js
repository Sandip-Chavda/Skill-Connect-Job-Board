"use client";

import React, { Fragment, useState } from "react";
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { IoIosSend } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { createJobApplicationAction } from "@/actions";

const CandidateJobCard = ({ jobItem, profileInfo, jobApplications }) => {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);
  console.log(jobApplications);

  async function handleJobApply() {
    createJobApplicationAction(
      {
        recruiterUserID: jobItem?.recruiterId,
        name: profileInfo?.candidateInfo?.name, // candidate name
        email: profileInfo?.email, // candidate email
        candidateUserID: profileInfo?.userId,
        status: ["Applied"],
        jobID: jobItem?._id,
        jobAppliedDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    );
    setShowJobDetailsDrawer(false);
  }

  return (
    <Fragment>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        <CommonCard
          icon={<JobIcon />}
          title={jobItem?.title}
          description={jobItem?.companyName}
          footerContent={
            <Button
              onClick={() => setShowJobDetailsDrawer(true)}
              className=" flex h-11 items-center justify-center px-5"
            >
              View Details
            </Button>
          }
        />

        <DrawerContent className="p-6 ">
          <DrawerHeader className="px-0">
            <div className="flex justify-between">
              <DrawerTitle className="text-4xl font-extrabold text-gray-800">
                {jobItem?.title}
              </DrawerTitle>
              <div className="flex gap-3 ">
                <Button
                  onClick={handleJobApply}
                  disabled={
                    jobApplications.findIndex(
                      (item) => item.jobID === jobItem?._id
                    ) > -1
                      ? true
                      : false
                  }
                  className="group disabled:opacity-80  flex gap-1.5 h-11 items-center justify-center px-5"
                >
                  {jobApplications.findIndex(
                    (item) => item.jobID === jobItem?._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                  <IoIosSend
                    className="group-hover:pl-1 group-hover:-pr-2 transition-all duration-300"
                    size={20}
                  />
                </Button>
                <Button
                  onClick={() => setShowJobDetailsDrawer(false)}
                  className="group flex h-11 gap-1.5 items-center justify-center px-5"
                >
                  Cancle <MdCancel size={20} />
                </Button>
              </div>
            </div>
          </DrawerHeader>

          <DrawerDescription className="text-2xl text-gray-600 font-medium">
            {jobItem?.description}
            <span className="text-xl font-normal text-gray-500 ml-4">
              {jobItem?.location}
            </span>
          </DrawerDescription>
          <div className="w-[150px] mt-6 flex justify-center items-center h-[40px] border-[1.5px] border-black rounded-[4px]">
            <h2 className="text-xl capitalize font-bold">{jobItem?.type}</h2>
          </div>
          <h3 className="text-2xl font-medium text-black mt-3">
            Experience :- {jobItem?.experience} Years
          </h3>
          <div className="flex gap-4 mt-6 ">
            {jobItem?.skills.split(",").map((skillItem, i) => (
              <div
                key={i}
                className="w-[100px] flex justify-center items-center h-[35px] bg-black  rounded-[4px] hover:scale-105 transition-all duration-200"
              >
                <h2 className="text-[13px] text-white capitalize font-medium">
                  {skillItem}
                </h2>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default CandidateJobCard;
