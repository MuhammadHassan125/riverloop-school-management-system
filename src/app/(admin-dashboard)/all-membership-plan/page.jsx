import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import Pagination from '@mui/material/Pagination';
import { IoMdAdd } from "react-icons/io";
import PrimaryBtn from '@/components/dashboard/PrimaryBtn';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const SubscriptionMembershipPlans = () => {
  const data = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Biffco Enterprises Ltd.",
      expire: "21 Sep, 2020",
      price:"$5,90",
      icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Acme Co.",
      expire: "21 Sep, 2020",
      price:"$5,90",
      icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
     },
    {
      id: 4,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Riverloop",
      expire: "21 Sep, 2020",
      price:"$5,90",
      icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit",
      plan:'Monthly',
      school: "Binford Ltd.",
      price:"$5,90",
      expire: "21 Sep, 2020",
      icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
    },
    {
        id: 6,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        price:"$5,90",
        expire: "21 Sep, 2020",
        icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
      },
      {
        id: 7,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        price:"$5,90",
        expire: "21 Sep, 2020",
        icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
      },
      {
        id: 8,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        price:"$5,90",
        expire: "21 Sep, 2020",
        icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
      },
      {
        id: 9,
        name: "Lorem ipsum dolor sit",
        plan:'Monthly',
        school: "Binford Ltd.",
        price:"$5,90",
        expire: "21 Sep, 2020",
        icon: <div className="flex flex-row gap-1 justify-evenly text-primaryText text-[17px]">
        <IoEyeOutline className='hover:text-primaryPurple hover:cursor-pointer'/><FaPen className='hover:text-primaryPurple hover:cursor-pointer'/>
        <AiOutlineDelete className='hover:text-primaryPurple hover:cursor-pointer'/>
        </div>,
      },
  ];
  return (
    <>
      <section className="w-full my-3">
        <div className="flex flex-col md:flex-row justify-between items-centers mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row  md:items-center justify-between">
            <h3 className="">Subscription Membership Plans</h3>
          </div>
            
            <div className='flex items-center flex-row gap-4'>
            <Link href={'/add-membership-plan'}>
              <PrimaryBtn
              text={'New Feature'}
              icon={<IoMdAdd />}
              borderColor={'#682D9133'}
              color={'#682D91'}
              bg={'#f6f2f8'}
              />
            </Link>
            
              <Link href={'/add-membership-plan'}>
              <PrimaryBtn
              text={'New Plan'}
              icon={<IoMdAdd />}
              borderColor={'#682D91'}
              color={'white'}
              bg={'#682D91'}
              />
              </Link>
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
                Renewal
                </th>
                <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">
                Price
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
                    {person.price}
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
    {name:"All Membership Plan", path:"/all-membership-plan"},
  ];
  return (
    <>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        <SubscriptionMembershipPlans/>
    </main>
    </>
  )
}

export default page