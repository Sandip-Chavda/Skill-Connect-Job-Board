import { fetchProfileAction } from "@/actions";
import HomepageButtonControls from "@/components/homepage-button-controls";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);

  const profileInfo = await fetchProfileAction(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");

  return (
    <Fragment>
      {/* <div className="bg-white">
        <div className="relative w-full ">
          <div className="min-h-screen flex">
            <div className="container m-auto p-0">
              <div className="flex items-center flex-wrap -mt-16 gap-12 lg:gap-0">
                <div className="lg:w-5/12 space-y-8">
                  <span className="flex space-x-2 ">
                    <span className="block w-14 mb-2 border-b-2 border-gray-700"></span>
                    <span className="font-medium text-gray-600">
                      One Stop Solution to Get Job.
                    </span>
                  </span>
                  <h1 className="text-4xl font-bold md:text-6xl">
                    The Best <br /> Job Board App
                  </h1>
                  <p className="text-xl text-gray-700 ">
                    Get Best Jobs From Top Companies & Build Your Carrier.
                  </p>
                  <HomepageButtonControls
                    user={JSON.parse(JSON.stringify(user))}
                    profileInfo={profileInfo}
                  />
                </div>
                <div className="hidden relative md:block lg:w-7/12">
                  <Image
                    className="relative ml-auto"
                    alt="img"
                    width={650}
                    height={100}
                    src="./HeroImg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="relative w-full h-full min-h-screen pb-10 ">
        <div className="w-full h-full relative">
          <div className="flex flex-col-reverse lg:flex-row gap-10 mt-16">
            <section className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
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
              {/* <Image
                height={100}
                width={100}
                alt="image"
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
              /> */}
              <img
                src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                alt="hero image"
                className="h-[450px] z-10 pointer-events-none w-full object-contain"
              />
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
