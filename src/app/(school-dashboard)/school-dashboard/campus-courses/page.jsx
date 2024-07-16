'use client';
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { RiSearchLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import PrimaryInput from "@/components/PrimaryInput";
import { IoMdClose } from "react-icons/io";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Input from "@/components/Input";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";


const breadcrumb = [
  { name: "Dashboard", path: "/school-dashboard" },
  { name: "Campus", path: "/school-dashboard/campus" },
  { name: "New Course", path: "/school-dashboard/campus-courses" },
];

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
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Page = () => {
  const [open, setOpen] = useState(false);
  const [Secondopen, setSecondOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSecondOpen = () => setSecondOpen(true);
  const handleSecondClose = () => setSecondOpen(false);

  const handleBackClick = (e) => {
    e.preventDefault();
    if (window.confirm('Do you want to go back from this page? You might be lose your entered data')) {
      window.history.back();
    } else {
      
    }
  };

  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb} />
      <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        {/* Top heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex w-[100%] md:w-[70%]  flex-col md:flex-row md:items-center justify-between">
            <h3 className="">Editing Campus01 Informations</h3>
            <div className="w-[50%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-primaryText mr-2" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex md:items-center flex-row gap-4">
            <Link href={"/school-dashboard/campus"} onClick={handleBackClick}>
              <PrimaryBtn
                text={"Back"}
                icon={<FaArrowLeft />}
                borderColor={"#EDEDEE"}
                color={"black"}
                bg={"#F9FAFC"}
              />
            </Link>

            <PrimaryBtn
              text={"Add Holiday"}
              bg={"#682D91"}
              color={"white"}
              icon={<FiPlus className="text-lg" />}
              onClick={handleOpen}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left side */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">
            <div>
              <h4>Campus Name</h4>
              <PrimaryInput placeholder={"Campus Name Example"} type={"text"} />
            </div>

            <div>
              <h4>Campus Informations</h4>
              <p className="text-primaryText text-[14px]">
                Mi vel consequat tempor aliquet vitae mattis. In duis orci
                viverra porttitor. Ipsum vitae libero id etiam sociis interdum.
                Consequat fermentum lorem sed massa mattis fusce arcu. Nibh
                lectus proin enim facilisis imperdiet.
              </p>
            </div>

            {/* Campus holidays */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <FaRegClock className="text-primaryText text-lg" />
                <h4>Campus Holidays</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add Holiday"}
                bg={"#682D91"}
                color={"white"}
                icon={<FiPlus className="text-lg" />}
                onClick={handleOpen}
              />
            </div>

            {/* Campus grid data */}
            <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
              {campusData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <h4>{item.name}</h4>
                  <p className="text-[14px]">{item.para}</p>
                  <FaPen />
                </div>
              ))}
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

          {/* Right side */}
          <div className="lg:w-[45%] w-[100%] flex flex-col gap-5">
            <div>
              <h4>Location</h4>
              <PrimaryInput
                placeholder={"3891 Ranchview Dr. Richardson, California 62639"}
                type={"text"}
                icon={<FaPen />}
              />
            </div>

            <p>Google map will come here</p>

            {/* Laboratory */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <h4>Laboratory</h4>
              </div>

              <PrimaryBtn
                type={"submit"}
                text={"Add Laboratory"}
                bg={"#682D91"}
                color={"white"}
                onClick={handleSecondOpen}
                icon={<FiPlus className="text-lg" />}
              />
            </div>

            {/* Laboratory tabs data */}
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <button  className="border-[1px] flex items-center gap-3 text-[14px] border-[#27C762] px-3 py-1 rounded-full">
                Tech Laboratory
                <IoMdClose />
              </button>
              {/* Other buttons */}
            </div>
          </div>
        </div>
      </main>

      {/* Add holiday Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>

            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Campus Holiday Details
            </Typography>
            <MdOutlineClose className="text-2xl cursor-pointer" onClick={handleClose}/>
            </Box>
            <div className="mt-3">
            <Input
            label={'Course Title'}
            placeholder={'Course Title'}
            icon={<MdOutlineSubtitles />            }
            />
            </div>

            <div className="mt-3">
            <Input
            label={'Course Timming Details'}
            placeholder={'Course Timming'}
            icon={<IoTimeOutline/>}
            />
            </div>

          <div className="mt-6">
            <PrimaryBtn
                text={"Save"}
                type={"submit"}
                bg={"primaryPurple"}
                color={"white"}
                icon={<IoMdCheckmark className="text-lg" />}
                onClick={handleClose}
                />
                </div>
          </Box>
        </Fade>
      </Modal>


       {/* Add Laboratory Modal */}
       <Modal
        open={Secondopen}
        onClose={handleSecondClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Secondopen}>
          <Box sx={style}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>

            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Laboratory Details
            </Typography>
            <MdOutlineClose className="text-2xl cursor-pointer" onClick={handleSecondClose}/>
            </Box>
            <div className="mt-3">
            <Input
            label={'Add Laboratory Name'}
            placeholder={'Add Laborator'}
            icon={<MdOutlineSubtitles /> }
            />
            </div>

          <div className="mt-6">
            <PrimaryBtn
                text={"Save"}
                type={"submit"}
                bg={"primaryPurple"}
                color={"white"}
                icon={<IoMdCheckmark className="text-lg" />}
                onClick={handleSecondClose}
                />
                </div>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default Page;
