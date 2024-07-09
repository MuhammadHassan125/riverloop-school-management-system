"use client";
import React, { useState } from "react";
import SidebarWrapper from "@/components/AdminPanel/SidebarWrapper";
import HeaderWrapper from "@/components/AdminPanel/HeaderWrapper";
import MobileMenu from "@/components/AdminPanel/MobileMenu";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSideBarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-row w-full h-[100vh] bg-[#f9fafc]">
        {/* my sidebar  */}
        <div className="hidden md:block">
          <SidebarWrapper isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex flex-col w-full">
          <div className="w-full h-auto py-2">
            {/* header  */}
            <HeaderWrapper handleSideBarToggle={handleSideBarToggle} />
            <MobileMenu className="text-black"/>
            
          </div>

          <div className="w-full calc(100vh - 10vh) overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
