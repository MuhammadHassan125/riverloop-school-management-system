import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { FaArrowLeft } from "react-icons/fa6";

const AllSchoolTable = () => {
  const data = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Biffco Enterprises Ltd.",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple'/>
        <FaPen className='hover:text-primaryPurple'/>
        <AiOutlineDelete className='hover:text-primaryPurple'/>
        </div>,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Acme Co.",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple'/>
        <FaPen className='hover:text-primaryPurple'/>
        <AiOutlineDelete className='hover:text-primaryPurple'/>
        </div>,},
    {
      id: 4,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Riverloop",
      expire: "21 Sep, 2020",
      lorem:"Lorem ipsum",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple'/>
        <FaPen className='hover:text-primaryPurple'/>
        <AiOutlineDelete className='hover:text-primaryPurple'/>
        </div>,},
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Binford Ltd.",
      lorem:"Lorem ipsum",
      expire: "21 Sep, 2020",
      icon: <div className="flex justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple'/>
        <FaPen className='hover:text-primaryPurple'/>
        <AiOutlineDelete className='hover:text-primaryPurple'/>
        </div>,},
    {
        id: 6,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        lorem:"Lorem ipsum",
        expire: "21 Sep, 2020",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]">
          <IoEyeOutline className='hover:text-primaryPurple'/>
          <FaPen className='hover:text-primaryPurple'/>
          <AiOutlineDelete className='hover:text-primaryPurple'/>
          </div>,},
      {
        id: 7,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        lorem:"Lorem ipsum",
        expire: "21 Sep, 2020",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]">
          <IoEyeOutline className='hover:text-primaryPurple'/>
          <FaPen className='hover:text-primaryPurple'/>
          <AiOutlineDelete className='hover:text-primaryPurple'/>
          </div>,},
      {
        id: 8,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        lorem:"Lorem ipsum",
        expire: "21 Sep, 2020",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]">
          <IoEyeOutline className='hover:text-primaryPurple'/>
          <FaPen className='hover:text-primaryPurple'/>
          <AiOutlineDelete className='hover:text-primaryPurple'/>
          </div>,},
      {
        id: 9,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        lorem:"Lorem ipsum",
        expire: "21 Sep, 2020",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]">
          <IoEyeOutline className='hover:text-primaryPurple'/>
          <FaPen className='hover:text-primaryPurple'/>
          <AiOutlineDelete className='hover:text-primaryPurple'/>
          </div>,},
  ];
  return (
    <>
      <section className="w-full my-3">
        <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">All Schools</h3>
          </div>
            
            <Link href={'/school-management'}>
          <button className="rounded-full border-[1px] border-[#EDEDEE] bg-[#F9FAFC]  py-1 px-3 font-medium text-[14px] flex items-center justify-evenly">
          <FaArrowLeft className='mr-2'/>
          Back
        </button>
            </Link>
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
  const breadcrumb = [
    {name:"Dashboard", path:"/admin-dashboard"},
    {name:"School Management", path:"/school-management"},
    {name:"All School", path:"/school-all"},
  ];
  return (
  <>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        <AllSchoolTable/>
    </main>
  </>
  )
}

export default page