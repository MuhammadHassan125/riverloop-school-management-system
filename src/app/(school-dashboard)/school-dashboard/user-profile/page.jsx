'use client'
import React from "react";
import {
  FaPen,
  FaUserEdit,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Avatar } from "@mui/material";
import PrimaryBtn from "@/components/dashboard/PrimaryBtn";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { MdKeyboardArrowDown } from "react-icons/md";
import PrimaryInput from "@/components/PrimaryInput";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoImage } from "react-icons/go";

const breadcrumb = [
    {name:"Dashboard", path:"/school-dashboard"},
    {name:"Users", path:"/school-dashboard/users"},
    {name:"User Profile", path:"/school-dashboard/user-profile"},
];

const Page = () => {

    const [edit, setEdit] = React.useState(false);
    const [contact, setContact] = React.useState(false);

    const handledit = () => {
        console.log(1);
        setEdit(!edit);
        setContact(false); // Reset contact state when toggling edit mode
    };

    const handleContact = () => {
        console.log(2);
        setContact(!contact);
    };

  return (
    <React.Fragment>
    <Breadcrumb items={breadcrumb}/>
    <main className="w-[98%] m-auto p-3 h-full">
      <div className="w-full rounded-3xl h-[40vh] bg-image-cover bg-no-repeat text-white p-6 relative">
        <div className="py-3 flex flex-row justify-between">
            <div className="flex flex-col">
          <h2>Hello, Neal Simmons</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quibusdam.
          </p>
          </div>

          {/* background change btn  */}
          {edit ? (
          <div>
          <button className="cursor-pointer text-white bg-primaryPurple rounded-full py-3 px-4  flex items-center gap-2 text-[12px]"> 
            <GoImage className="text-lg"/> Background Image</button>
          </div>  
          ):(
            null
          )}
        </div>
      </div>

      <div className="bg-white text-black rounded-3xl h-auto shadow-md px-5 pt-5 pb-20 translate-y-[-25%] m-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-auto">

            <div className="flex flex-col relative items-center justify-center">
            <Avatar
              src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
              className="rounded-full w-16 h-16"
              />
              {edit ? (
                  <button className="text-white bg-primaryPurple absolute -bottom-4 rounded-full p-2"><GoImage /> </button>
              ) : (
                null
              )}
              </div>
            <div className="flex flex-col text-black m-2">
              <h4>Neal Simmons</h4>
              <p className="text-primaryText text-[14px]">CEO / Co-Founder</p>
              <PrimaryBtn
                text={"Administrator"}
                color={"primaryPurple"}
                bg={"#f6f2f8"}
                borderColor={"#682D91"}
              />
            </div>
          </div>

          <div>
            {
                edit ? (
                    <PrimaryBtn
                    text={"Contact Info"}
                    icon={<FaPen />}
                    bg={"#F9FAFC"}
                    borderColor={"#EDEDEE"}
                    color={"black"}
                    onClick={handleContact}
                    />
                ): (
            <PrimaryBtn
            text={"Edit"}
            icon={<FaPen />}
            bg={"#F9FAFC"}
            borderColor={"#EDEDEE"}
            color={"black"}
            onClick={handledit}
            />
                )
            }
          </div>
          
        </div>

        <hr className="my-4" />

            {/* details info  */}
            {edit ? (
                    <div className="flex flex-row justify-between">
                        <div className="w-[45%]">
                            <h4 className="text-[15px] ml-3">Profile Name</h4>
                            <PrimaryInput
                            type={"text"}
                            placeholder={"Neal Simmons"}
                            />


                        <div className="mt-3 mb-5">
                            <h4 className="text-[15px] ml-3">Personal Information</h4>
                            <input
                            className="border-[2px] py-[7px] px-4 text-primaryText outline-none text-wrap flex border-[#EDEDEE] rounded-full w-full"
                            type={"text"}
                            placeholder={"Mi vel consequat tempor aliquet vitae mattis. In duis orci viverra porttitor. Ipsum vitae libero id etiam sociis interdum. Consequat fermentum lorem sed massa mattis fusce arcu. Nibh lectus proin enim facilisis imperdiet."}
                            />
                            </div>

                        <PrimaryBtn
                            text={"Save"}
                            bg={"#682D91"}
                            color={"white"}
                            icon={<IoCheckmarkSharp />}
                            />
                        </div>

                        <div className="w-[45%]">
                            <h4 className="text-[15px] ml-3">Subtitle</h4>
                            <PrimaryInput
                            type={"text"}
                            placeholder={"CEO / Co-Founder"}
                            />


                        <div className="mt-2">
                            <h4 className="text-[15px] ml-3">E-mail</h4>
                            <input
                            className="border-[2px] py-[7px] px-4 text-primaryText outline-none text-wrap flex border-[#EDEDEE] rounded-full w-full"
                            type={"text"}
                            placeholder={"verra  mattis fusce s imperdiet."}
                            />
                            </div>

                            <div className="mt-2">
                            <h4 className="text-[15px] ml-3">Campus</h4>
                            <PrimaryInput
                            className="border-[2px] py-[7px] px-4 text-primaryText outline-none text-wrap flex border-[#EDEDEE] rounded-full w-full"
                            type={"text"}
                            placeholder={"Administrator"}
                            icon={<MdKeyboardArrowDown />}
                            />
                            </div>
                        </div>
                    </div>
            ):(
                        
        <div className="flex flex-col text-[#344767] w-[50%]">
        <div className=" items-center flex">
        <FaUserEdit className="mr-3" />
        <h4>Profile Information</h4>
        </div>

        <p className="text-[14px] text-justify mt-4 mb-9">
        Mi vel consequat tempor aliquet vitae mattis. In duis orci viverra
        porttitor. Ipsum vitae libero id etiam sociis interdum. Consequat
        fermentum lorem sed massa mattis fusce arcu. Nibh lectus proin enim
        facilisis imperdiet.
        </p>

        <div className="flex flex-col w-[80%]">
        <div className="flex flex-row justify-between">
            <h4>Full Name</h4>
            <p className="text-[14px]">Neal William Thompson Simmons</p>
        </div>

        <div className="flex flex-row justify-between">
            <h4>Mobile:</h4>
            <p className="text-[14px]">(44) 123 1234 123</p>
        </div>

        <div className="flex flex-row justify-between">
            <h4>Email:</h4>
            <p className="text-[14px]">alecthompson@mail.com</p>
        </div>

        <div className="flex flex-row justify-between text-justify">
            <h4>Location:</h4>
            <p className="text-[14px]">USA</p>
        </div>
        
        <div className="flex flex-row justify-between">
            <h4>Social:</h4>
            <div className="flex items-center">
            <FaFacebook style={{ marginRight: "5px" }} />
            <FaTwitter style={{ marginRight: "5px", color:'#16C0E8' }} />
            <FaInstagram />
            </div>
        </div>
        </div>
        </div>
        // null
            )}
      </div>
    </main>
    </React.Fragment>
  );
};

export default Page;
