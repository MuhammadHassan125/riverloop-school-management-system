import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { TbDots } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";

const cardsDetails = [
    {
      title: "Bookings",
      value: "281",
      txt: "than last week",
      spanValue: "+55%",
      img: "/images/account.png",
      bgColor:"#162840",
    },
    {
      title: "Subscribers",
      value: "+96",
      txt: "than last week",
      spanValue: "+55%",
      img: "/images/account.png",
      bgColor:'#682D91'
    },
    {
      title: "Today User's",
      value: "2.300",
      txt: "than last week",
      spanValue: "+55%",
      img: "/images/account.png",
      bgColor:'#EC1E79'
    },
    {
      title: "Revenue",
      value: "34.000",
      txt: "than last week",
      spanValue: "+1%",
      img: "/images/account.png",
      bgColor:"#27C762"
    },
  ];

  const mySecondCards = [
    {
      icon:"/images/card1.png",
      txt:"Action Detail",
      title:"Action Lorem",
      arrow:<FaArrowRight />,
    },
    {
      icon:"/images/card2.png",
      txt:"Action Detail",
      title:"Lorem ipsum",
      arrow:<FaArrowRight />,
    },
  ];

  const latestCalender = [
    {
        title:"Course Name",
        days:"Mon - Thu - 10:44 am",
        image:"/images/Avatar.png" + "/images/Avatar2.png",
    },
    {
        title:"Course Name",
        days:"Mon - Thu - 10:44 am",
        image:"/images/Avatar.png" + "/images/Avatar2.png",
    },
    {
        title:"Course Name",
        days:"Mon - Thu - 10:44 am",
        image:"/images/Avatar.png" + "/images/Avatar2.png",
    },
  ];

  const breadCrumbs = [
    {name:'School Dashboard', path:'/school-dashboard'},
  ]

const TopCardsSection = () => {

  return (
    <React.Fragment>
      <section className="w-full p-3">
        <div>
          <h2>Welcome to Dashboard</h2>
          <p className="text-primaryText">
            Lorem ipsum dolor sit amet consectetur. Blandit in pulvinar
            adipiscing elementum placerat.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between mt-16">
          {cardsDetails.map((card) => (
            <React.Fragment key={card.title}>
              <div className="w-[100%] md:w-[24%] relative border-borderGray px-3 py-4 rounded-xl bg-white border-[1px]">
                <div className="absolute flex justify-center items-center z-10 top-0 left-3 p-3 rounded-xl -translate-y-[50%]"
                style={{backgroundColor:card.bgColor}}
                >
                  <Image src={card.img} width={20} height={20} />
                </div>

                <div className="flex flex-col text-right items-end">
                  <h4 className="text-primaryText">{card.title}</h4>
                  <h2 className="text-[#162840]">{card.value}</h2>
                  <p className="text-[#BECADA]">
                    <span className="text-success mr-2">{card.spanValue}</span>{card.txt}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="w-full my-6">
          <div className="flex flex-row justify-between items-center">
            <div className="w-[50%]">
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>

            <div className="flex w-[50%] justify-between items-center">
                <h3>Latest Calendars</h3>
                <Link href={'/school-dashboard/calendar'}>
                <button className="text-[16px] text-[#5B708B]">View All</button>
                </Link>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between">
          {/* cards main div  */}
          <div className="md:w-[48%] w-full flex flex-col gap-3 md:flex-row mt-3">
            {mySecondCards.map((index) => {
              return (
                <React.Fragment key={index.title}>
                   <div className=" w-[100%] md:w-[50%] p-3 border-borderGray rounded-xl border-[1px]">
                        <Image
                          src={index.icon}
                          alt="img"
                          width={35}
                          height={35}
                        />
                        <p className="text-[#BECADA] text-[14px] mt-3">{index.txt}</p>
                        <div className="w-full flex flex-row justify-between">
                        <h4>{index.title}</h4>
                        <div className="text-[#BECADA] flex items-center justify-center text-lg">{index.arrow}</div>
                        </div>
                   </div>
                </React.Fragment>
              )
            })}
          </div>

            {/* latest calender*/}
          <div className="md:w-[50%] w-full flex flex-col gap-3 mt-3">
             {latestCalender.map((index) => {
              return (
                <div className="flex items-center px-4 py-2 bg-[#682D910F] rounded-lg border-[1px] border-[#682D9133] text-primaryPurple justify-between w-[100%]" key={index.title}>
                   <div> <h5 className="font-medium">{index.title}</h5></div>
                   <div className="flex gap-4">
                    <div className="flex gap-1">
                      <Image
                        src={'/images/Avatar.png'}
                        alt="img"
                        width={20}
                        height={8}
                        />
                      <Image
                        src={'/images/Avatar2.png'}
                        alt="img"
                        width={20}
                        height={8}
                        />
                        </div>
                      <p className="text-[14px]">{index.days}</p>
                        </div>
                </div>
              )
             })}
          </div>

          </div>

        </div>
      </section>
    </React.Fragment>
  );
};

const AdminPageTable = () => {
  const data = [
    { id: 1, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots /> },
    { id: 2, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots /> },
    { id: 4, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots /> },
    { id: 5, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots /> },
    { id: 6, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots />},
    { id: 6, name: 'Lorem ipsum', age: '#', email: 'Monthly', lorem:"Lorem ipsum", date:"Feb 23, 2024 - Feb 29, 2024", icon:<TbDots />},
  ];
  return (
    <React.Fragment>
    <section className="w-full p-3">

      <h3 className="mb-3 -mt-3">Lorem ipsum dolor sit</h3>
      <div className="overflow-x-auto rounded-sm">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="text-primaryText text-[14px] ">
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">Lorem ipsum</th>
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">Lorem </th>
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">Lorem ipsum</th>
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">Lorem ipsum</th>
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50">Lorem ipsum</th>
            <th className="px-6 py-3 border-b text-start border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id} className="text-[#2E3851] text-[14px]">
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.name}</td>
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.age}</td>
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.email}</td>
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.lorem}</td>
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.date}</td>
              <td className="px-6 text-start py-4 border-b border-gray-200">{person.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </section>
    </React.Fragment>
  );
}
const page = () => {
  return (
    <React.Fragment>
            <Breadcrumb items={breadCrumbs}/>
      <main className="w-[98%] m-auto border-[1px] rounded-xl border-borderGray bg-white">
        <TopCardsSection />
        <AdminPageTable />
      </main>
    </React.Fragment>
  );
};

export default page;
