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

const Page = () => {

  return (
    <main className="w-[98%] m-auto p-3 h-full">
      <div className="w-full rounded-3xl h-[40vh] bg-image-cover bg-no-repeat text-white p-6 relative">
        <div className="py-3">
          <h2>Hello, Neal Simmons</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quibusdam.
          </p>
        </div>
      </div>

      <div className="bg-white text-black rounded-3xl h-auto shadow-md px-5 pt-5 pb-20 translate-y-[-25%] m-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-auto">
            <Avatar
              src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
              className="rounded-full w-16 h-16"
            />
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
            <PrimaryBtn
              text={"Edit"}
              icon={<FaPen />}
              bg={"#F9FAFC"}
              borderColor={"#EDEDEE"}
              color={"black"}
            />
          </div>
        </div>

        <hr className="my-4" />

            {/* details info  */}
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
      </div>
    </main>
  );
};

export default Page;
