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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:  600,
    height:  500,
    overflowY: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
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
      <div className="flex text-primaryText gap-3 text-lg">
        <FiEye />
        <MdModeEdit />
        <AiOutlineDelete />
      </div>
    ),
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState("Protocol");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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
            className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${
              activeTab === "Protocol"
                ? "bg-[#682D91] text-[14px] text-white"
                : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick("Protocol")}
          >
            Protocol
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
              activeTab === "Invoices"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
            }`}
            onClick={() => handleTabClick("Invoices")}
          >
            Invoices
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
              activeTab === "Receipts"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
            }`}
            onClick={() => handleTabClick("Receipts")}
          >
            Receipts
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
              activeTab === "Deadlines"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
            }`}
            onClick={() => handleTabClick("Deadlines")}
          >
            Deadlines
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
              activeTab === "Support"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
            }`}
            onClick={() => handleTabClick("Support")}
          >
            Support
          </div>

          <div
            className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${
              activeTab === "Logs"
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
                <span onClick={handleOpen}>
                  <PrimaryBtn
                    text={"New Protocol"}
                    bg={"#682D91"}
                    color={"white"}
                    icon={<GoPlus className="text-xl" />}
                  />
                </span>
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
                            <Input
                              type={"text"}
                              placeholder={"Entrata"}
                              label={"Tipo"}
                              icon={<MdKeyboardArrowDown />}
                            />
                          </div>

                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"E-mail"}
                              label={"Tipo Invio"}
                              icon={<MdKeyboardArrowDown />}
                            />
                          </div>
                        </div>

                        <div className="w-full flex flex-row gap-3 justify-between items-center">
                          <div className="w-[50%]">
                            <Input
                              type={"text"}
                              placeholder={"08/06/2024"}
                              label={"Data Protocollo"}
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

                        <Input
                          type={"text"}
                          placeholder={"..."}
                          label={"Dipartimento"}
                          icon={<MdKeyboardArrowDown />}
                        />

                        <p className="text-primaryText text-[14px]">
                          Puoi aggiungere o modificare i dipartimenti dalla tab
                          Dipartimenti qui sobra
                        </p>

                        <Input
                          type={"text"}
                          placeholder={"..."}
                          label={"Identificativo"}
                          icon={<MdKeyboardArrowDown />}
                        />

                        <p className="text-primaryText text-[14px]">
                          Campo facoltativo è il numero identificativo di una
                          raccomandata o di una pec{" "}
                        </p>

                        <Input
                          type={"text"}
                          placeholder={"Cerca ..."}
                          label={"Mittente"}
                          icon={<MdKeyboardArrowDown />}
                          className="pb-6"
                        />

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
                            <button className="border text-[14px] bg-[#F9FAFC] px-5 py-2 font-medium rounded-full">Cancel</button>
                            <button className="border text-[14px] bg-primaryPurple text-white px-5 py-2 font-medium rounded-full">Save</button>
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
