"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { IoMdCheckmark } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import PrimaryInput from "@/components/PrimaryInput";
import { FaRegEyeSlash } from "react-icons/fa";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

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
const Page = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const breadcrumb =[
    {name:'Dashboard', path:'/teaching-dashboard'},
    {name:'Settings', path:'/teaching-dashboard/settings'},
  ]

  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Settings</h3>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/teaching-dashboard"}>
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
      <div className="flex flex-wrap flex-row gap-2">
        <div
          className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${
            activeTab === "personal"
              ? "bg-[#682D91] text-[14px] text-white"
              : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
          }`}
          onClick={() => handleTabClick("personal")}
        >
          Personal Info
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "qualifications"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("qualifications")}
        >
          Qualifications
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "availablity"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("availablity")}
        >
          Availablity
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "Credentials"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("Credentials")}
        >
          Credentials
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {activeTab === "personal" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <div className="w-[48%]">
                <h4 className="ml-3">First Name</h4>
                <input
                  type="text"
                  placeholder="Neal"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>

              <div className="w-[48%]">
                <h4 className="ml-3">Last Name</h4>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="w-[48%]">
                <h4 className="ml-3">Birthdate</h4>
                <input
                  type="text"
                  placeholder="Neal"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>

              <div className="w-[48%]">
                <h4 className="ml-3">Place of Birth</h4>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>
            </div>

            <div>
              <h4 className="ml-3">Residence Address</h4>
              <input
                type="text"
                placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
                className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
              />
            </div>

            <div>
              <h4 className="ml-3">Zipcode</h4>
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

        {activeTab === "qualifications" && (
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
                <div
                  key={index}
                  className="w-full flex flex-row my-2 items-start"
                >
                  <div className="w-[30%]">
                    <h4 className="text-primaryPurple">{feature.feature}</h4>
                  </div>
                  <div className="w-[60%]">
                    <p className="text-[#5B708B] text-[15px] text-justify">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "availablity" && (
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
                <div
                  key={index}
                  className="w-full flex flex-row my-2 items-start"
                >
                  <div className="w-[30%]">
                    <h4 className="text-primaryPurple">{feature.feature}</h4>
                  </div>
                  <div className="w-[60%]">
                    <p className="text-[#5B708B] text-[15px] text-justify">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

{activeTab === "Credentials" && (
       <>
          <div className="flex flex-col gap-4">
              <h4  className="text-[#5B708B]">Account E-mail</h4>
            <div className="flex flex-col justify-between gap-3">
              <div className=" w-full md:w-[48%]">
                <h4 className="ml-3">E-mail</h4>

             <PrimaryInput
             type={"email"}
             placeholder={'teacher@gmail.com'}
             icon={<AiOutlineMail />}
             />
              </div>

              {/* edit div  */}
              <div className="text-primaryPurple flex items-center gap-2">
              <MdModeEditOutline />
                <p>Edit e-mail</p>
              </div>

              <h4 className="text-[#5B708B]">Security Settings</h4>
              <div className=" w-full md:w-[48%]">
                <h4 className="ml-3">Password</h4>

             <PrimaryInput
             type={"password"}
             placeholder={'*********'}
             icon={<FaRegEyeSlash  />}
             />
              </div>

              <div className=" w-full md:w-[48%]">
                <h4 className="ml-3">Confirm Password</h4>

             <PrimaryInput
             type={"password"}
             placeholder={'*********'}
             icon={<FaRegEyeSlash  />}
             />
              </div>

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
       </>
        )}
      </div>
    </main>
    </React.Fragment>
  );
};

export default Page;
