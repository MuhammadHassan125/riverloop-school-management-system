import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

const page = () => {
  return (
    <>
      <main className="w-[98%] h-full p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
          <div className="flex w-[100%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">School Management</h3>

            <div className="flex items-center">
                <Link href={'/school-all'}>
                <PrimaryBtn
                text={'View All Schools'}
                bg={'#F9FAFC'}
                borderColor={'#EDEDEE'}
                />
                </Link>
                <BsThreeDots className="ml-3 text-xl"/>
            </div>
          </div>

          <div className="my-10">
             <h4>Campus Limitation</h4>
             <div className=" flex item-center px-4 border-[#EDEDEE] border-[1px] py-2 w-[30%] rounded-full">
                <input
                type="text"
                placeholder="5"
                className="w-full text-[14px] border-none outline-none"
                />
                <BsHouseDoor />
             </div>
             <p className="text-primaryText my-3">Define a limit on the number of campuses each school can add</p>

             <div className="w-[16%]">
             <PrimaryBtn
             text={'Save Preferences'}
             icon={<IoMdCheckmark />}
             bg={'#682D91'}
             color={'white'}
             />
             </div>
          </div>
      </main>
    </>
  );
};

export default page;
