import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import Image from 'next/image';

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Campus", path:"/school-dashboard/campus"},
    {name:"School Courses", path:"/school-dashboard/courses"},
];

const coursesCollection = [
    {
        img:"/images/image.png",
        heading:"Robotics",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (1).png",
        heading:"Technology",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (2).png",
        heading:"Arts",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (3).png",
        heading:"Medicine",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (4).png",
        heading:"Contrabbasso",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (5).png",
        heading:"Corso di scenografia",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (6).png",
        heading:"Danza Contemporanea",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
    {
        img:"/images/image (7).png",
        heading:"Corso di scultura",
        subHeading:"@schoolname",
        users:"96 Users",
        txt:"As Uber works through a huge amount of internal management turmoil."
    },
];

const page = () => {
  return (
   <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] lg:w-[60%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Campus01 Courses Management</h3>
          <div className="w-[40%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
            <RiSearchLine className="text-xl text-primaryText mr-2" />
            <input
              className="outline-none w-full bg-transparent"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center flex-row gap-4">
         
        <Link href={'/school-dashboard/editing-course'}>
          <PrimaryBtn
          text={"New Courses"}
          bg={'#682D910F'}
          color={'#682D91'}
          icon={<FiPlus className='text-lg'/>}
          />
          </Link>
        </div>
      </div>

    {/* main content  */}
    <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-between items-center my-4">
            {coursesCollection.map((course, index) => {
                return(
                    <div key={index} className="w-[100%] md:w-[23%] rounded-md flex flex-col gap-1">
                        <Image
                        src={course.img}
                        width={600}
                        height={600}
                        />
                        <h4 className="font-semibold">{course.heading}</h4>
                        <div className="flex justify-between items-center">
                            <h6>{course.subHeading}</h6>
                            <p className="text-primaryText text-[14px]">{course.users}</p>
                        </div>
                        <p className="text-primaryText text-[15px]">
                            {course.txt}
                        </p>
                    </div>
                )
            })}
        </div>

        </main>
   </React.Fragment>
  )
}

export default page