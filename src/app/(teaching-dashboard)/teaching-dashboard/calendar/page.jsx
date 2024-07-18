"use client";
import React, { useCallback } from 'react';
import '@syncfusion/ej2-react-schedule/styles/material.css';
import Link from 'next/link';
import PrimaryBtn from '@/components/dashboard/PrimaryBtn';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../../components/TeachingPanel/index.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles';

const data = [
  {
    Id: 1,
    Subject: "Sales Presentation",
    StartTime: new Date(2025, 1, 11, 10, 10),
    EndTime: new Date(2025, 1, 11, 12, 30),
    IsAllDay: false,
  },
  {
    Id: 2,
    Subject: "New Budget Report",
    StartTime: new Date(2025, 1, 10, 10, 0),
    EndTime: new Date(2025, 1, 10, 12, 30),
    IsAllDay: true,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 3,
    Subject: "Team Meeting",
    StartTime: new Date(2025, 1, 12, 14, 0),
    EndTime: new Date(2025, 1, 12, 15, 30),
    IsAllDay: false,
  },
  {
    Id: 4,
    Subject: "Project Deadline",
    StartTime: new Date(2025, 1, 15, 9, 0),
    EndTime: new Date(2025, 1, 15, 17, 0),
    IsAllDay: true,
    Status: "In Progress",
    Priority: "Low",
  },
  {
    Id: 5,
    Subject: "Client Meeting",
    StartTime: new Date(2025, 1, 18, 10, 0),
    EndTime: new Date(2025, 1, 18, 12, 0),
    IsAllDay: false,
  },
];

const breadcrumbItems = [
    { name: 'Dashboard', path: '/teaching-dashboard' },
    { name: 'Calendar', path: '/teaching-dashboard/calendar' },
  ];

  const localizer = momentLocalizer(moment)
  const myEventsList = data.map((event) => {
    return {
      start: event.StartTime,
      end: event.EndTime,
      title: event.Subject,
    };
  });



const Page = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...(isSelected && {
        style: {
          backgroundColor: '#000',
        },
      }),
      ...(moment(start).hour() < 12 && {
        className: 'powderBlue',
      }),
      ...(event.title.includes('Team Meeting') && {
        className: 'darkGreen',
      }),
    }),
    []
  )
  return (
    <React.Fragment>
        <Breadcrumb items={breadcrumbItems}/>
    <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
    {/* top heading section  */}
    <div className="flex flex-row justify-between mb-5">
      <div className='flex items-center gap-5'>
        <h3>Hello Neal</h3>
        <div className=" flex justify-between items-center px-2 border-[2px] rounded-full py-1 border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-[#682D91] mr-2" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>
      </div>

      <div className="flex">
        <Link href={"/teaching-dashboard"}>
          <PrimaryBtn
            text={"Back"}
            icon={<IoArrowBackSharp />}
            bg={"#F9FAFC"}
          />
        </Link>
      </div>
    </div>

    <div className='flex items-center justify-between mb-5'>
        <div>
        <p className='text-primaryText text-[15px]'>(GMT +06:00) Public Time</p>
        </div>

        <div className='flex flex-row items-center gap-3 justify-between'>
        <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center py-[7px] px-4 border-[2px] text-primaryText outline-none border-[#EDEDEE] rounded-full"
      >
        Filter <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute z-20 right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-lg">
          {/* Dropdown content */}
          <a onClick={toggleDropdown} className="block px-4 py-1 text-gray-800 hover:bg-gray-300">Option 1</a>
          <a onClick={toggleDropdown} className="block px-4 py-1 text-gray-800 hover:bg-gray-300">Option 2</a>
          <a onClick={toggleDropdown} className="block px-4 py-1 text-gray-800 hover:bg-gray-300">Option 3</a>
        </div>
      )}
    </div>
        </div>
    </div>

    <div style={{height:"100%"}}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      toolbar={false}
      style={{height:"100%"}}
      defaultDate={new Date(2025, 1, 10)}
        eventPropGetter={eventPropGetter}
      />
  </div>
      </main>
    </React.Fragment>
  );
};

export default Page;