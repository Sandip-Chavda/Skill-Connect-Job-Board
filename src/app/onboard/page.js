// import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function OnBoardPage() {
  //get the auth user from clerk
  const user = await currentUser();

  //fetch the profile info -> either user is candidate / user is recruiter
  const profileInfo = await fetchProfileAction(user?.id);

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser)
      redirect("/membership");
    else redirect("/");
  } else return <OnBoard />;
}

export default OnBoardPage;

// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import React from "react";

// const OnBoard = () => {
//   return (
//     <div className="bg-white ">
//       <Tabs>
//         <div className="w-full ">
//           <div className="flex items-baseline justify-between border-b pb-6 pt-24">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               Welcome to the OnBoarding
//             </h1>
//             <TabsList>
//               <TabsTrigger value="candiate">Candidate</TabsTrigger>
//               <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
//             </TabsList>
//           </div>
//         </div>
//       </Tabs>
//     </div>
//   );
// };

// export default OnBoard;
