import Sidebar, { SidebarItem } from '@/app/(admin-dashboard)/Sidebar'
import React from 'react'
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
              text="Calender"
              link="/school-dashboard/calendar"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Teachers"
              link="/school-dashboard/teachers"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Users"
              link="/school-dashboard/users"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Office"
              link="/school-dashboard/office"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="School Settings"
              link="#"
            />
          
          </Sidebar>
    </>
  )
}

export default SchoolSidebarWrapper