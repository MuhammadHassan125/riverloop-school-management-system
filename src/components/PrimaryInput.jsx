import React from 'react'

const PrimaryInput = ({placeholder, icon, type}) => {
  return (
    <div className="w-full flex justify-between items-center py-[7px] px-4 border-[2px] text-primaryText outline-none border-[#EDEDEE] rounded-full">

    <input
        type={type}
        placeholder={placeholder}
        className='outline-none bg-transparent w-full'
        />

    {icon && <span className='text-xl text-[#D8DBE0]'>{icon}</span>}

</div>
  )
}

export default PrimaryInput