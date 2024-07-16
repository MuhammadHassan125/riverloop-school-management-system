import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';
import { IoMdAdd } from "react-icons/io";

const CouponTable = () => {
  const data = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      plan: <button className="border-[1px] border-[#FB9C0D] bg-[#FB9C0D0F] text-[#714708] rounded-full px-4 py-1">8%</button>,
      school: "Biffco Enterprises Ltd.",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryTex text-[17px]">
        <IoEyeOutline className="hover:text-primaryPurple hover:cursor-pointer"/>
        <FaPen className="hover:text-primaryPurple hover:cursor-pointer"/>
        <AiOutlineDelete className="hover:text-primaryPurple hover:cursor-pointer"/>
        </div>,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      plan: <button className="border-[1px] border-[#FB9C0D] bg-[#FB9C0D0F] text-[#714708] rounded-full px-4 py-1">15%</button>,
      school: "Acme Co.",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryTex text-[17px]">
      <IoEyeOutline className="hover:text-primaryPurple hover:cursor-pointer"/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer"/>
      <AiOutlineDelete className="hover:text-primaryPurple hover:cursor-pointer"/>
      </div>,    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit",
      plan: <button className="border-[1px] border-[#FB9C0D] bg-[#FB9C0D0F] text-[#714708] rounded-full px-4 py-1">22%</button>,
      school: "Riverloop",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryTex text-[17px]">
      <IoEyeOutline className="hover:text-primaryPurple hover:cursor-pointer"/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer"/>
      <AiOutlineDelete className="hover:text-primaryPurple hover:cursor-pointer"/>
      </div>,    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      plan: <button className="border-[1px] border-[#FB9C0D] bg-[#FB9C0D0F] text-[#714708] rounded-full px-4 py-1">31%</button>,
      school: "Binford Ltd.",
      lorem:"Lorem ipsum",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryTex text-[17px]">
      <IoEyeOutline className="hover:text-primaryPurple hover:cursor-pointer"/>
      <FaPen className="hover:text-primaryPurple hover:cursor-pointer"/>
      <AiOutlineDelete className="hover:text-primaryPurple hover:cursor-pointer"/>
      </div>,    },
  ];
  return (
    <>
      <section className="w-full my-3">
        <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">Coupon Management</h3>
          </div>
            
              {/* <button className=" flex justify-between px-3  mt-2 md:mt-0 rounded-full text-[14px] items-center border-[1px] border-[#682D9133] bg-[#682D910F] text-primaryPurple">
            <Link href={'/subscription-setting'} className="flex items-center">
              <IoMdAdd className="text-xl"/>
              Create Coupon
            </Link>
                </button> */}
        </div>
        <div className="overflow-x-auto rounded-sm">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-primaryText text-[14px] ">
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                lorem ipsum
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Cod
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Discount
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                lorem ipsum
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Duration
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
                    {person.school}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.plan}
                  </td>
                  <td className="px-6 text-start py-2 border-b border-gray-200">
                    {person.lorem}
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
  return (
    <main className="w-[98%] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        <CouponTable/>
    </main>
  )
}

export default page