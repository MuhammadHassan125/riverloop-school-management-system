import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import PrimaryInput from '@/components/PrimaryInput';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Campus", path:"/school-dashboard/campus"},
    {name:"School Courses", path:"/school-dashboard/courses"},
    {name:"Editing Course", path:"/school-dashboard/editing-course"},
];

const page = () => {
  return (
   <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-min-screen p-3  pb-10 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] md:w-[50%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Editing Course</h3>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/school-dashboard/new-campus-courses"}>
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

        <div className='flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-4 justify-between'>

            <div className='w-[100%] md:w-[45%]'>
                <h4 className='ml-4'>Campus Name Example</h4>
                <PrimaryInput
                type={"text"}
                placeholder={"Campus Name Example"}
                />
                </div>

                <div className='w-[100%] md:w-[45%]'>
                <h4 className='ml-4'>Campus 01</h4>
                <PrimaryInput
                type={"text"}
                placeholder={"Campus 01"}
                />
                </div>


            </div>

            
            <div className='w-full'>
                <h4 className='ml-4'>Course Description</h4>
                <PrimaryInput
                type={"text"}
                placeholder={"Campus 01"}
                />
            </div>

            <div className='flex flex-col md:flex-row gap-4 justify-between mb-6'>

<div className='w-[100%] md:w-[45%]'>
    <h4 className='ml-4'>Tutors for this Course</h4>
    <PrimaryInput
    type={"text"}
    placeholder={"Select Tutor"}
    icon={<MdOutlineKeyboardArrowDown />}
    />
    </div>

    <div className='w-[100%] md:w-[45%]'>
    <h4 className='ml-4'>Total Hours</h4>
    <PrimaryInput
    type={"text"}
    placeholder={"628"}
    icon={<LuClock5 />    }
    />
    </div>


</div>
        </div>
        <Link href={'/school-dashboard/courses'}>
        <PrimaryBtn
          text={"View Tutors"}
          bg={"#682D91"}
          color={"white"}
          className="my-6"
          />
          </Link>
        </main>
   </React.Fragment>
  )
}

export default page