'use client';
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuEyeOff, LuEye } from 'react-icons/lu';

const Input = ({ placeholder, label, icon, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label htmlFor="" className='font-bold ml-4'>{label}</label>
      <div className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full">

        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          className='outline-none bg-transparent w-full'
        />

        {type === 'password' && (
          <span className='text-xl text-[#cbcdd1] cursor-pointer' onClick={togglePasswordVisibility}>
            {showPassword ? <LuEyeOff /> : <LuEye />}
          </span>
        )}

        {icon && <span className='text-xl text-[#cbcdd1]'>{icon}</span>}

      </div>
    </>
  )
}

export default Input;
