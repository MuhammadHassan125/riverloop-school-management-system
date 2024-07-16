import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Avatar from '@mui/material/Avatar';
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const AvatarWithText = ({ src, name }) => {
    return (
      <div className="flex items-center">
        <Avatar alt="Travis Howard" src={'https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg'} sx={{ width: 32, height: 32 }} className="rounded-full" />
        <span className="ml-2 text-[#2E3851] text-[14px]">{name}</span>
      </div>
    );
  };
const SubscriptionTable = () => {
  const data = [
    {
      id: 1,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#EDEDEE] bg-[#F9FAFC] rounded-full px-4 py-1">Free</button>,
      school: "Biffco Enterprises Ltd.",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
      <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
      <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
      </div>,    },
    {
      id: 2,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#682D91] bg-[#682D91] text-white rounded-full px-4 py-1">Premium</button>,
      school: "Acme Co.",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
        <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
        <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
        </div>,
    },
    {
      id: 4,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#682D91] bg-[#F9FAFC] rounded-full px-4 py-1">Pro</button>,
      school: "Riverloop",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
      <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
      <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
      </div>,    },
    {
      id: 5,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#EDEDEE] bg-[#F9FAFC] rounded-full px-4 py-1">Free</button>,
      school: "Binford Ltd.",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
      <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
      <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
      </div>,    },
    {
      id: 6,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#EDEDEE] bg-[#F9FAFC] rounded-full px-4 py-1">Free</button>,
      school: "Binford Ltd.",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
      <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
      <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
      </div>,    },
    {
      id: 6,
      name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="deanna.curtis"/>,
      plan: <button className="border-[1px] border-[#682D91] bg-[#F9FAFC] rounded-full px-4 py-1">Pro</button>,
      school: "Riverloop",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
      <IoEyeOutline  className="hover:text-primaryPurple hover:cursor-pointer "/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer "/>
      <AiOutlineDelete  className="hover:text-primaryPurple hover:cursor-pointer "/>
      </div>,
          },
  ];
  return (
    <>
      <section className="w-full my-3">
        <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">Subscriptions</h3>
            <div className="w-full md:w-[60%] flex  justify-between items-center px-2 border-[1px] rounded-full py-2 border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-[#682D91] mr-2" />
              <input
                className="outline-none w-full text-[14px] bg-transparent"
                type="text"
                placeholder="Search..."
              />
            </div>{" "}
          </div>
            
              <button className=" flex justify-between px-3 w-[30%] mt-2 md:mt-0 md:w-[18%] rounded-full text-[14px] items-center border-[1px] border-[#682D9133] bg-[#682D910F] text-primaryPurple">
            <Link href={'/subscription-setting'} className="flex items-center">
              <CiSettings className="text-xl"/>
              Subscription Settings
            </Link>
                </button>
        </div>
        <div className="overflow-x-auto rounded-sm">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-primaryText text-[14px] ">
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Owner
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Subscription Plan
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                School
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Expires
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((person) => (
                <tr key={person.id} className="text-[#2E3851] text-[14px]">
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.name}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.plan}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.school}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.expire}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.icon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination count={3} sx={{ my: 2 }}/>

      </section>
    </>
  );
};
const page = () => {
  const breadcrumb = [
    {name:"Dashboard", path:"/admin-dashboard"},
    {name:"Subscription", path:"/subscription"},
  ];
  return (
    <>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      <SubscriptionTable />
    </main>
    </>
  );
};

export default page;
