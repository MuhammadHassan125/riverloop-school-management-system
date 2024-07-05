import Input from "@/components/Input";
import AuthBtn from "@/components/auth/AuthBtn";
import Image from "next/image";
import React from "react";
import Footer from "../Footer";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";

const page = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col-reverse md:flex-row  items-center ">
      {/* signup field content  */}
      <div className="w-[100%] md:w-[50%] h-[100%] overflow-auto flex flex-col justify-between">
        <div className="md:w-[60%] flex flex-col  bg-white  py-8 -translate-y-10 md:translate-y-0 rounded-[50px] md:rounded-none items-center m-auto">
          <Image src={"/images/logo.png"} alt="logo" width={150} height={150} />

          <div className="my-6 text-center">
            <div className="flex items-center w-28 mx-auto">
              <h2 className="text-xl font-semibold">Welcome</h2>
              <Image
              src={"/images/hand.JPG"}
              width={30}
              height={30}
              />
              </div>
            <p className="text-primaryText">Create an account to get started with Riverloop and start managing your courses.</p>
          </div>

          <div className="w-full px-3 flex-col">
            <div className="flex justify-between  mb-4 items-center">
               <div className="w-[49%]">
                <Input
                  type={"text"}
                  placeholder={"John"}
                  label={"First Name"}
                />
                </div>

                <div className="w-[49%]">
                  <Input
                  type={"text"}
                  placeholder={"Deo"}
                  label={"Last Name"}
                  />
                </div>

            </div>

            <div className="mb-4">
            <Input 
            type="email"
            placeholder="loremipsum@gmail.com" 
            label="E-mail" 
            icon={<MdOutlineMailOutline />}
            />
            </div>

            <div className="mb-4">
             <Input 
            type="tel"
            placeholder="55 068 3245" 
            label="Phone" 
            icon={<IoPhonePortraitOutline />}
            />
            </div>

            <div className="mb-4">
            <Input 
            type={"password"}
            placeholder="********"
             label="Password" 
             icon={<LuEyeOff />}             
             />
             </div>

             <div className="mb-4">
            <Input 
            type={"password"}
            placeholder="********"
             label="Confirm Password" 
             icon={<LuEyeOff />}             
             />
</div> 
            <AuthBtn label="Register" className="mt-3" />

            {/* forget password */}
            <div className="text-cen0ter my-5 mb-10 flex justify-center">
             <p className="">Already have an account?  <span className="text-primaryPurple font-semibold"> Login now?</span></p>
            </div>

          </div>

          <div className="w-full text-center absolute bottom-2 pt-8">
          <Footer />
        </div>
        </div>

      
      </div>
      
      {/* Right side Image  */}
      <div className="w-[100%] md:w-[50%] h-full bg-right  bg-[url('/images/register-img.png')]"></div>
    </main>
  );
};

export default page;
