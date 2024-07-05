import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import DataGrid from '@/components/DataGrid';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { Pagination } from '@mui/material';
import { TbDots } from "react-icons/tb";

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Courses", path:"/school-dashboard/courses"},
];

const columns = [
    { Header: "Lorem", accessor: "campus" },
    { Header: "Lorem", accessor: "Monthly" },
    { Header: "Lorem", accessor: "lorem" },
    { Header: "Created", accessor: "Created" },
    { Header: "", accessor: "" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
      id: 1,
      campus: "Lorem ipsum",
      Monthly: "Monthly",
      lorem: "3891 Ranchview Dr. Richardson, California 62639",
      Created: "Feb 23, 2024",
      icon: (
        <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
        </div>
      ),
    },
    {
        id: 2,
        campus: "Lorem ipsum",
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Created: "Feb 23, 2024",
                icon: (
          <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
          </div>
        ),
      },
      {
        id: 3,
        campus: "Lorem ipsum",
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Created: "Feb 23, 2024",
        icon: (
          <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
          </div>
        ),
      },
  ];
const page = () => {
  return (
   <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] md:w-[70%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Tutors available for this course</h3>
          <div className="w-[50%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
            <RiSearchLine className="text-xl text-primaryText mr-2" />
            <input
              className="outline-none w-full bg-transparent"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/school-dashboard"}>
            <PrimaryBtn
              text={"Back"}
              icon={<FaArrowLeft />}
              borderColor={"#EDEDEE"}
              color={"black"}
              bg={"#F9FAFC"}
            />
          </Link>

        <Link href={'/school-dashboard/assign-teacher'}>
          <PrimaryBtn
          text={"Assign Teacher"}
          bg={'#682D91'}
          color={'white'}
          icon={<FiPlus className='text-lg'/>}
          />
          </Link>
        </div>
      </div>

        <DataGrid columns={columns} data={data}/>
        <Pagination sx={{my:3}}/>

        </main>
   </React.Fragment>
  )
}

export default page