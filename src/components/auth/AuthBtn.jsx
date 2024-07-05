import React from "react";

const AuthBtn = ({ label }) => {
  return (
    <>
      <button className="w-full font-medium rounded-full py-3 bg-primary-purple-gradient text-white">
        {label}
      </button>
    </>
  );
};

export default AuthBtn;
