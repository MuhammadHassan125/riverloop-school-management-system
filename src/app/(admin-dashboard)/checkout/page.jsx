import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import PrimaryBtn from '@/components/dashboard/PrimaryBtn'
import { FaArrowLeft } from "react-icons/fa6";
import Image from 'next/image';
import PrimaryInput from '@/components/PrimaryInput';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';


const breadcrumb = [
    {name:"Dashboard", path:"/admin-dashboard"},
    {name:"Checkout", path:"/checkout"},
]
const page = () => {
  return (
    <React.Fragment>
        <Breadcrumb items={breadcrumb}/>
        <main className="w-[98%] h-min-screen p-3 pb-6 m-auto border-[1px] rounded-xl border-borderGray bg-white">
            <div className='w-full flex items-center justify-between'>
                <h3>Checkout</h3>
                <Link href="/admin-dashboard">
                <PrimaryBtn text={"Back"} bg={"#F9FAFC"} color={"black"} icon={<FaArrowLeft />}/>
                </Link>
            </div>

            <div className='w-full my-6 flex flex-col items-center justify-center'>
                <Image
                src="/images/Stripe logo.png"
                alt="Picture of the author"
                width={100}
                height={100}
                />

                <div className='w-full lg:px-20 py-6 flex flex-wrap flex-col md:flex-row items-center justify-between gap-3'>
                    <div className='w-[100%] md:w-[32%] flex flex-col items-center justify-center border py-12 rounded-lg'>
                        <Image
                        src={'/images/card.png'}
                        alt="Picture of the author"
                        width={40}
                        height={40}    
                        />
                        <h4>Card</h4>
                    </div>

                    <div className='w-[100%] md:w-[32%] flex flex-col items-center justify-center border py-12 rounded-lg'>
                        <Image
                        src={'/images/EPS.png'}
                        alt="Picture of the author"
                        width={40}
                        height={40}    
                        />
                        <h4>EPS</h4>
                    </div>

                    <div className='w-[100%] md:w-[32%] flex flex-col items-center justify-center border py-12 rounded-lg'>
                        <Image
                        src={'/images/Giropay.png'}
                        alt="Picture of the author"
                        width={40}
                        height={40}    
                        />
                        <h4>Giropay</h4>
                    </div>
                </div>
            </div>
            
            <div className='w-full lg:px-20'>

                <div>
            <h5 className='text-primaryText text-[15px] ml-4 font-medium'>Card number</h5>
                <PrimaryInput
                type={"text"}
                placeholder={'1234 1234 1234 1234'}
                />
                </div>

                <div className='flex flex-row justify-between mt-5'>
                <div className='w-[48%]'>
            <h5 className='text-primaryText text-[15px] ml-4 font-medium'>Expiry</h5>
                <PrimaryInput
                type={"text"}
                placeholder={'1234 1234 1234 1234'}
                />
                </div>

                <div className='w-[48%]'>
            <h5 className='text-primaryText text-[15px] ml-4 font-medium'>Card number</h5>
                <PrimaryInput
                type={"text"}
                placeholder={'1234 1234 1234 1234'}
                />
                </div>
                </div>

                <div className='flex flex-row justify-between mt-5'>
                <div className='w-[48%]'>
            <h5 className='text-primaryText text-[15px] ml-4 font-medium'>Country</h5>
                <PrimaryInput
                type={"text"}
                placeholder={'United States'}
                />
                </div>

                <div className='w-[48%]'>
            <h5 className='text-primaryText text-[15px] ml-4 font-medium'>Postal code</h5>
                <PrimaryInput
                type={"text"}
                placeholder={'90210'}
                />
                </div>
                </div>

            </div>


            <div className='py-10'>
                <Link href={"/admin-dashboard"} className='hover:opacity-65'>
            <PrimaryBtn
                type={"submit"}
                text={"Checkout with Stripe"}
                icon={<FaArrowRightLong />}
                color={"white"}
                bg={"#682D91"}
                />
                </Link>
            </div>
        </main>
    </React.Fragment>
  )
}

export default page