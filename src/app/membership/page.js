import { fetchProfileAction } from "@/actions";
import Memebrship from "@/components/membership";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const MemberShipPage = async () => {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);

  if (!profileInfo) redirect("/onboard");

  return <Memebrship profileInfo={profileInfo} />;
};

export default MemberShipPage;
