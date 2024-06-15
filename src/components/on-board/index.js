"use client";

import React, { useEffect, useState } from "react";
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
import { createClient } from "@supabase/supabase-js";

// SupaBase Client Making

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// SupaBase Client Making

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

  const [file, setFile] = useState(null);

  const currentAuthUser = useUser();
  // console.log(currentAuthUser);
  const { user } = currentAuthUser;

  function handleFileChange(event) {
    event.preventDefault();
    console.log(event.target.files);
    setFile(event.target.files[0]);
  }

  async function handleUploadPdfToSupabase() {
    const { data, error } = await supabaseClient.storage
      .from("Skill-Connect-Public")
      .upload(`/public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data, error);

    if (data) {
      setCandidateFormData({
        ...candidateFormData,
        resume: data.path,
      });
    }
  }

  useEffect(() => {
    if (file) handleUploadPdfToSupabase();
  }, [file]);

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

  function handleCandidateFormValid() {
    return Object.keys(candidateFormData).every(
      (key) => candidateFormData[key].trim() !== ""
    );
  }

  console.log(candidateFormData);

  async function createProfile() {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateFormData,
            role: "candidate",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
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
            handleFileChange={handleFileChange}
            isBtnDisabled={!handleCandidateFormValid()}
            action={createProfile}
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
