"use client";
import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import DataGrid from '@/components/DataGrid';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { Pagination } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import PrimaryInput from '@/components/PrimaryInput';

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Competition Classes", path:"/school-dashboard/competition-classes"},
];

const columns = [
    { Header: "Class", accessor: "Class" },
    { Header: "Degree", accessor: "Degree" },
    { Header: "Lorem", accessor: "lorem" },
    { Header: "Added by", accessor: "Added" },
    { Header: "", accessor: "icon" },
  ];
  
  const data = [
    {
      id: 1,
      Class: "A-30",
      Degree: "Titoli AFAM",
      lorem: "3891 Ranchview Dr. Richardson, California 62639",
      Added:(
        <PrimaryBtn
        text={'Default'}
        />
      ),
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
        Class: "A-30",
        Degree: "Titoli AFAM",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Added:(
          <PrimaryBtn
          text={'Default'}
          />
        ),
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
        Class: "A-30",
        Degree: "Titoli AFAM",
        lorem: "3891 Ranchview Dr. Richardson, California 62639",
        Added:(
          <PrimaryBtn
          text={'School'}
          color={'#682D91'}
          />
        ),
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
const page = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
   <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
      {/* top heading  */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="flex w-[80%] md:w-[70%] flex-col md:flex-row md:items-center  gap-6">
          <h3 className="">Competition Classes</h3>
          <div className="w-[40%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
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
          text={"New Class"}
          bg={'#682D91'}
          color={'white'}
          icon={<FiPlus className='text-lg'/>}
          onClick={handleOpen}
          />
        </div>
      </div>

        <DataGrid columns={columns} data={data}/>
        <Pagination sx={{my:3}}/>

        </main>


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
            <Typography id="transition-modal-title" variant="h6" component="h2">
            New Competition Class
            </Typography>

        <div className='flex flex-col gap-3 my-4'>

            <div>
            <h4 className='ml-3'>Competition Class Description</h4>
            <PrimaryInput
            type={"text"}
            placeholder={"lorem ipsum"}
            />
            </div>

            <div>
            <h4 className='ml-3'>Note</h4>
            <PrimaryInput
            type={"text"}
            placeholder={"Note"}
            />
            </div>

            <div>
            <h4 className='ml-3'> Class</h4>
            <PrimaryInput
            type={"text"}
            placeholder={"class"}
            />
            </div>

            </div>
        {/* save btn  */}
        <div className='flex flex-row justify-end gap-3'>
            <PrimaryBtn
            text={'Cancel'}
            bg={'#F9FAFC'}
            color={'black'}
            onClick={handleClose}
            />
            <PrimaryBtn
            text={'Save'}
            bg={'#682D91'}
            color={'white'}
            onClick={handleClose}
            />
        </div>

          </Box>
        </Fade>
      </Modal>
   </React.Fragment>
  )
}

export default page