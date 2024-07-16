"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import { IoMdCheckmark } from "react-icons/io";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Input from "@/components/Input";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';


function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
const Page = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSecondOption, setSelectedSecondOption] = useState(null);
  const [selectedThirdOption, setSelectedThirdOption] = useState(null);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const secondToggleDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
  };

  const thirdToggleDropdown = () => {
    setIsThirdDropdownOpen(!isThirdDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleEmployeeClick = (option) => {
    setSelectedSecondOption(option);
    setIsSecondDropdownOpen(false);
  };

  const handleOrderClick = (option) => {
    setSelectedThirdOption(option);
    setIsThirdDropdownOpen(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const breadcrumbs = [
    { name: "Dashboard", path: "/school-dashboard" },
    { name: "User Profile", path: "/school-dashboard/user-profile" },
    { name: "Create User", path: "/school-dashboard/new-user" },
  ];

  return (
    <React.Fragment>
      <div>
        <Breadcrumb items={breadcrumbs} />
        <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">

          {/* top heading  */}
          <div className="flex flex-row justify-between items-center mb-3">
            <div className="flex w-[80%] md:w-[40%] flex-col md:flex-row md:items-center justify-between">
              <h3 className="">Create New User</h3>
            </div>

            <div className="flex items-center flex-row gap-4">
              <Link href={"/school-dashboard/user-profile"}>
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
          <div className="flex gap-2">
            <div
              className={`cursor-pointer flex items-center  py-2 px-4 rounded-full ${activeTab === "personal"
                ? "bg-[#682D91] text-[14px] text-white"
                : "bg-gray-100 text-gray-600  text-[14px] hover:bg-gray-200"
                }`}
              onClick={() => handleTabClick("personal")}
            >
              Personal Information
            </div>
            {/* general ofno tab */}
            <div
              className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "features"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
                }`}
              onClick={() => handleTabClick("features")}
            >
              General Information
            </div>

            <div
              className={`cursor-pointer flex items-center py-2 px-4 rounded-full ${activeTab === "Service"
                ? "bg-[#682D91] text-white text-[14px]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200  text-[14px]"
                }`}
              onClick={() => handleTabClick("Service")}
            >
              Service Information
            </div>
          </div>

          {/* Tab content */}
          <div className="mt-8">
            {activeTab === "personal" && (
              <>
                <div className="flex flex-row w-[100%] justify-between mb-10">
                  <div className="w-[48%] flex-col">
                    <h4>Personal Information</h4>
                    <div className="mt-3">
                      <Input
                        label="First Name"
                        placeholder={'First Name'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Username"
                        placeholder={'Username'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Confirm Username"
                        placeholder={'Confirm Username'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Date of Birth"
                        placeholder={'Date of Birth'}
                        icon={<MdDateRange />}
                      />
                    </div>


                  </div>

                  <div className="w-[48%] flex-col">

                    <div className="mt-9">
                      <div className="relative">
                        {/* Main clickable div */}
                        <h4 className='font-bold ml-4'>Sex</h4>
                        <div
                          className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                          onClick={thirdToggleDropdown}
                        >
                          <div className="w-[100%] flex flex-row items-center justify-between text-primaryText">
                            {selectedThirdOption ? selectedThirdOption : 'Select an option'}

                            {isThirdDropdownOpen ? <IoIosArrowUp className="text-[#cbcdd1] text-xl" /> : <IoIosArrowDown className="text-xl text-[#cbcdd1]" />}
                          </div>
                        </div>

                        {/* Dropdown title content */}
                        {isThirdDropdownOpen && (
                          <div className="absolute z-30 top-full left-0 w-full bg-white shadow-md rounded-md mt-1 text-primaryText">
                            {/* Dropdown items */}
                            <ul>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Male')}
                              >
                                Male
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Female')}
                              >
                                Female
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <Input
                        label="Nation of birth"
                        placeholder={'Nation of birth'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input
                        label="City of Birth"
                        placeholder={'City of Birth'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Tax ID code"
                        placeholder={'Tax ID code'}
                        icon={<RiCodeView />}
                      />
                    </div>
                  </div>
                </div>

                <PrimaryBtn
                  text={"Save Data"}
                  icon={<IoMdCheckmark className="text-2xl" />}
                  bg={"#682D91"}
                  color={"white"}
                  onClick={handleClick(SlideTransition)}
                />
              </>
            )}
            {activeTab === "features" && (
              <>
                <div className="flex flex-row w-[100%] justify-between mb-10">
                  <div className="w-[48%] flex-row">
                    <h4>General Information</h4>
                    <div className="mt-3">
                      <Input
                        label="E-mail"
                        placeholder={'E-mail'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Pec"
                        placeholder={'Pec'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input
                        label="VAT number"
                        placeholder={'VAT number'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="country of residence"
                        placeholder={'country of residence'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="City of residence"
                        placeholder={'City of residence'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <div className="relative">
                        {/* Main clickable div */}
                        <h4 className='font-bold ml-4'>Order registration</h4>
                        <div
                          className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                          onClick={thirdToggleDropdown}
                        >
                          <div className="w-[100%] flex flex-row items-center justify-between text-primaryText">
                            {selectedThirdOption ? selectedThirdOption : 'Select an option'}

                            {isThirdDropdownOpen ? <IoIosArrowUp className="text-[#cbcdd1] text-xl" /> : <IoIosArrowDown className="text-xl text-[#cbcdd1]" />}
                          </div>
                        </div>

                        {/* Dropdown title content */}
                        {isThirdDropdownOpen && (
                          <div className="absolute z-30 top-full left-0 w-full bg-white shadow-md rounded-md mt-1 text-primaryText">
                            {/* Dropdown items */}
                            <ul>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Order 1')}
                              >
                                Order 1
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Order 2')}
                              >
                                Order 2
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <Input label="Qualifications "
                        placeholder={'Qualifications '}
                        icon={<RiCodeView />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Unavailability "
                        placeholder={'Unavailability '}
                        icon={<RiCodeView />}
                      />
                    </div>


                  </div>

                  <div className="w-[48%] flex-col">
                    <div className="mt-9">
                      <Input label="Address and number"
                        placeholder={'Address and number'}
                        icon={<MdOutlineAccountCircle />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input
                        label="Telephone"
                        placeholder={'Telephone'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input
                        label="Mobile phone"
                        placeholder={'Mobile phone'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="IBAN"
                        placeholder={'IBAN'}
                        icon={<RiCodeView />}
                      />
                    </div>


                    <div className="mt-3">
                      <div className="relative">
                        {/* Main clickable div */}
                        <h4 className='font-bold ml-4'>Title</h4>
                        <div
                          className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                          onClick={toggleDropdown}
                        >
                          <div className="w-[100%] flex flex-row items-center justify-between text-primaryText">
                            {selectedOption ? selectedOption : 'Select an option'}

                            {isDropdownOpen ? <IoIosArrowUp className="text-[#cbcdd1] text-xl" /> : <IoIosArrowDown className="text-xl text-[#cbcdd1]" />}
                          </div>
                        </div>

                        {/* Dropdown title content */}
                        {isDropdownOpen && (
                          <div className="absolute z-30 top-full left-0 w-full bg-white shadow-md rounded-md mt-1 text-primaryText">
                            {/* Dropdown items */}
                            <ul>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOptionClick('Doctor')}
                              >
                                Doctor
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOptionClick('Lawyer')}
                              >
                                Lawyer
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOptionClick('Engineer')}
                              >
                                Engineer
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="relative">
                        {/* Main clickable div */}
                        <h4 className='font-bold ml-4'>Employment status</h4>
                        <div
                          className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                          onClick={secondToggleDropdown}
                        >
                          <div className="w-[100%] flex flex-row items-center justify-between text-primaryText">
                            {selectedSecondOption ? selectedSecondOption : 'Select an option'}

                            {isSecondDropdownOpen ? <IoIosArrowUp className="text-[#cbcdd1] text-xl" /> : <IoIosArrowDown className="text-xl text-[#cbcdd1]" />}
                          </div>
                        </div>

                        {/* Dropdown title content */}
                        {isSecondDropdownOpen && (
                          <div className="absolute z-20 top-full h-[30vh] overflow-scroll left-0 w-full bg-white shadow-md rounded-md mt-1 text-primaryText">
                            {/* Dropdown items */}
                            <ul>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Employed without employer')}
                              >
                                Employed without employer
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Employed with employer')}
                              >
                                Employed with employer
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Freelancer')}
                              >
                                Freelancer
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Trainee')}
                              >
                                Trainee
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Unemployed')}
                              >
                                Unemployed
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Pensioner')}
                              >
                                Pensioner
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Employer')}
                              >
                                Employer
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Worker')}
                              >
                                Worker
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Family')}
                              >
                                Family
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Occasional family worker')}
                              >
                                Occasional family worker
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleEmployeeClick('Company partner')}
                              >
                                Company partner
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <Input label="Availability "
                        placeholder={'Availability '}
                        icon={<RiCodeView />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Availability zones "
                        placeholder={'Availability zones '}
                        icon={<RiCodeView />}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <PrimaryBtn
                    text={"Save Data"}
                    icon={<IoMdCheckmark className="text-2xl" />}
                    bg={"#682D91"}
                    color={"white"}
                    onClick={handleClick(SlideTransition)}
                  />
                </div>

                <Snackbar
                  open={state.open}
                  onClose={handleClose}
                  TransitionComponent={state.Transition}
                  message="Data saved successfully"
                  key={state.Transition?.name}
                  autoHideDuration={1200}
                  sx={{
                    backgroundColor: '#682D91',
                    color: 'white',
                  }}
                />
              </>
            )}

            {activeTab == "Service" && (
              <>
                <div className="flex flex-row w-[100%] justify-between mb-10">
                  <div className="w-[48%] flex-col">
                    <h4>Service Information</h4>
                    <div className="mt-3">
                      <Input
                        label="Relationship start date"
                        placeholder={'Relationship start date'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="End date"
                        placeholder={'End date'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <div className="relative">
                        {/* Main clickable div */}
                        <h4 className='font-bold ml-4'>Role</h4>
                        <div
                          className="w-full flex justify-between items-center py-2 px-4 border-[2px] text-primaryText outline-none border-[#682D9133] rounded-full cursor-pointer"
                          onClick={thirdToggleDropdown}
                        >
                          <div className="w-[100%] flex flex-row items-center justify-between text-primaryText">
                            {selectedThirdOption ? selectedThirdOption : 'Select an option'}

                            {isThirdDropdownOpen ? <IoIosArrowUp className="text-[#cbcdd1] text-xl" /> : <IoIosArrowDown className="text-xl text-[#cbcdd1]" />}
                          </div>
                        </div>

                        {/* Dropdown title content */}
                        {isThirdDropdownOpen && (
                          <div className="absolute h-[25vh] overflow-y-auto z-30 top-full left-0 w-full bg-white shadow-md rounded-md mt-1 text-primaryText">
                            {/* Dropdown items */}
                            <ul>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Tutor')}
                              >
                                Tutor
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Order 2')}
                              >
                                Teacher
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Student')}
                              >
                                Student
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Administrator')}
                              >
                                Administrator
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Accountant')}
                              >
                                Accountant
                              </li>
                              <li
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleOrderClick('Designer')}
                              >
                                Designer
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  <div className="w-[48%] flex-col">

                    <div className="mt-9">
                      <Input label="Contract type"
                        placeholder={'Contract type'}
                        icon={<MdDateRange />}
                      />
                    </div>

                    <div className="mt-3">
                      <Input label="Hourly compensation"
                        placeholder={'Hourly compensation'}
                        icon={<MdDriveFileRenameOutline />}
                      />
                    </div>


                  </div>
                </div>

                <PrimaryBtn
                  text={"Save Data"}
                  icon={<IoMdCheckmark className="text-2xl" />}
                  bg={"#682D91"}
                  color={"white"}
                  onClick={handleClick(SlideTransition)}
                />
                <Snackbar
                  open={state.open}
                  onClose={handleClose}
                  TransitionComponent={state.Transition}
                  message="User Created Successfully! Please check your email for account activation"
                  key={state.Transition?.name}
                  autoHideDuration={1200}
                  sx={{
                    backgroundColor: '#682D91',
                    color: 'white',
                  }}
                />
              </>
            )}
          </div>
        </main>

      </div>
    </React.Fragment>
  );
};

export default Page;
