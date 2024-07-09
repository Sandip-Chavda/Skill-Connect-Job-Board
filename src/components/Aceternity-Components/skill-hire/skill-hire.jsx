import { cn } from "@/utils/cn";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import { VscTriangleRight } from "react-icons/vsc";
import { IoMdTrendingUp } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineWavingHand } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { VscTriangleLeft } from "react-icons/vsc";
import { MdOutlineGroups3 } from "react-icons/md";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SkillHire = () => {
  return (
    <div className="w-[calc(100%-50px)] h-full mx-auto gap-y-10 gap-x-5  flex flex-col md:flex-row ">
      <div className="h-full md:w-1/2 bg-[#EFEEF3] w-full p-4 rounded-3xl hover:shadow-[0_3px_10px_rgb(220,38,38,1)] shadow-red-600/80 shadow-sm transition-shadow duration-500">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white text-red-600 px-4 rounded-l-2xl p-3">
                <BiSolidCircleHalf size={35} />
              </div>
              <div className="bg-black px-5  md:px-8 text-white rounded-r-2xl p-[0.97rem] md:text-xl text-sm font-semibold">
                Got Skills?
              </div>
            </div>
            <div className="items-center flex">
              <VscTriangleRight className="text-red-600" size={28} />
              <VscTriangleRight className="text-red-600/80" size={22} />
              <VscTriangleRight className="text-red-600/60" size={18} />
            </div>
          </div>

          <p
            className={cn(
              "text-2xl md:text-[2.7rem] mt-8 p-4 font-semibold",
              font.className
            )}
          >
            Why job seekers love us
          </p>
        </div>

        <div className="p-4 space-y-5 font-medium">
          {/*  */}
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="50"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <IoMdTrendingUp className="w-11 h-11 p-1 rounded-xl bg-red-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Connect directly with recruiters at top companies - no third party
              person allowed.
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <GiBookshelf className="w-11 h-11 p-1 rounded-xl bg-red-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Discover all pertinent details upfront. Review salary, leave
              options, and more prior to applying.
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <MdOutlineWavingHand className="w-11 h-11 p-1 rounded-xl bg-red-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Say farewell to lengthy recruiting processes. Our streamlined
              steps ensure instant replies.
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <BsStars className="w-11 h-11 p-1 rounded-xl bg-red-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Explore exclusive job opportunities at startups and tech firms
              that are one-of-a-kind.
            </div>
          </div>
        </div>
      </div>

      <div className="h-full md:w-1/2 bg-[#EFEEF3] w-full p-4 rounded-3xl hover:shadow-[0_3px_10px_rgb(79,70,229,1)] shadow-indigo-600/80 shadow-sm transition-shadow duration-500">
        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white text-indigo-600 px-4 rounded-l-2xl p-3">
                <BiSolidCircleHalf size={35} className="rotate-180" />
              </div>
              <div className="bg-black px-5 md:px-8 text-white rounded-r-2xl p-[0.97rem] md:text-xl text-sm font-semibold">
                Need Talent?
              </div>
            </div>
            <div className="items-center flex">
              <VscTriangleLeft className="text-indigo-600" size={28} />
              <VscTriangleLeft className="text-indigo-600/80" size={22} />
              <VscTriangleLeft className="text-indigo-600/60" size={18} />
            </div>
          </div>

          <p
            className={cn(
              "md:text-[2.7rem] text-2xl mt-8 p-4 font-semibold",
              font.className
            )}
          >
            Why companies love us
          </p>
        </div>

        <div className="p-4 space-y-5 font-medium">
          {/*  */}
          <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <MdOutlineGroups3 className="w-11 h-11 p-1 rounded-xl bg-indigo-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Connect with a vibrant network of over motivated candidates eager
              to work.
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <FaPersonArrowUpFromLine className="w-11 h-11 p-1 rounded-xl bg-indigo-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Revamp your recruiting in 10 minutes for free/premium: post jobs,
              boost branding, and access HR tools.
            </div>
          </div>

          <div
            data-aos-delay="600"
            data-aos="fade-left"
            data-aos-duration="500"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <TbReportSearch className="w-11 h-11 p-1 rounded-xl bg-indigo-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Our platform connects recruiters with top talent and helps to
              recruite top talents.
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="800"
            className="bg-white rounded-xl gap-x-5 items-center flex p-4"
          >
            <div className="">
              <MdOutlineWorkspacePremium className="w-11 h-11 p-1 rounded-xl bg-indigo-600 text-white" />
            </div>
            <div className="text-[15px] text-neutral-600">
              Our membership provides recruiters with highly affordable options
              that are budget-friendly.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="md:w-1/2 w-full bg-green-400 p-4 rounded-3xl min-h-[500px]">
        <div>
          <p>Heading</p>
          <p>heading big</p>
        </div>

        <div>
          <div>Icon</div>
          <div>Discription</div>
        </div>

        <div>
          <div>Icon</div>
          <div>Discription</div>
        </div>

        <div>
          <div>Icon</div>
          <div>Discription</div>
        </div>

        <div>
          <div>Icon</div>
          <div>Discription</div>
        </div>
      </div> */}
    </div>
  );
};

export default SkillHire;
