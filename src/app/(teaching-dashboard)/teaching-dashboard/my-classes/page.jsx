"use client";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Page = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    const featuresData = [
        {
          feature: "Grade 12",
          desc: "Even factoring differences in body weight between children and adults into account, it would still n",
        },
        {
          feature: "Highschool",
          desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
        },
        {
          feature: "Grade 11",
          desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
        },
        {
          feature: "Diploma",
          desc: "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would ",
        },
        {
          feature: "Export",
          desc: "Lorem ipsum dolor sit amet consectetur. Condimentum massa sed amet augue aliquam non tellus feugiat. Vitae volutpat faucibus adipiscing vulputate tellus platea aliquet pellentesque.",
        },
        {
          feature: "Highschool",
          desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
        },
        {
          feature: "Grade 11",
          desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
        },
      ];

      const breadcrumb = [
        {name:'Dashboard', path:'/teaching-dashboard'},
        {name:'My Classes', path:'/teaching-dashboard/my-classes'},
      ]

  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb}/>
      <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">

        {/* top heading section  */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3>My Classes</h3>
          </div>

          <div className="flex flex-row items-center gap-3">
            <h6 className="text-primaryText">Results</h6>
            <div className=" flex justify-between items-center px-2 border-[2px] rounded-full py-1 border-[#682D9133] bg-transparent ">
              <RiSearchLine className="text-xl text-[#682D91] mr-2" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Typing Search..."
              />
            </div>
            <Link href={'/teaching-dashboard'}>
            <PrimaryBtn
              text={"Back"}
              icon={<IoArrowBackSharp />}
              bg={"#F9FAFC"}
            />
          </Link>
            <BiDotsHorizontalRounded 
            onClick={handleClick}
            className="text-primaryText text-[2rem] hover:cursor-pointer hover:text-primaryPurple" />
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Lorem ipsum</MenuItem>
      </Menu>
          </div>
        </div>


        <div className="flex flex-col my-6 w-full">
            <div className="w-full flex flex-row justify-between items-start">
              <div className="w-[30%]">
                <h4>Degree</h4>
              </div>
              <div className="w-[70%]">
                <h4>Competition Class</h4>
              </div>
            </div>

            {featuresData.map((feature, index) => {
              return (
                <div key={index} className="w-full flex flex-row my-1 items-start bg-[#682D910F] p-2 rounded-md">
                  <div className="w-[30%]">
                <h4 className="text-primaryPurple">{feature.feature}</h4>
              </div>
              <div className="w-[60%]">
                <p className="text-[#5B708B] text-[15px] text-justify">{feature.desc}</p>
              </div>
                </div>
              );
            })}
          </div>
      </main>
    </React.Fragment>
  );
};

export default Page;
