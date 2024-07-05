import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';
import { IoMdAdd } from "react-icons/io";
import { Avatar } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa6";

const AvatarWithText = ({ src, name }) => {
    return (
      <div className="flex items-center">
        <Avatar alt="Travis Howard" src={'https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg'} sx={{ width: 32, height: 32 }} className="rounded-full" />
        <span className="ml-2 text-[#2E3851] text-[14px]">{name}</span>
      </div>
    );
  };
const UsersList = () => {
    const data = [
      {
        id: 1,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="neal.simmons@example.com"/>,
        plan: <button className="border-[1px] border-[#682D91] bg-[#682D910F] text-[#682D91] rounded-full px-4 py-1">Administrator</button>,
        school: "Biffco Enterprises Ltd.",
        expire: "21 Sep, 2020",
        lorem:"Lorem ipsum",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]"><IoEyeOutline /><FaPen/><AiOutlineDelete /></div>,
      },
      {
        id: 2,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="neal.simmons@example.com"/>,
        plan: <button className="border-[1px] border-[#682D91] bg-[#682D910F] text-[#682D91] rounded-full px-4 py-1">Administrator</button>,
        school: "Acme Co.",
        expire: "21 Sep, 2020",
        lorem:"Lorem ipsum",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]"><IoEyeOutline /><FaPen/><AiOutlineDelete /></div>,
      },
      {
        id: 4,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="neal.simmons@example.com"/>,
        plan: <button className="border-[1px] border-[#682D91] bg-[#682D910F] text-[#682D91] rounded-full px-4 py-1">Administrator</button>,
        school: "Riverloop",
        expire: "21 Sep, 2020",
        lorem:"Lorem ipsum",
        icon: <div className="flex justify-evenly text-primaryText text-[17px]"><IoEyeOutline /><FaPen/><AiOutlineDelete /></div>,
      },
      
    ];
    return (
      <>
        <section className="w-full my-3">
          <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
            <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
              <h3 className="">Coupon Management</h3>
            </div>

            <div className='flex '>
            <button className=" mr-3 rounded-full border-[1px] border-[#EDEDEE] bg-[#F9FAFC] py-1 px-3 font-medium text-[14px] flex items-center justify-evenly">
          <FaArrowLeft className="mr-2"/>
          Back
        </button>

                <button className=" flex justify-between px-3  mt-2 md:mt-0 rounded-full text-[14px] items-center border-[1px] border-[#682D9133] bg-[#682D910F] text-primaryPurple">
              <Link href={'/subscription-setting'} className="flex items-center">
                <IoMdAdd className="text-xl"/>
                New User
              </Link>
                  </button>
            </div>
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
                  Role
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
        <UsersList/>
    </main>
  )
}

export default page