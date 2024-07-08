"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { IoMdCheckmark } from "react-icons/io";

const Page = () => {
  const [activeTab, setActiveTab] = useState("general");
  

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const featuresData = [
    {
      feature: "Grade 12",
      desc: "Even factoring differences in body weight between children and adults into account, it would still n",
    },
    {
      feature: "Highschool",
      desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
    },
    {
      feature: "Grade 11",
      desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
    },
    {
      feature: "Diploma",
      desc: "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would ",
    },
    {
      feature: "Export",
      desc: "Lorem ipsum dolor sit amet consectetur. Condimentum massa sed amet augue aliquam non tellus feugiat. Vitae volutpat faucibus adipiscing vulputate tellus platea aliquet pellentesque.",
    },
    {
      feature: "Highschool",
      desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
    },
    {
      feature: "Grade 11",
      desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
    },
  ];

  return (
    <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Subscription Membership Plans</h3>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/all-membership-plan"}>
            <PrimaryBtn
              text={"Back"}
              icon={<FaArrowLeft />}
              borderColor={"#EDEDEE"}
              color={"black"}
              bg={"#F9FAFC"}
            />
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <div
          className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${
            activeTab === "general"
              ? "bg-[#682D91] text-[14px] text-white"
              : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
          }`}
          onClick={() => handleTabClick("general")}
        >
          General Info
        </div>
        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "features"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("features")}
        >
          Features
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {activeTab === "general" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <div className="w-[48%]">
                <h4 className="ml-3">Plan Name</h4>
                <input
                  type="text"
                  placeholder="Neal"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>

              <div className="w-[48%]">
                <h4 className="ml-3">Lorem ipsum</h4>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>
            </div>

            <div>
              <h4 className="ml-3">Description</h4>
              <input
                type="text"
                placeholder="Description"
                className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
              />
            </div>

            <div>
              <h4 className="ml-3">Price</h4>
              <input
                type="text"
                placeholder="$0.00"
                className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
              />
            </div>

            <div className="w-[25%] absolute bottom-4">
              <PrimaryBtn
                text={"Save Data"}
                icon={<IoMdCheckmark />}
                color={"white"}
                bg={"#682D91"}
              />
            </div>
          </div>
        )}
        {activeTab === "features" && (
          <div className="flex flex-col w-full pb-10">
            <div className="w-full flex flex-row justify-between items-start">
              <div className="w-[30%]">
                <h4>Feature</h4>
              </div>
              <div className="w-[70%]">
                <h4>Description</h4>
              </div>
            </div>

            {featuresData.map((feature, index) => {
              return (
                <div key={index} className="w-full flex flex-row my-2 items-start">
                  <div className="w-[30%]">
                <h4 className="text-primaryPurple">{feature.feature}</h4>
              </div>
              <div className="w-[60%]">
                <p className="text-[#5B708B] text-[15px] text-justify">{feature.desc}</p>
              </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
