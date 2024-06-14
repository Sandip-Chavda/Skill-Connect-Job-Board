"use client";

import React from "react";
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Companies = ({ jobsList }) => {
  const router = useRouter();

  const createUniqueSetOfCompanies = [
    ...new Set(
      jobsList
        .filter(
          (jobItem) =>
            jobItem?.companyName && jobItem?.companyName.trim() !== ""
        )
        .map((item) => item.companyName)
    ),
  ];

  function handleFilterJobsByCompanyName(getCompanyName) {
    sessionStorage.setItem(
      "filterParams",
      JSON.stringify({
        companyName: [getCompanyName],
      })
    );
    router.push("/jobs");
  }

  return (
    <div className="mx-auto max-w-7xl ">
      <div className="flex items-baseline justify-between border-b pb-6 pt-24 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          All Companies
        </h1>
      </div>

      <div className="pt-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-4">
            <div className="container mx-auto p-0 space-y-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {createUniqueSetOfCompanies &&
                createUniqueSetOfCompanies.length > 0
                  ? createUniqueSetOfCompanies.map((companyName, i) => (
                      <CommonCard
                        key={i}
                        icon={<JobIcon />}
                        title={companyName}
                        footerContent={
                          <Button
                            onClick={() =>
                              handleFilterJobsByCompanyName(companyName)
                            }
                            className="flex h-11 items-center justify-center px-5"
                          >
                            Latest Jobs
                          </Button>
                        }
                      />
                    ))
                  : "Not Any Companies Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
