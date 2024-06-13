"use client";

import {
  candidateOnboardFormControls,
  initialCandidateAccountFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import React, { useEffect, useState } from "react";
import CommonForm from "../common-form";
import { updateProfileAction } from "@/actions";

const AccountInfo = ({ profileInfo }) => {
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateAccountFormData
  );

  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );

  console.log(recruiterFormData, "recruiterFormdata");
  console.log(candidateFormData, "CandidateFormdata");

  useEffect(() => {
    if (profileInfo?.role === "recruiter")
      setRecruiterFormData(profileInfo?.recruiterInfo);

    if (profileInfo?.role === "candidate")
      setCandidateFormData(profileInfo?.candidateInfo);
  }, [profileInfo]);

  async function hnadleUpdateAccount() {
    await updateProfileAction(
      profileInfo?.role === "candidate"
        ? {
            _id: profileInfo?._id,
            userId: profileInfo?.userId,
            email: profileInfo?.email,
            role: profileInfo?.role,
            isPremiumUser: profileInfo?.isPremiumUser,
            memmberShipType: profileInfo?.memmberShipType,
            memberShipStartDate: profileInfo?.memberShipStartDate,
            memberShipEndDate: profileInfo?.memberShipEndDate,
            candidateInfo: {
              ...candidateFormData,
              resume: profileInfo?.candidateInfo?.resume,
            },
          }
        : {
            _id: profileInfo?._id,
            userId: profileInfo?.userId,
            email: profileInfo?.email,
            role: profileInfo?.role,
            isPremiumUser: profileInfo?.isPremiumUser,
            memmberShipType: profileInfo?.memmberShipType,
            memberShipStartDate: profileInfo?.memberShipStartDate,
            memberShipEndDate: profileInfo?.memberShipEndDate,
            recruiterInfo: {
              ...recruiterFormData,
            },
          },
      "/account"
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between pb-6 border-b pt-24">
        <h1 className="text-4xl tracking-tight font-bold text-gray-950">
          Account Details
        </h1>
      </div>

      <div className="py-20 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
          <CommonForm
            action={hnadleUpdateAccount}
            formControls={
              profileInfo?.role === "candidate"
                ? candidateOnboardFormControls.filter(
                    (formControl) => formControl.name !== "resume"
                  )
                : recruiterOnboardFormControls
            }
            formData={
              profileInfo?.role === "candidate"
                ? candidateFormData
                : recruiterFormData
            }
            setFormData={
              profileInfo?.role === "candidate"
                ? setCandidateFormData
                : setRecruiterFormData
            }
            buttonText={"Update Profile"}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
