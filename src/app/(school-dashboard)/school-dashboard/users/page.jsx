import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import Link from 'next/link';
import DataGrid from '@/components/DataGrid';
import { FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { Avatar, Pagination } from "@mui/material";
import { FiPlus } from "react-icons/fi";

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"School Users", path:"/school-dashboard/users"},
]

const columns = [
    { Header: "User", accessor: "User" },
    { Header: "Classes", accessor: "Classes" },
    { Header: "Role", accessor: "Role" },
    { Header: "Created", accessor: "Created" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
        id: 1,
        User: (
            <div className='flex gap-2 items-center'>
                <Avatar 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAll_iIwU59RPDJtIIWVusSkLAhCgayKBrw&s'
                sizes='sm'
                />
                neal.simmons@example.com
                </div>
        ),
        Classes: "Lorem, ipsum, other",
        Role: (
            <PrimaryBtn 
            bg={'#EC1E790F'}
            borderColor={'#EC1E79'}
            text={"Tutor"}
            />
        ) ,
        Created: "21 Sep, 2020",
        icon: (
          <div className="flex text-primaryText gap-2 text-lg">
            <FiEye className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <MdModeEdit className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <AiOutlineDelete className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
          </div>
        ),
    },
    {
        id: 2,
        User: (
            <div className='flex gap-2 items-center'>
                <Avatar 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAll_iIwU59RPDJtIIWVusSkLAhCgayKBrw&s'
                sizes='sm'
                />
                neal.simmons@example.com
                </div>
        ),
        Classes: "Lorem, ipsum, other",
        Role: (
            <PrimaryBtn 
            bg={'#27C7620F'}
            borderColor={'#27C762'}
            text={"Teacher"}
            />
        ) ,
        Created: "21 Sep, 2020",
        icon: (
          <div className="flex text-primaryText gap-2 text-lg">
            <FiEye className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <MdModeEdit className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <AiOutlineDelete className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
          </div>
        ),
    },
    {
        id: 3,
        User: (
            <div className='flex gap-2 items-center'>
                <Avatar 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAll_iIwU59RPDJtIIWVusSkLAhCgayKBrw&s'
                sizes='sm'
                />
                neal.simmons@example.com
                </div>
        ),
        Classes: "Lorem, ipsum, other",
        Role: (
            <PrimaryBtn 
            bg={'#FB9C0D0F'}
            borderColor={'#FB9C0D'}
            text={"Student"}
            />
        ) ,
        Created: "21 Sep, 2020",
        icon: (
          <div className="flex text-primaryText gap-2 text-lg">
            <FiEye className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <MdModeEdit className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
            <AiOutlineDelete className="hover:bg-primaryBackground hover:text-primaryPurple hover:cursor-pointer"/>
          </div>
        ),
    },
    {
        id: 3,
        User: (
            <div className='flex gap-2 items-center'>
                <Avatar 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAll_iIwU59RPDJtIIWVusSkLAhCgayKBrw&s'
                sizes='sm'
                />
                neal.simmons@example.com
                </div>
        ),
        Classes: "Lorem, ipsum, other",
        Role: (
            <PrimaryBtn 
            bg={'#682D910F'}
            borderColor={'#682D91'}
            text={"Administrator"}
            />
        ) ,
        Created: "21 Sep, 2020",
        icon: (
          <div className="flex text-primaryText gap-2 text-lg">
            <FiEye />
            <MdModeEdit />
            <AiOutlineDelete />
          </div>
        ),
    },
  ];
const page = () => {
  return (
    <React.Fragment>
    <Breadcrumb items={breadcrumb} />
    <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] md:w-[50%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">School Users</h3>
          <div className="w-[60%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
            <RiSearchLine className="text-xl text-primaryText mr-2" />
            <input
              className="outline-none w-full bg-transparent"
              type="text"
              placeholder="Search..."
            />
          </div>
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

        <Link href={'/school-dashboard/user-profile'}>
          <PrimaryBtn
          text={"New User"}
          bg={'#682D91'}
          color={'white'}
          icon={<FiPlus className='text-lg'/>}
          />
          </Link>
        </div>
      </div>

      <DataGrid columns={columns} data={data}/>
      <Pagination sx={{mt:2}}/>
</main>
    </React.Fragment>
)
}

export default page