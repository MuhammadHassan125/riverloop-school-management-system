'use client';
import React,{useState} from 'react'
import Sidebar, { SidebarItem } from '@/app/(admin-dashboard)/Sidebar'
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

const MobileMenu = () => {
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
    <div className="w-full px-4 text-black flex justify-between items-center md:hidden">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[110px] h-[30px]"
              />
              <IconButton onClick={toggleDrawer(true)}>
                <FiMenu className="text-2xl -mr-3" />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <div
                  className="w-[100vw] relative"
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  style={{ color: "black" }}
                >
                  <MdOutlineClose
                    className="text-3xl absolute right-0 top-0 m-4"
                    onClick={toggleDrawer(false)}
                  />
                  <Sidebar className="text-black">
                    <SidebarItem
                      icon={<LayoutDashboard size={20} />}
                      text="Dashboard"
                      active
                      link="/dashboard"
                      style={{ color: "black" }}
                    />
                    <SidebarItem
                      icon={<StickyNote size={20} />}
                      text="Subscription"
                      alert
                      link="/subscription"
                      style={{ color: "black" }}
                    />
                    <SidebarItem
                      icon={<Calendar size={20} />}
                      text="Coupon"
                      link="/coupon"
                      style={{ color: "black" }}
                    />
                    <SidebarItem
                      icon={<Layers size={20} />}
                      text="Payment Gateway"
                      link="/payment-gateway"
                      style={{ color: "black" }}
                    />
                    <SidebarItem
                      icon={<Flag size={20} />}
                      text="Users"
                      link="/users"
                      style={{ color: "black" }}
                    />
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
                </div>
              </Drawer>
            </div>
    </>
  )
}

export default MobileMenu