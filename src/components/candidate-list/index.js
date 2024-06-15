"use client";

import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  getCandidateDetailsByIDAction,
  updateJobApplicationAction,
} from "@/actions";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const CandidateList = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobApplications,
  setShowCurrentCandidateDetailsModal,
  showCurrentCandidateDetailsModal,
}) => {
  async function handleFetchCandidateDetails(getCurrentCandidateId) {
    const data = await getCandidateDetailsByIDAction(getCurrentCandidateId);

    // console.log(data);

    if (data) {
      setCurrentCandidateDetails(data);
      setShowCurrentCandidateDetailsModal(true);
    }
  }

  function handlePreviewResume() {
    const { data } = supabaseClient.storage
      .from("Skill-Connect-Public")
      .getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);

    const a = document.createElement("a");

    a.href = data?.publicUrl;

    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  async function handleUpdateJobStatus(getCurrentStatus) {
    let copyJobApplicants = [...jobApplications];
    const indexOfCurrentJobApplicant = copyJobApplicants.findIndex(
      (item) => item.candidateUserID === currentCandidateDetails?.userId
    );

    const jobApplicantsToUpdate = {
      ...copyJobApplicants[indexOfCurrentJobApplicant],
      status:
        copyJobApplicants[indexOfCurrentJobApplicant].status.concat(
          getCurrentStatus
        ),
    };

    await updateJobApplicationAction(jobApplicantsToUpdate, "/jobs");
  }

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-2 lg:grid-cols-3">
        {jobApplications && jobApplications.length > 0
          ? jobApplications.map((jobApplicantItem, i) => (
              <div
                key={i}
                className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4"
              >
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicantItem?.name}
                  </h3>
                  <Button
                    onClick={() =>
                      handleFetchCandidateDetails(
                        jobApplicantItem?.candidateUserID
                      )
                    }
                    className=" flex h-11 items-center justify-center px-5"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>

      <Dialog
        open={showCurrentCandidateDetailsModal}
        onOpenChange={() => {
          setCurrentCandidateDetails(null);
          setShowCurrentCandidateDetailsModal(false);
        }}
        className=""
      >
        <DialogContent className="">
          <div>
            <h1>{currentCandidateDetails?.candidateInfo?.name}, </h1>
            <p>{currentCandidateDetails?.email}</p>
            <p>
              {currentCandidateDetails?.candidateInfo?.currentCompany} {",   "}{" "}
              {currentCandidateDetails?.candidateInfo?.currentJobLocation}
            </p>
            <p className="">
              {currentCandidateDetails?.candidateInfo?.totalExperience} Years
            </p>
            <p className="">
              {currentCandidateDetails?.candidateInfo?.currentSalary} LPA
            </p>
            <p className="">
              {currentCandidateDetails?.candidateInfo?.noticePeriod} Days
            </p>
            <h1 className="mt-2">Previous Companies</h1>
            <div className="flex gap-4 mt-2 flex-wrap">
              {currentCandidateDetails?.candidateInfo?.previousCompanies
                ?.split(",")
                .map((previousCompany, i) => (
                  <div
                    key={i}
                    className="w-[100px] flex justify-center items-center h-[35px] bg-black  rounded-[4px] hover:scale-105 transition-all duration-200"
                  >
                    <h2 className="text-[13px] text-white capitalize font-medium">
                      {previousCompany}
                    </h2>
                  </div>
                ))}
            </div>

            <h1 className="mt-2">Skills</h1>
            <div className="flex gap-4 mt-2 flex-wrap">
              {currentCandidateDetails?.candidateInfo?.skills
                ?.split(",")
                .map((skillItem, i) => (
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
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handlePreviewResume}
              className=" flex h-11 items-center justify-center px-5"
            >
              Resume
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("selected")}
              className="disabled:opacity-70 flex h-11 items-center justify-center px-5"
              disabled={
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplications
                .find(
                  (item) =>
                    item.candidateUserID === currentCandidateDetails?.userId
                )
                ?.status.includes("selected")
                ? "Selected"
                : "Select"}
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("rejected")}
              className="disabled:opacity-70 flex h-11 items-center justify-center px-5"
              disabled={
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplications
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplications
                .find(
                  (item) =>
                    item.candidateUserID === currentCandidateDetails?.userId
                )
                ?.status.includes("rejected")
                ? "Rejected"
                : "Reject"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CandidateList;
