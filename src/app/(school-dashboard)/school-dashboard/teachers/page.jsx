"use client"
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import DataGrid from '@/components/DataGrid';
import { Avatar, Pagination } from '@mui/material';
import { TbDots } from "react-icons/tb";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import { IoCloseSharp } from "react-icons/io5";


const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Teachers", path:"/school-dashboard/teachers"},
];

const columns = [
    { Header: "Lorem", accessor: "campus" },
    { Header: "Lorem", accessor: "Monthly" },
    // { Header: "Lorem", accessor: "lorem" },
    { Header: "Created", accessor: "Created" },
    { Header: "", accessor: "" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
      id: 1,
      campus: (
          <Link href={'/school-dashboard/editing-teacher'}>
        <div className='flex items-center'>
            <Avatar 
            sizes='sm'
            src='https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg'/>
            neal.simmons@example.com
        </div>
            </Link>
      ),
      Monthly: "Monthly",
      lorem: "3891 Ranchview Dr. Richardson, California 62639",
      Created: "Feb 23, 2024",
      icon: (
        <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
        </div>
      ),
    },
    {
        id: 2,
        campus: (
               <Link href={'/school-dashboard/editing-teacher'}>
            <div className='flex items-center'>
                <Avatar 
                sizes='sm'
                src='https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg'/>
                neal.simmons@example.com
            </div>
                </Link>
          ),
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Created: "Feb 23, 2024",
                icon: (
          <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
          </div>
        ),
      },
      {
        id: 3,
        campus: (
              <Link href={'/school-dashboard/editing-teacher'}>
            <div className='flex items-center'>
                <Avatar 
                sizes='sm'
                src='https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg'/>
                neal.simmons@example.com
            </div>
                </Link>
          ),
        Monthly: "Monthly",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Created: "Feb 23, 2024",
        icon: (
          <div className="flex text-primaryText gap-3 text-lg">
          <TbDots />
          </div>
        ),
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

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
          <h3 className="">School Teachers</h3>
          <div className="w-[50%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
            <RiSearchLine className="text-xl text-primaryText mr-2" />
            <input
              className="outline-none w-full bg-transparent"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center flex-row gap-4">
          <Link href={"/school-dashboard"}>
            <PrimaryBtn
              text={"Back"}
              icon={<FaArrowLeft />}
              borderColor={"#EDEDEE"}
              color={"black"}
              bg={"#F9FAFC"}
            />
          </Link>

          <PrimaryBtn
          text={"New Teacher"}
          bg={'#682D91'}
          color={'white'}
          icon={<FiPlus className='text-lg'/>}
          onClick={handleOpen}
          />
        </div>
      </div>

        <DataGrid columns={columns} data={data}/>
        <Pagination sx={{my:3}}/>


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
            <div className='flex flex-row justify-between items-center'>
              <h5 className='font-bold'>Teacher Invitation</h5>
              <IoCloseSharp  className='text-xl cursor-pointer' onClick={handleClose}/>
            </div>

              <div className='w-full flex flex-col items-center justify-center text-center gap-4'>
                <Image
                src={'/images/email.png'}
                alt='img'
                width={220}
                height={220}
                />
                <h3>Send Invite</h3>
                <p className='text-primaryText text-[14px]'>Enter your professors email address in the field provided on our registration page. Once submitted, an email invitation will be sent to teacher email</p>
                <h6 className='text-primaryText text-[14px]'>teacher@example.com</h6>

                <PrimaryBtn
                  text={'Send E-mail'}
                  bg={'#682D91'}
                  color={'white'}
                  onClick={handleClose}
                />
              </div>
          </Box>
        </Fade>
      </Modal>

        </main>
   </React.Fragment>
  )
}

export default Page