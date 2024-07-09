import { fetchProfileAction } from "@/actions";
import AosAnimation from "@/components/Aceternity-Components/aos-animation/aos-helper";
import { BackgroundGradientDemo } from "@/components/Aceternity-Components/background-moving-border/backgroundgradient";
import { BentoGridThirdDemo } from "@/components/Aceternity-Components/Bento-Grid/hero-grid";
import { ConnectWithUs } from "@/components/Aceternity-Components/connect-with-us/hero-grid";
import HeroHeading from "@/components/Aceternity-Components/hero-heading/heroheading";
import SkillHire from "@/components/Aceternity-Components/skill-hire/skill-hire";
// import Header from "@/components/header";
import Marquee from "@/components/marquee/marquee";
// import HomepageButtonControls from "@/components/homepage-button-controls";
import { currentUser } from "@clerk/nextjs/server";
// import Image from "next/image";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);

  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <Fragment>
      <AosAnimation />

      <section className="relative w-full h-full min-h-screen pb-10 ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
            <BentoGridThirdDemo />
          </div>
        </div>
      </section>

      <section className="relative w-full h-full -mb-20">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row md:mt-36 mt-24">
            <HeroHeading title={"Companies Who Used Our Platform"} />
          </div>
        </div>
      </section>

      <section className="relative w-full h-full">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
            <Marquee />
          </div>
        </div>
      </section>

      <section className="relative w-full h-full pb-10 ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-24">
            <SkillHire />
          </div>
        </div>
      </section>

      <section className="relative w-full h-full -mb-6">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse items-center justify-center lg:flex-row mt-14">
            <HeroHeading title={"Connect with me"} />
          </div>
        </div>
      </section>

      <section className="relative w-full h-full pb-10 ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-24">
            <ConnectWithUs />
          </div>
        </div>
      </section>

      <section className="w-full h-full relative">
        <div className="w-full h-full absolute -bottom-1">
          <div className="mt-24">
            <BackgroundGradientDemo />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

{
  /* <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
              <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
                <span className="flex space-x-2">
                  <span className="block w-14 mb-2 border-b-2 border-gray-700"></span>
                  <span className="font-medium text-gray-600">
                    One Stop Solution to Get Job.
                  </span>
                </span>

                <h1 className="text-3xl mt-5 lg:text-7xl text-black font-extrabold">
                  Get The Best Jobs From Top Companies.
                </h1>
                <div className="w-full mt-6 flex items-center text-white justify-start gap-2">
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
              </div>
            </section>

            <section className="relative pointer-events-none w-full lg:w-[50%] flex items-center justify-end">
              <Image
                height={100}
                width={100}
                alt="image"
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                className="h-[450px] z-10 pointer-events-none w-full object-contain"
              />
            </section> */
}
