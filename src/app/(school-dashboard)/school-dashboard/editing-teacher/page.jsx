"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { IoCloseSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DataGrid from "@/components/DataGrid";
import { Avatar, Pagination } from "@mui/material";



const breadcrumb =[
    {name:'Dashboard', path:'/school-dashboard'},
    {name:'Teachers', path:'/school-dashboard/teachers'},
    {name:'Editing Teacher', path:'/school-dashboard/editing-teacher'},
  ]


  const campusData = [
    {
      name: "Christmass",
      para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
    },
    {
      name: "Other",
      para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
    },
    {
      name: "Another one",
      para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
    },
    {
      name: "Other",
      para: "24 december, 11am to 6pm | 26 december, 9am to 6pm",
    },
  ];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const featuresData = [
  {
    feature: "Grade 12",
    desc: "Even factoring differences in body weight between children and adults into account, it would still n",
  },
  {
    feature: "Highschool",
    desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
  },
  {
    feature: "Grade 11",
    desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
  },
  {
    feature: "Diploma",
    desc: "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would ",
  },
  {
    feature: "Export",
    desc: "Lorem ipsum dolor sit amet consectetur. Condimentum massa sed amet augue aliquam non tellus feugiat. Vitae volutpat faucibus adipiscing vulputate tellus platea aliquet pellentesque.",
  },
  {
    feature: "Highschool",
    desc: "The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th",
  },
  {
    feature: "Grade 11",
    desc: "In most states, the legal limit in blood alcohol to not be considered DUI is 500 to 1,000 mg/L. Ther",
  },
];



const columns = [
    { Header: "Courses", accessor: "Courses" },
    { Header: "Lorem", accessor: "Monthly" },
    { Header: "Lorem", accessor: "lorem" },
    { Header: "", accessor: "" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
      id: 1,
      Courses: (
        <div className="flex items-center gap-3">
            <Avatar
              src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
              alt="lorem"
              sizes="sm"
              />
              Lorem Ipsum
        </div>
      ),
      Monthly: "Monthly",
      lorem: "3891 Ranchview Dr. Richardson, California 62639",
      date: "Feb 23, 2024 - Feb 29, 2024",
      icon: (
        <div className="flex text-primaryText gap-3 text-lg">
          <FiEye />
          <MdModeEdit />
          <AiOutlineDelete />
        </div>
      ),
    },
    {
        id: 2,
        Courses: (
            <div className="flex items-center gap-3">
                <Avatar
                  src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
                  alt="lorem"
                  sizes="sm"
                  />
                  Lorem Ipsum
            </div>
          ),
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        date: "Feb 23, 2024 - Feb 29, 2024",
        icon: (
          <div className="flex text-primaryText gap-3 text-lg">
            <FiEye />
            <MdModeEdit />
            <AiOutlineDelete />
          </div>
        ),
      },
      {
        id: 3,
        Courses: (
            <div className="flex items-center gap-3">
                <Avatar
                  src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
                  alt="lorem"
                  sizes="sm"
                  />
                  Lorem Ipsum
            </div>
          ),
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        date: "Feb 23, 2024 - Feb 29, 2024",
        icon: (
          <div className="flex text-primaryText gap-3 text-lg">
            <FiEye />
            <MdModeEdit />
            <AiOutlineDelete />
          </div>
        ),
      },
  ];
