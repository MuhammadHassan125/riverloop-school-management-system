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
import { Pagination } from "@mui/material";

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"All School", path:"/school-dashboard/all-school"},
]

const columns = [
    { Header: "Lorem", accessor: "lorem" },
    { Header: "Lorem", accessor: "lorem" },
    { Header: "Lorem", accessor: "lorem" },
    { Header: "", accessor: "" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
      id: 1,
      name: "Lorem ipsum",
      lorem: "Lorem ipsum",
      date: "Feb 23, 2024 - Feb 29, 2024",
      icon: (
        <div className="flex text-primaryText gap-3 text-lg">
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
          <h3 className="">School Settings</h3>
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
        </div>
      </div>

      <DataGrid columns={columns} data={data}/>
      <Pagination sx={{mt:2}}/>
</main>
    </React.Fragment>
)
}

export default page