import Link from 'next/link';
import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import Pagination from '@mui/material/Pagination';
import { Avatar } from '@mui/material';
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const AvatarWithText = ({ src, name }) => {
    return (
      <div className="flex items-center">
        <Avatar alt="Travis Howard" src={'https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg'} sx={{ width: 32, height: 32 }} className="rounded-full" />
        <span className="ml-2 text-[#2E3851] text-[14px]">{name}</span>
      </div>
    );
  };
  function SchoolUsersList()  {
    const myData = [
        {
            id: 1,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#682D91] text-primaryPurple bg-[#682D910F] rounded-full px-4 py-1">Administrator</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 2,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#682D91] text-primaryPurple bg-[#682D910F] rounded-full px-4 py-1">Administrator</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 3,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#27C762] text-[#27C762] bg-[#FB9C0D0F] rounded-full px-4 py-1">Teacher</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 4,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#FB9C0D] text-[#714708] bg-[#FB9C0D0F] rounded-full px-4 py-1">Member</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 5,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#FB9C0D] text-[#714708] bg-[#FB9C0D0F] rounded-full px-4 py-1">Member</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 6,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#27C762] text-[#27C762] bg-[#FB9C0D0F] rounded-full px-4 py-1">Teacher</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        },
        {
            id: 7,
            name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
            plan: <button className="border-[1px] border-[#FB9C0D] text-[#714708] bg-[#FB9C0D0F] rounded-full px-4 py-1">Member</button>,
            school: "Biffco Enterprises Ltd.",
            expire: "21 Sep, 2020",
            icon:<TbDots />,
        }
    ]

    return (
        <>
          <div className="overflow-x-auto rounded-sm">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="text-primaryText text-[14px] ">
                  <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                  User
                  </th>
                  <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                  Campus
                  </th>
                  <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                  Role
                  </th>
                  <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                  Created
                  </th>
                  <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody>
                {myData.map((person) => (
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
        </>
    )
};
const page = () => {
  const breadcrumb = [
    {name:"Dashboard", path:"/admin-dashboard"},
    {name:"Users", path:"/user"},
    {name:"School Users", path:"/school-users"},
  ];
  return (
    <>
    <Breadcrumb items={breadcrumb}/>
        <main className="w-[98%] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        <section className="w-full my-3">
        <div className="flex flex-col md:flex-row justify-between items-center mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">School Users</h3>
            <div className="w-full md:w-[60%] flex  justify-between items-center px-2 border-[1px] rounded-full py-2 border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-[#682D91] mr-2" />
              <input
                className="outline-none w-full text-[14px] bg-transparent"
                type="text"
                placeholder="Search..."
              />
            </div>{" "}
          </div>
            
            <Link href={'/user'}>
          <button className="rounded-full border-[1px] border-[#EDEDEE] bg-[#F9FAFC]  py-1 px-3 font-medium text-[14px] flex items-center justify-evenly">
          <FaArrowLeft className='mr-2'/>
          Back
        </button>
            </Link> 
        </div>
        </section>

        <section>
            <SchoolUsersList/>
        </section>

        </main>

    </>
)
}

export default page