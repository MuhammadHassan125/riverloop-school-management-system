import Sidebar, { SidebarItem } from '@/app/(admin-dashboard)/Sidebar'
import React from 'react'
import {
    LayoutDashboard,
    StickyNote,
    Layers,
    Calendar,
  } from "lucide-react";
  import { IoSettingsOutline } from "react-icons/io5";

const SidebarWrapper = ({isSidebarOpen}) => {
  return (
    <>
    <Sidebar isSidebarOpen={isSidebarOpen}>
        {isSidebarOpen && (
            <p className='text-primaryText'>Teacher Dashboard</p>
        )}
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
              link="/teaching-dashboard"
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="My Classes"
              alert
              link="/teaching-dashboard/my-classes"
            />
            <SidebarItem
              icon={<Calendar size={20} />}
              text="Courses"
              link="/teaching-dashboard/courses"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Calender"
              link="/teaching-dashboard/calendar"
            />
            
            <SidebarItem
              icon={<IoSettingsOutline   size={20} />}
              text="Settings"
              link="/teaching-dashboard/settings"
            />
          </Sidebar>
    </>
  )
}

export default SidebarWrapper