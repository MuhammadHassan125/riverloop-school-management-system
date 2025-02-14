"use client";
import React, { useState } from "react";
import SchoolSidebarWrapper from "@/components/SchoolDashboard/SchoolSidebarWrapper";
import SchoolHeaderWrapper from "@/components/SchoolDashboard/SchoolHeaderWrapper";
import MobileMenu from "@/components/AdminPanel/MobileMenu";
import SchoolMobileMenu from "@/components/SchoolDashboard/SchoolMobileMenu";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSideBarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-row w-[100%] h-[100%] overflow-visible bg-[#f9fafc]">
        {/* my sidebar  */}
        <div className="h-[100vh] overflow-auto hidden md:block">
          <SchoolSidebarWrapper isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex flex-col h-[100vh] w-full">
          <div className="w-full h-[10vh] py-4">
            {/* header  */}
            <SchoolHeaderWrapper handleSideBarToggle={handleSideBarToggle} isSidebarOpen={isSidebarOpen} />
            <SchoolMobileMenu/>
            
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
