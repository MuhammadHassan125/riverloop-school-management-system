"use client";
import React from 'react';
import '@syncfusion/ej2-react-schedule/styles/material.css';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month, Inject } from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
import PrimaryBtn from '@/components/dashboard/PrimaryBtn';
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoClose } from "react-icons/io5";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCdkx0WmFZfVpgcl9HZFZTTWY/P1ZhSXxXdkJjWn5WcXBWRmJYUkQ="
);
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PrimaryInput from '@/components/PrimaryInput';

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
];

const breadcrumbItems = [
    { name: 'Dashboard', path: '/school-dashboard' },
    {name:"Calendar", path:'/school-dashboard/calendar'},
  ];

const Page = () => {
    const [open, setOpen] = React.useState(false);
    const [secondOpen, setSecondOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleSecondOpen = () => setSecondOpen(true);
    const handleClose = () => setOpen(false);
    const handleSecondClose = () => setSecondOpen(false);
    
  return (
    <React.Fragment>
        <Breadcrumb items={breadcrumbItems}/>
    <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
    {/* top heading section  */}
    <div className="flex flex-row justify-between mb-5">
      <div className='flex items-center gap-5'>
        <h3>Calendar</h3>
      </div>

      <div className="flex gap-3">
        <button
        className='p-3 rounded-full bg-primaryPurple text-md text-white cursor-pointer'
        >
        <FiDownload  />
        </button>

        <button
        className='p-3 rounded-full bg-primaryPurple text-md text-white cursor-pointer'
        onClick={handleSecondOpen}
        >
        <MdOutlineLocalPrintshop />
        </button>

      <PrimaryBtn
            text={"Filter"}
            icon={<MdOutlineFilterAlt   />}
            bg={"#682D91"}
            color={"white"}
          />
          <PrimaryBtn
            text={"New Schedule"}
            icon={<FiPlus  />}
            bg={"#682D91"}
            color={"white"}
            onClick={handleOpen}
          />
      </div>
    </div>

    <div className='w-full flex items-center justify-center pb-10'>
    <ScheduleComponent
      height={500}
      currentView="Week"
      selectedDate={new Date(2025, 1, 11)}
      eventSettings={{ dataSource: data }}
    >
      <ViewsDirective>
        <ViewDirective option="Day" />
        <ViewDirective option="Week" />
        <ViewDirective option="Month" />
      </ViewsDirective>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
    </div>
      </main>

        {/* new schedule modal  */}
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
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Select Tutors for (SubjectName)
            </Typography>

              <IoClose className='cursor-pointer text-xl' onClick={handleClose}/>
            </Box>

            <div className='flex flex-col gap-4 my-3'>
                <div>
                <h4 className='ml-3'>Tutors</h4>
                <PrimaryInput
                icon={<MdKeyboardArrowDown />}
                />
                </div>

                <div className='w-full gap-4 flex items-center justify-betweens'>
                <div className='w-[50%]'>
                <h4 className='ml-3'>Start Event</h4>
                <PrimaryInput
                icon={<GoClock />                }
                placeholder={"14:00"}
                />
                </div>

                <div className='w-[50%]'>
                <h4 className='ml-3'>Tutors</h4>
                <PrimaryInput
                icon={<GoClock />                }
                placeholder={"15:00"}
                />
                </div>
                </div>
            </div>

            <div className='flex flex-row justify-end mt-3 gap-3'>
                <PrimaryBtn
                text={"Cancel"}
                bg={"#F9FAFC"}
                color={"black"}
                onClick={handleClose}
                />

                <PrimaryBtn
                text={"Save"}
                bg={"#682D91"}
                color={"white"}
                onClick={handleClose}
                />
            </div>
          </Box>
        </Fade>
      </Modal>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={secondOpen}
        onClose={handleSecondClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={secondOpen}>
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Print
            </Typography>

              <IoClose className='cursor-pointer text-xl' onClick={handleClose}/>
            </Box>

            <div className='flex flex-col gap-4 my-3'>
                <div>
                <h4 className='ml-3'>Print</h4>
                <PrimaryInput
                icon={<MdKeyboardArrowDown />}
                placeholder={"Save to File PDF"}
                />
                </div>

                <div>
                <h4 className='ml-3'>Size</h4>
                <PrimaryInput
                icon={<MdKeyboardArrowDown />}
                placeholder={"Us Paper"}
                />
                </div>

                <div className='w-full gap-4 flex items-center justify-betweens'>
                <div className='w-[50%]'>
                <h4 className='ml-3'>Copies</h4>
                <PrimaryInput
                icon={<GoClock />                }
                placeholder={"4"}
                />
                </div>

                <div className='w-[50%]'>
                <h4 className='ml-3'>Orientation</h4>
                <PrimaryInput
                icon={<GoClock />                }
                placeholder={"2"}
                />
                </div>
                </div>
            </div>

            <div className='flex flex-row justify-end mt-3 gap-3'>
                <PrimaryBtn
                text={"Cancel"}
                bg={"#F9FAFC"}
                color={"black"}
                onClick={handleSecondClose}
                />

                <PrimaryBtn
                text={"Print"}
                bg={"#682D91"}
                color={"white"}
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