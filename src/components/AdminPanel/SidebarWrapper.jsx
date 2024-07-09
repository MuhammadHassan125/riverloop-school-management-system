'use client';
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
import { usePathname } from 'next/navigation';
  const SidebarWrapper = ({isSidebarOpen}) => {

const pathname = usePathname();
const isActive = (path) => {
   return pathname.pathname === path;
    //  console.log(path);
  }

      return (
    <>
    <Sidebar isSidebarOpen={isSidebarOpen}>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active={isActive("/admin-dashboard")}
              link="/admin-dashboard"
            />
            <SidebarItem
              icon={<StickyNote size={20} />}
              text="Subscription"
              active={isActive("/subscription")}
              alert="10"
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