import Input from "@/components/Input";
import AuthBtn from "@/components/auth/AuthBtn";
import Image from "next/image";
import React from "react";
import Footer from "../Footer";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

const page = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col-reverse md:flex-row  items-center">
      {/* login field content  */}
      <div className="w-[100%]   md:w-[50%] h-full flex flex-col justify-between relative">
        <div className=" w-[100%] md:w-[60%] flex flex-col bg-white py-8 -translate-y-10 md:translate-y-0 rounded-[50px] md:rounded-none items-center m-auto">
          <Image src={"/images/logo.png"} alt="logo" width={150} height={150} />

          <div className="my-6 text-center">
            <div className="flex items-center w-20 mx-auto ">
              <h2 className="text-xl font-semibold">Hello</h2>
              <Image
              alt="login-img"
              src={"/images/hand.JPG"}
              width={30}
              height={30}
              />
              </div>
            <p className="text-primaryText">How do I get started lorem ipsum at?</p>
          </div>

          <div className="w-full px-3">
            <div className="mb-4">

            <Input 
            type="email"
            placeholder="loremipsum@gmail.com" 
            label="E-mail" 
            icon={<MdOutlineMailOutline />}
            />
            </div>
            <Input 
            type={"password"}
            placeholder="password"
             label="Password" 
             icon={<LuEyeOff />}             
             />

            {/* forget password */}
            <div className="text-center my-4">
              <p className="text-primaryPurple font-semibold">Forgot password?</p>
            </div>

            <AuthBtn label="Login" className="mt-3" />
          </div>
        </div>

        <div className="w-full text-center absolute bottom-4">
          <Footer />
        </div>
      </div>
      
      {/* Right side Image  */}
      <div className="w-[100%] md:w-[50%] h-full bg-top bg-auto  bg-[url('/images/login-img.png')]"></div>
    </main>
  );
};

export default page;
