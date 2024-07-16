import React from "react";
import Header from "@/app/(school-dashboard)/Header";
const SchoolHeaderWrapper = ({handleSideBarToggle, isSidebarOpen}) => {
  return (
    <>
      <div className="hidden md:block h-full">
        <Header handleSideBarToggle={handleSideBarToggle} isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
};

export default SchoolHeaderWrapper;
