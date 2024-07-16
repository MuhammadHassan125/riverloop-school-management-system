'use client';
import React,{useState} from 'react'
import { Drawer } from '@mui/material'
import {
    LayoutDashboard,
    StickyNote,
    Layers,
    Flag,
    Calendar,
    Settings,
  } from "lucide-react";
  import { FiMenu } from "react-icons/fi";
  import { MdOutlineClose } from "react-icons/md";
  import { IconButton } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';

const SchoolMobileMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        setDrawerOpen(open);
      };

  return (
    <>
    <div className="w-full px-2 text-black flex justify-between items-center md:hidden">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={90}
                height={90}
                className="translate-y-1"
              />
              <IconButton onClick={toggleDrawer(true)}>
                <FiMenu className="text-xl -mr-2 translate-y-1" />
              </IconButton>
              
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                  backgroundColor:"#f9fafc"
                }}
              >
                <div
                  className="w-[100vw] relative"
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  style={{ color: "black" }}
                >
                  <MdOutlineClose
                    className="text-3xl absolute text-primaryText right-0 top-0 m-4"
                    onClick={toggleDrawer(false)}
                  />
                  

                  {/* sidebar will come here  */}
                  <div className='flex flex-col mt-12 text-primaryText gap-6 '>
                    <Link href={"/school-dashboard"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><LayoutDashboard/></span>
                      <h4>Dashboard</h4>
                    </div>
                    </Link>

                    <Link href={"/school-dashboard/campus"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><StickyNote/></span>
                      <h4>Campus</h4>
                    </div>
                    </Link>

                    <Link href={"/school-dashboard/courses"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><Calendar/></span>
                      <h4>Courses</h4>
                    </div>
                    </Link>

                    <Link href={"/school-dashboard/calendar"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><Layers/></span>
                      <h4>Calendar</h4>
                    </div>
                    </Link>

                    <Link href={"/school-dashboard/users"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><Layers/></span>
                      <h4>Users</h4>
                    </div>
                    </Link>

                    <Link href={"/school-dashboard/office"}>
                    <div className='px-8 gap-3  py-2 w-full flex hover:text-primaryPurple hover:bg-purple-200'>
                      <span><Layers/></span>
                      <h4>Office</h4>
                    </div>
                    </Link>

                  </div>
                </div>
              </Drawer>
            </div>
    </>
  )
}

export default SchoolMobileMenu