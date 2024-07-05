import React from 'react'

const Input = ({placeholder, label, icon, type}) => {
  return (
    <>
        <label htmlFor="" className='font-bold ml-4'>{label}</label>
        <div className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full">

        <input
            type={type}
            placeholder={placeholder}
            className='outline-none bg-transparent w-full'
            />
        
         {icon && <span className='text-xl text-[#D8DBE0]'>{icon}</span>}

            </div>
    </>
  )
}

export default Input