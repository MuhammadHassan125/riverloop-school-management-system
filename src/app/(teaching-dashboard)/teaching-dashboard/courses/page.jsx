import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
const page = () => {

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

    const breadcrumb = [
      {name:'Dashboard', path:'/teaching-dashboard'},
      {name:'Courses', path:'/teaching-dashboard/courses'},
    ]
  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb}/>
      <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        {/* top heading section  */}
        <div className="flex flex-row justify-between">
          <div>
            <h3>My Courses</h3>
          </div>

          <div className="flex">
            <Link href={"/teaching-dashboard"}>
              <PrimaryBtn
                text={"Back"}
                icon={<IoArrowBackSharp />}
                bg={"#F9FAFC"}
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
                        alt="img"
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
  );
};

export default page;
