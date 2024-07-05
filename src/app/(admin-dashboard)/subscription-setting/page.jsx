import React from "react";
import { FiClock } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { TbDots } from "react-icons/tb";
import Pagination from '@mui/material/Pagination';
import Link from "next/link";

const AvatarWithText = ({ src, name }) => {
    return (
      <div className="flex items-center">
        <Avatar alt="Travis Howard" src={'https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg'} sx={{ width: 32, height: 32 }} className="rounded-full" />
        <span className="ml-2 text-[#2E3851] text-[14px]">{name}</span>
      </div>
    );
  };
const RecentUsersTable = () => {
    const data = [
      {
        id: 1,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
        plan: <button className="border-[1px] border-[#FB9C0D] text-[#714708] bg-[#FB9C0D0F] rounded-full px-4 py-1">Member</button>,
        school: "Biffco Enterprises Ltd.",
        expire: "21 Sep, 2020",
        icon:<TbDots />,
      },
      {
        id: 2,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
        plan: <button className="border-[1px] border-[#682D91] text-[#682D91] bg-[#682D910F] rounded-full px-4 py-1">Administrator</button>,
        school: "Acme Co.",
        expire: "21 Sep, 2020",
        icon:<TbDots />,
      },
      {
        id: 4,
        name: <AvatarWithText src="/static/images/avatar/2.jpg" sizes="small" name="jessica.hanson@example.com"/>,
        plan: <button className="border-[1px] border-[#FB9C0D] text-[#714708] bg-[#FB9C0D0F] rounded-full px-4 py-1">Member</button>,
        school: "Riverloop",
        expire: "21 Sep, 2020",
        icon:<TbDots />,
      },
      
    
    ];
    return (
      <>
        <section className="w-full py-6">
          <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
            <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
              <h3 className="">Recent Users</h3>
            </div>
              
              <Link href={'/school-users'}>
                <button 
                className="px-4 py-1  mt-2  rounded-full text-[14px] items-center border-[1px] border-[#EDEDEE] bg-[#F9FAFC]">
                View All
                  </button>
               </Link>
          </div>
          
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
      {/* top heading  */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="">Subscription Settings</h3>

        <Link href={'/subscription'}>
        <button className="rounded-full border-[1px] border-[#EDEDEE] bg-[#F9FAFC] py-1 px-3 font-medium text-[14px] flex items-center justify-evenly">
          <FaArrowLeft className="mr-2"/>
          Back
        </button>
        </Link> 
      </div>

      <div className="flex md:flex-row">
        <div>
          <h4>Subscription Duration</h4>
          {/* search bar duration*/}
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between md:items-end  mb-4">
            <div className="flex justify-between items-center md:w-[35%] rounded-full px-4 h-10 border-[1px] border-[#EDEDEE]">
              <input
                type="text"
                placeholder="30"
                className="outline-none w-full bg-transparent  text-[#BECADA]"
              />
              <FiClock className="text-[#BECADA] text-xl" />
            </div>

            <div className="md:w-[65%] pl-2">
              <p className="text-[#BECADA] text-[14px] ">
                Lorem ipsum dolor sit amet consectetur. Volutpat nisi facilisis
                vivamus at cursus non viverra purus in. Risus ut at viverra
                pellentesque ultrices orci nunc a. Arcu risus maecenas vel
                venenatis felis amet nibh. Velit facilisis dolor id adipiscing
                sit.
              </p>
            </div>
          </div>

          <h4>Max Users per School</h4>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-end">
            <div className="flex justify-between  items-center md:w-[35%] rounded-full px-4 h-10 border-[1px] border-[#EDEDEE]">
              <input
                type="text"
                placeholder="30"
                className="outline-none w-full bg-transparent  text-[#BECADA]"
              />
              <MdOutlineAccountCircle className="text-[#BECADA] text-xl" />
            </div>

            <div className="md:w-[65%] pl-2">
              <p className="text-[#BECADA] text-[14px] ">
              Arcu risus maecenas vel venenatis felis amet nibh. Velit facilisis dolor id adipiscing sit.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* save btn  */}
      <button className="bg-primaryPurple flex items-center justify-evenly text-white font-normal my-4 cursor-pointer rounded-full px-4 py-2 text-[14px]">
        <IoCheckmark className="text-xl mr-1"/>
        Save Preferences
      </button>

      <RecentUsersTable/>
    </main>
  );
};

export default page;
