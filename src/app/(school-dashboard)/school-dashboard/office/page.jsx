"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { RiSearchLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import DataGrid from "@/components/DataGrid";
import { FiEye } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { Pagination } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoCloseSharp } from "react-icons/io5";
import Input from "@/components/Input";
import { MdFilterListAlt } from "react-icons/md";
import { Menu, MenuItem } from '@mui/material';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  outline: 'none',
  px: 4,
  py: 2,
};

const columns = [
  { Header: "Lorem", accessor: "lorem" },
  { Header: "Lorem", accessor: "lorem" },
  { Header: "Lorem", accessor: "lorem" },
  { Header: "", accessor: "" },
  { Header: "", accessor: "icon" },
];

const data = [
  {
    id: 1,
    name: "Lorem ipsum",
    lorem: "Lorem ipsum",
    date: "Feb 23, 2024 - Feb 29, 2024",
    icon: (
      <div className=" flex text-primaryText gap-3 text-lg">
        <FiEye
          className="hover:bg-primaryBackground hover:text-primaryPurple hover:rounded-full hover:cursor-pointer" />
        <MdModeEdit
          className="hover:bg-primaryBackground hover:text-primaryPurple hover:rounded-full hover:cursor-pointer" />
        <AiOutlineDelete
          className="hover:bg-primaryBackground hover:text-primaryPurple hover:rounded-full hover:cursor-pointer" />
      </div>
    ),
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Protocol");

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isDipartioOpen, setIsDipartioOpen] = useState(false);
  const [isIdentificationOpen, setIsIdentificationOpen] = useState(false);
  const [isLastOpen, setIsLastOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const handleTabClick = (tabName) => {
     setActiveTab(tabName);
   };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondOpen(!isSecondOpen);
  };

  const toggleDipartioDropdown = () => {
    setIsDipartioOpen(!isDipartioOpen);
  };

  const toggleIdentificationDropdown = () => {
    setIsIdentificationOpen(!isIdentificationOpen);
  };
  
  const toggleMittenteDropdown = () =>{
    setIsLastOpen(!isLastOpen);
  }
  const breadcrumb = [
    { name: "Dashboard", path: "/teaching-dashboard" },
    { name: "Office", path: "/teaching-dashboard/office" },
  ];

  return (
    <React.Fragment>
      <Breadcrumb items={breadcrumb} />
      <main className="w-[98%] h-min-screen p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
        {/* top heading  */}
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
            <h3 className="">Office</h3>
            <div className="w-[70%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] border-[#EDEDEE] bg-transparent ">
              <RiSearchLine className="text-xl text-primaryText mr-2" />
              <input
                className="outline-none w-full bg-transparent"
                type="text"
                placeholder="Search..."
              />
            </div>
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
            className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${activeTab === "Protocol"
              ? "bg-[#682D91] text-[14px] text-white"
              : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
              }`}
            onClick={() => handleTabClick("Protocol")}
          >
            Protocol
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Invoices"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
              }`}
            onClick={() => handleTabClick("Invoices")}
          >
            Invoices
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Receipts"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
              }`}
            onClick={() => handleTabClick("Receipts")}
          >
            Receipts
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Deadlines"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
              }`}
            onClick={() => handleTabClick("Deadlines")}
          >
            Deadlines
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Support"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
              }`}
            onClick={() => handleTabClick("Support")}
          >
            Support
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Logs"
              ? "bg-[#682D91] text-white text-[14px]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
              }`}
            onClick={() => handleTabClick("Logs")}
          >
            Logs
          </div>
        </div>

        {/* Tab content */}
        <div className="my-4">
          {activeTab === "Protocol" && (
            <>
              <div className="flex flex-row justify-between items-center mb-4">
                <h3 className="text-[#5B708B]">Protocols History</h3>
                <div className="flex flex-row gap-2">
                  <span onClick={handleOpen}>
                    <PrimaryBtn
                      text={"New Protocol"}
                      bg={"#682D91"}
                      color={"white"}
                      icon={<GoPlus className="text-xl" />}
                    />
                  </span>

                  <PrimaryBtn
                    text={"Filter"}
                    bg={"#682D91"}
                    color={"white"}
                    onClick={handleClick}
                    icon={<MdFilterListAlt />}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseFilter}
                  >
                    <MenuItem onClick={handleCloseFilter}>Month or Year</MenuItem>
                    <MenuItem onClick={handleCloseFilter}>Filter by department</MenuItem>
                    <MenuItem onClick={handleCloseFilter}>Filter by location</MenuItem>
                    <MenuItem onClick={handleCloseFilter}>Enter or Exit</MenuItem>
                  </Menu>
                </div>
              </div>

              <DataGrid columns={columns} data={data} />
              <Pagination sx={{ mt: 3 }} />

              <div>
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
                      <div className="flex flex-row justify-between">
                        <h5 className="font-bold">Register New Protocol</h5>
                        <IoCloseSharp onClick={handleClose} className="text-2xl cursor-pointer text-primaryText" />
                      </div>

                      <div className="flex flex-col gap-3 mt-6">
                        <div className="w-full flex flex-row gap-3 justify-between items-center">
                          <div className="w-[50%]">

                            <div className="relative">
                              <h4 className='font-bold ml-4'>Tipo</h4>
                              <div
                                className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                                onClick={toggleSecondDropdown}
                              >
                                <span className="text-primaryText">Entrata</span>
                                <MdKeyboardArrowDown />
                              </div>
                              {/* Dropdown Content */}
                              {isSecondOpen && (
                                <div className="absolute z-10 top-full left-0 w-full bg-white border border-[#682D9133] rounded-b-lg shadow-lg mt-1">
                                  {/* Dropdown Items */}
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleSecondDropdown}>Option 1</div>
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleSecondDropdown}>Option 2</div>
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleSecondDropdown}>Option 3</div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="w-[50%]">
                            <div className="relative">
                              <h4 className='font-bold ml-4'>Protocol</h4>
                              <div
                                className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                              >
                                <span className="text-primaryText">E-mail</span>
                                <MdKeyboardArrowDown />
                              </div>
                              {/* Dropdown Content */}
                              {isOpen && (
                                <div className="absolute z-10 top-full left-0 w-full bg-white border border-[#682D9133] rounded-b-lg shadow-lg mt-1">
                                  {/* Dropdown Items */}
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDropdown}>Option 1</div>
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDropdown}>Option 2</div>
                                  <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDropdown}>Option 3</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="w-full flex flex-row gap-3 justify-between items-center">
                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"08/06/2024"}
                              label={"Data Protocollo (Mandatory)"}
                              icon={<IoCalendarClearOutline />}
                            />
                          </div>

                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"08/06/2024"}
                              label={"Data Ricezione"}
                              icon={<IoCalendarClearOutline />}
                            />
                          </div>
                        </div>

                        <div className="w-full flex flex-row gap-3 justify-between items-center">

                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"subject"}
                              label={"Subject"}
                              icon={<IoCalendarClearOutline />}
                            />
                          </div>
                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"courses"}
                              label={"Reference course"}
                              icon={<IoCalendarClearOutline />}
                            />
                          </div>
                        </div>


                        <div className="relative">
                          <h4 className='font-bold ml-4'>Dipartimento</h4>
                          <div
                            className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                            onClick={toggleDipartioDropdown}
                          >
                            <span className="text-primaryText">....</span>
                            <MdKeyboardArrowDown />
                          </div>
                          {/* Dropdown Content */}
                          {isDipartioOpen && (
                            <div className="absolute z-10 top-full left-0 w-full bg-white border border-[#682D9133] rounded-b-lg shadow-lg mt-1">
                              {/* Dropdown Items */}
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDipartioDropdown}>Option 1</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDipartioDropdown}>Option 2</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleDipartioDropdown}>Option 3</div>
                            </div>
                          )}
                        </div>

                        <p className="text-primaryText text-[14px]">
                          Puoi aggiungere o modificare i dipartimenti dalla tab
                          Dipartimenti qui sobra
                        </p>

                        <div className="relative">
                          <h4 className='font-bold ml-4'>Identificativo</h4>
                          <div
                            className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                            onClick={toggleIdentificationDropdown}
                          >
                            <span className="text-primaryText">....</span>
                            <MdKeyboardArrowDown />
                          </div>
                          {/* Dropdown Content */}
                          {isIdentificationOpen && (
                            <div className="absolute z-10 top-full left-0 w-full bg-white border border-[#682D9133] rounded-b-lg shadow-lg mt-1">
                              {/* Dropdown Items */}
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleIdentificationDropdown}>Option 1</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleIdentificationDropdown}>Option 2</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleIdentificationDropdown}>Option 3</div>
                            </div>
                          )}
                        </div>

                        <p className="text-primaryText text-[14px]">
                          Campo facoltativo è il numero identificativo di una
                          raccomandata o di una pec{" "}
                        </p>

                        <div className="relative">
                          <h4 className='font-bold ml-4'>Mittente</h4>
                          <div
                            className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                            onClick={toggleMittenteDropdown}
                          >
                            <span className="text-primaryText">Cerca...</span>
                            <MdKeyboardArrowDown />
                          </div>
                          {/* Dropdown Content */}
                          {isLastOpen && (
                            <div className="absolute z-10 top-full left-0 w-full bg-white border border-[#682D9133] rounded-b-lg shadow-lg mt-1">
                              {/* Dropdown Items */}
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleMittenteDropdown}>Option 1</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleMittenteDropdown}>Option 2</div>
                              <div className="py-2 px-4 cursor-pointer hover:bg-gray-100" onClick={toggleMittenteDropdown}>Option 3</div>
                            </div>
                          )}
                        </div>

                        <p className="text-primaryText text-[14px]">
                          Campo facoltativo è il numero identificativo di una
                          raccomandata o di una pec{" "}
                        </p>

                        <div className="w-full flex flex-row gap-3 justify-between items-center">
                          <div className="w-[50%]">
                            <h5 className="font-bold ml-4 text-[16px]">Prot. Mittente</h5>
                          </div>

                          <div className="w-[50%]">
                            <h5 className="font-bold ml-4 text-[16px]">Data Prot. Mittente</h5>
                          </div>
                        </div>

                        {/* save icon */}
                        <div className="w-full flex justify-end gap-4 my-4">
                          <button className="border text-[14px] bg-[#F9FAFC] px-5 py-2 font-medium rounded-full" onClick={handleClose}>Cancel</button>
                          <button className="border text-[14px] bg-primaryPurple text-white px-5 py-2 font-medium rounded-full" onClick={handleClose}>Save</button>
                        </div>
                      </div>
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </>
          )}

          {activeTab === "Invoices" && (
            <DataGrid columns={columns} data={data} />
          )}

          {activeTab === "Receipts" && (
            <p className="text-primaryText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium culpa, veniam repellendus sint quia est sapiente magni, ratione dicta fugiat possimus, eveniet placeat natus. Libero dolores quam sequi illo?
            </p>
          )}

          {activeTab === "Deadlines" && (
            <p className="text-primaryText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium culpa, veniam repellendus sint quia est sapiente magni, ratione dicta fugiat possimus, eveniet placeat natus. Libero dolores quam sequi illo?
            </p>
          )}

          {activeTab === "Support" && (
            <p className="text-primaryText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium culpa, veniam repellendus sint quia est sapiente magni, ratione dicta fugiat possimus, eveniet placeat natus. Libero dolores quam sequi illo?
            </p>
          )}

          {activeTab === "Logs" && (
            <p className="text-primaryText text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium culpa, veniam repellendus sint quia est sapiente magni, ratione dicta fugiat possimus, eveniet placeat natus. Libero dolores quam sequi illo?
            </p>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Page;
