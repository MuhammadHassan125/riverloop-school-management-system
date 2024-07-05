import React from "react";
import Header from "@/app/(admin-dashboard)/Header";
const SchoolHeaderWrapper = ({handleSideBarToggle}) => {
  return (
    <>
      <div className="hidden md:block h-full">
        <Header handleSideBarToggle={handleSideBarToggle} />
      </div>
    </>
  );
};

export default SchoolHeaderWrapper;
