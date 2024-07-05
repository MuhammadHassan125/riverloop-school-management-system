import Sidebar, { SidebarItem } from '@/app/(admin-dashboard)/Sidebar'
import React from 'react'
import {
    LayoutDashboard,
    StickyNote,
    Layers,
    Flag,
    Calendar,
    Settings,
  } from "lucide-react";
const SidebarWrapper = ({isSidebarOpen}) => {
  return (
    <>
    <Sidebar isSidebarOpen={isSidebarOpen}>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
              link="/admin-dashboard"
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Subscription"
              alert
              link="/subscription"
            />
            <SidebarItem
              icon={<Calendar size={20} />}
              text="Coupon"
              link="/coupon"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Payment Gateway"
              link="#"
            />
            <SidebarItem icon={<Flag size={20} />} text="Users" link="/user" />
            <hr className="my-3" />
            <SidebarItem
              icon={<Settings size={20} />}
              text="School Management"
              link="/school-management"
            />
            <SidebarItem
              icon={<Settings size={20} />}
              text="MemberShip Plan"
              link="/all-membership-plan"
            />
          </Sidebar>
    </>
  )
}

export default SidebarWrapper