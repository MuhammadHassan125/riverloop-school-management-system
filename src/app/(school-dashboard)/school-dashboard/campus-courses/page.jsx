import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaPen } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import PrimaryInput from "@/components/PrimaryInput";
import { IoMdClose } from "react-icons/io";

const breadcrumb = [
  { name: "Dashboard", path: "/school-dashboard" },
  { name: "Campus", path: "/school-dashboard/campus" },
  { name: "New Course", path: "/school-dashboard/campus-courses" },
];

const campusData = [
  {
    name: "Christmass",
    para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
  },
  {
    name: "Other",
    para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
  },
  {
    name: "Another one",
    para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
  },
  {
    name: "Other",
    para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
  },
];
const page = () => {
  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb} />
      <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        {/* top heading  */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex w-[100%] md:w-[70%]  flex-col md:flex-row md:items-center justify-between">
            <h3 className="">Editing Campus01 Informations</h3>
            <div className="w-[50%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-primaryText mr-2" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex md:items-center flex-row gap-4">
            <Link href={"/school-dashboard/campus"}>
              <PrimaryBtn
                text={"Back"}
                icon={<FaArrowLeft />}
                borderColor={"#EDEDEE"}
                color={"black"}
                bg={"#F9FAFC"}
              />
            </Link>

            <Link href={"/school-dashboard/new-campus-courses"}>
              <PrimaryBtn
                text={"Add Course"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* left side  */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">
            <div>
              <h4>Campus Name</h4>
              <PrimaryInput placeholder={"Campus Name Example"} type={"text"} />
            </div>

            <div>
              <h4>Campus Informations</h4>
              <p className="text-primaryText text-[14px]">
                Mi vel consequat tempor aliquet vitae mattis. In duis orci
                viverra porttitor. Ipsum vitae libero id etiam sociis interdum.
                Consequat fermentum lorem sed massa mattis fusce arcu. Nibh
                lectus proin enim facilisis imperdiet.
              </p>
            </div>

            {/* campus holidays */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaRegClock className="text-primaryText text-lg" />
                <h4>Campus Hollidays</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add Holliday"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            {/* campus grid data  */}
            <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
              {campusData.map((item, index) => (
                <>
                  <div className="flex gap-3 items-center" key={index}>
                    <h4>{item.name}</h4>
                  </div>

                  <div className="flex items-center gap-3 text-primaryText">
                    <p className=" text-[14px]">{item.para}</p>
                    <FaPen />
                  </div>
                </>
              ))}
            </div>

            <div>
              <PrimaryBtn
                text={"Save"}
                type={"submit"}
                bg={"primaryPurple"}
                color={"white"}
                icon={<IoMdCheckmark className="text-lg" />}
              />
            </div>
          </div>

          {/* right side  */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">
            <div>
              <h4>Location</h4>
              <PrimaryInput
                placeholder={"3891 Ranchview Dr. Richardson, California 62639"}
                type={"text"}
                icon={<FaPen />}
              />
            </div>

            <p>google map will come here</p>

            {/* Laboratory */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <h4>Laboratory</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add Laboratory"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            {/* labortory tabs data  */}
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <button className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Tech Laboratory
                <IoMdClose />
                </button>

                <button className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Laboratory Medicine
                <IoMdClose />
                </button>

                <button className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Lab 03
                <IoMdClose />
                </button>

                <button className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Lab 04
                <IoMdClose />
                </button>

                <button className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Laboratory of Inventions
                <IoMdClose />
                </button>
            </div>

          
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default page;