const page = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTimeout(() => {
        handleOpen();  
    }, 2000);
  }, [])
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">Editing Teacher</h3>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/teaching-dashboard"}>
            <PrimaryBtn
              text={"Back"}
              icon={<FaArrowLeft />}
              borderColor={"#EDEDEE"}
              color={"black"}
              bg={"#F9FAFC"}
            />
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap flex-row gap-2">
        <div
          className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${
            activeTab === "personal"
              ? "bg-[#682D91] text-[14px] text-white"
              : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
          }`}
          onClick={() => handleTabClick("personal")}
        >
          Personal Info
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "qualifications"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("qualifications")}
        >
          Qualifications
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "availablity"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("availablity")}
        >
          Availablity
        </div>

        <div
          className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
            activeTab === "Courses"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
          }`}
          onClick={() => handleTabClick("Courses")}
        >
          Courses
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {activeTab === "personal" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <div className="w-[48%]">
                <h4 className="ml-3">First Name</h4>
                <input
                  type="text"
                  placeholder="Neal"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>

              <div className="w-[48%]">
                <h4 className="ml-3">Last Name</h4>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="w-[48%]">
                <h4 className="ml-3">Birthdate</h4>
                <input
                  type="text"
                  placeholder="Neal"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>

              <div className="w-[48%]">
                <h4 className="ml-3">Place of Birth</h4>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
                />
              </div>
            </div>

            <div>
              <h4 className="ml-3">Residence Address</h4>
              <input
                type="text"
                placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
                className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
              />
            </div>

            <div>
              <h4 className="ml-3">Zipcode</h4>
              <input
                type="text"
                placeholder="$0.00"
                className="w-full text-[14px] border-[#EDEDEE] border-[2px] py-2 px-4 rounded-full outline-none"
              />
            </div>

            <div className="w-[25%] absolute bottom-4">
              <PrimaryBtn
                text={"Save Data"}
                icon={<IoMdCheckmark />}
                color={"white"}
                bg={"#682D91"}
              />
            </div>
          </div>
        )}

        {activeTab === "qualifications" && (
            <>
          <div className="flex flex-col w-full pb-10">
            <div className="w-full flex flex-row justify-between items-start">
              <div className="w-[30%]">
                <h4>Feature</h4>
              </div>
              <div className="w-[70%]">
                <h4>Description</h4>
              </div>
            </div>

            {featuresData.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-row my-2 items-start"
                >
                  <div className="w-[30%]">
                    <h4 className="text-primaryPurple">{feature.feature}</h4>
                  </div>
                  <div className="w-[60%]">
                    <p className="text-[#5B708B] text-[15px] text-justify">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

{/* age confirmation modal  */}
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={open}
onClose={handleClose}
closeAfterTransition
slots={{ backdrop: Backdrop }}
slotProps={{
  backdrop: {
    timeout: 500,
  },
}}
>
<Fade in={open}>
  <Box sx={style}>
    <div className='flex flex-row justify-between items-center mb-4'>
      <h5 className='font-bold'>Are you Sure?</h5>
      <IoCloseSharp  className='text-xl cursor-pointer' onClick={handleClose}/>
    </div>

        <p className='text-primaryText text-[14px]'>
        Please confirm, are you sure you want to save these changes? 
        </p>
      <div className='w-full flex flex-row items-end justify-end gap-4'>

        <PrimaryBtn
          text={'Close'}
          bg={'#F9FAFC'}
          color={'primaryText'}

          onClick={handleClose}
        />
        <PrimaryBtn
          text={'Confirm'}
          bg={'#682D91'}
          color={'white'}
          onClick={handleClose}
        />
      </div>
  </Box>
</Fade>
</Modal>
</>
        )}

        {activeTab === "availablity" && (
            <>
             <div className="flex flex-col lg:flex-row justify-between">
          {/* left side  */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">

            {/* teachers availablity */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaRegClock className="text-primaryText text-lg" />
                <h4>Teacher Availability</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add Availability"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            {/* campus grid data  */}
            <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
              {campusData.map((item, index) => (
                <>
                  <div className="flex gap-3 items-center" key={index}>
                    <h4>{item.name}</h4>
                  </div>

                  <div className="flex items-center gap-3 text-primaryText">
                    <p className=" text-[14px]">{item.para}</p>
                    <FaPen />
                  </div>
                </>
              ))}
            </div>

            {/* assign div content  */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaRegClock className="text-primaryText text-lg" />
                <h4>Assign to Campus</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Assign to"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            <div>
              <PrimaryBtn
                text={"Save"}
                type={"submit"}
                bg={"primaryPurple"}
                color={"white"}
                icon={<IoMdCheckmark className="text-lg" />}
              />
            </div>
          </div>

          {/* right side  */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">

            {/* Laboratory */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <h4>Non Disponibile</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add unavailability"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            {/* labortory tabs data  */}
            <div className="flex flex-row flex-wrap gap-3 items-center">
            
    <div className="mx-auto flex items-center justify-center shadow-md border">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </div>
            </div>

          
          </div>
        </div>
            </>
        )}

    {activeTab === "Courses" && (
       <>
          <DataGrid columns={columns} data={data}/>
          <Pagination sx={{my:3}}/>
       </>
        )}
      </div>
    </main>
    </React.Fragment>
  );
};

export default page;
