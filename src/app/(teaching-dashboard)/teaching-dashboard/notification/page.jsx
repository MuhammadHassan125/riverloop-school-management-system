import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Avatar } from '@mui/material';
import React from 'react'
import { GoClock } from "react-icons/go";


const breadcrumb =[
    {name:'Dashboard', path:'/admin-dashboard'},
    {name:'Notifications', path:'/school-dashboard/notifications'},
  ];

const notificationData = [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s",
        title:"@izaloures",
        txt:"Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum dis viverra tempor et aliquam. Metus in amet risus condimentum convallis semper.",
        time:(
            <div className='text-primaryText flex gap-2 items-center'>
                <GoClock />
                23min ago
            </div>
        )
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s",
        title:"@izaloures",
        txt:"Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum dis viverra tempor et aliquam. Metus in amet risus condimentum convallis semper.",
        time:(
            <div className='text-primaryText flex gap-2 items-center'>
                <GoClock />
                23min ago
            </div>
        )
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s",
        title:"@izaloures",
        txt:"Lorem ipsum dolor sit amet consectetur. Sed bibendum vestibulum dis viverra tempor et aliquam. Metus in amet risus condimentum convallis semper.",
        time:(
            <div className='text-primaryText flex gap-2 items-center'>
                <GoClock />
                23min ago
            </div>
        )
    },
]

const page = () => {
  return (
    <React.Fragment>
        <Breadcrumb items={breadcrumb}/>
        <main className="w-[98%] h-[100vh] p-3 m-auto border-[1px] rounded-xl border-borderGray bg-white">
            <h3>Notifications</h3>

                {notificationData?.map((data, index) => (
            <div key={index} className='flex flex-row justify-between my-6'>
                  <div className='flex items-center gap-5 w-[80%]'>
                    <Avatar
                    src={data.img}
                    alt='image'
                    sx={{ width: 40, height: 40 }}
                    />

                    <div className='flex-col'>
                        <h4>{data.title}</h4>
                        <p className='text-primaryText text-[14px]'>{data.txt}</p>
                    </div>
                    </div>  

                    <div className='flex'>{data.time}</div>
            </div>
                ))}
        </main>
    </React.Fragment>
  )
}

export default page