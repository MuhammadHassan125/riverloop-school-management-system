import React from "react";
import Header from "@/app/(teaching-dashboard)/Header";
const HeaderWrapper = ({handleSideBarToggle, isSidebarOpen}) => {
  return (
    <>
      <div className="hidden md:block h-full">
        <Header handleSideBarToggle={handleSideBarToggle} isSidebarOpen={isSidebarOpen}/>
      </div>
    </>
  );
};

export default HeaderWrapper;
