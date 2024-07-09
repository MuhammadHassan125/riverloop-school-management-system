"use client";
import React, { useState } from "react";
import TeachingSidebarWrapper from "@/components/TeachingPanel/TeachingSidebarWrapper";
import HeaderWrapper from "@/components/TeachingPanel/TeachingHeaderWrapper";
import MobileMenu from "@/components/AdminPanel/MobileMenu";

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
          <TeachingSidebarWrapper isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="flex flex-col h-[100vh] w-full">
          <div className="w-full h-auto py-2">
            {/* header  */}
            <HeaderWrapper handleSideBarToggle={handleSideBarToggle} />
            <MobileMenu/>
            
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
