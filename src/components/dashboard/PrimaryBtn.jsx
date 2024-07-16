import React from 'react';

const PrimaryBtn = ({ color, text, bg, borderColor,icon, onClick }) => {
  return (
    <button 
    onClick={onClick}
    className={`primary-btn bg-${bg} hover:cursor-pointer hover:bg-primaryText hover:text-primaryPurple hover:border bg flex items-center border-[1px] rounded-full text-medium text-[14px] w-auto py-2 px-3`}
    style={{borderColor: borderColor, backgroundColor: bg, color: color, hover: {backgroundColor: '#5B708B', color: '#682D91'}}}
    >
      <span className='mr-2'>{icon}</span>
      {text}
    </button>
  );
};

export default PrimaryBtn;
