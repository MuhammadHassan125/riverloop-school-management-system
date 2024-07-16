import Sidebar, { SidebarItem } from '@/app/(admin-dashboard)/Sidebar'
import React from 'react'
import { PiChalkboardTeacher } from "react-icons/pi";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import {
    LayoutDashboard,
    StickyNote,
    Layers,
    Calendar,
  } from "lucide-react";

const SchoolSidebarWrapper = ({isSidebarOpen}) => {
  return (
    <>
    <Sidebar isSidebarOpen={isSidebarOpen}>
        {isSidebarOpen && (
            <p className='text-primaryText'>School Dashboard</p>
        )}
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
              link="/school-dashboard"
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Campus"
              alert
              link="/school-dashboard/campus"
            />
            <SidebarItem
              icon={<Calendar size={20} />}
              text="Courses"
              link="/school-dashboard/courses"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Calendar"
              link="/school-dashboard/calendar"
            />
            {/* <SidebarItem
              icon={<PiChalkboardTeacher size={20}/>}
              text="Teachers"
              link="/school-dashboard/teachers"
            /> */}
            <SidebarItem
              icon={<FiUsers  size={20} />}
              text="Users"
              link="/school-dashboard/users"
            />
            <SidebarItem
              icon={<RiHomeOfficeLine  size={20} />}
              text="Office"
              link="/school-dashboard/office"
            />
            {/* <SidebarItem
              icon={<IoSettingsOutline  size={20} />}
              text="School Settings"
              link="#"
            /> */}
          
          </Sidebar>
    </>
  )
}

export default SchoolSidebarWrapper