"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CommonForm from "../common-form";
import {
  candidateOnboardFormControls,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import { useUser } from "@clerk/nextjs";
import { createProfileAction } from "@/actions";

const OnBoard = () => {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  // console.log(recruiterFormData);

  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );
  // console.log(candidateFormData);

  const currentAuthUser = useUser();
  // console.log(currentAuthUser);
  const { user } = currentAuthUser;

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  function handleRecruiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

  async function createProfile() {
    const data = {
      recruiterInfo: recruiterFormData,
      role: "recruiter",
      isPremiumUser: false,
      userId: user?.id,
      email: user?.primaryEmailAddress?.emailAddress,
    };

    await createProfileAction(data, "/onboard");
  }

  return (
    <div className="bg-white ">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full ">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to the OnBoarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* candidate form */}
        <TabsContent className="" value="candidate">
          <CommonForm
            formControls={candidateOnboardFormControls}
            buttonText={"Save as Candidate"}
            formData={candidateFormData}
            setFormData={setCandidateFormData}
          />
        </TabsContent>
        {/* candidate form */}

        {/* Recruiter Form */}
        <TabsContent className="" value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"Save as Recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
            action={createProfile}
          />
        </TabsContent>
        {/* Recruiter Form */}
      </Tabs>
    </div>
  );
};

export default OnBoard;
