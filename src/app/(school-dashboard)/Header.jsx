import React from 'react';import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = ({ handleSideBarToggle, isSidebarOpen }) => {

  const [anchorE2, setAnchorE2] = React.useState(null);

  const Secondopen = Boolean(anchorE2);
  const handleSecondClick = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleSecondClose = () => {
    setAnchorE2(null);
  };

  
  return (
    <React.Fragment>
      <main className='flex flex-row w-[100%] h-full justify-between items-center'>
        {/* left side of header  */}
        <div className='flex items-center w-[40%] justify-between px-3'>
        <button
            onClick={handleSideBarToggle}
            className=" text-2xl rounded-lg bg-gray-50 hover:bg-gray-100 p-2 text-primaryText transition-all duration-300"
          >
            {isSidebarOpen ? (
              <MdOutlineArrowBackIos />
            ) : (
              <MdOutlineArrowForwardIos />
            )}

          </button>

          {/* search bar  */}
          <div className='w-[80%] flex justify-between items-center px-2 border-[2px] rounded-full py-[6px] text-primaryText border-[#EDEDEE] bg-transparent '>
            <RiSearchLine className='text-xl mr-2 text-primaryText' />
            <input
              className='outline-none w-full text-primaryText bg-transparent'
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>

        {/* right side of header  */}
        <div className='flex justify-between px-6'>
          {/* Avatar  */}
          <div className='flex items-center '>
            <h4 className='text-primaryText mr-2'>lorem@example.com</h4>
            <Avatar
              onClick={handleSecondClick}
              alt="Travis Howard"
              className="cursor-pointer"
              src="https://as2.ftcdn.net/v2/jpg/07/23/16/45/1000_F_723164515_Tuc5CujLdTnWmXacxoSplIqsRunex8gn.jpg"
            />
            <Menu
        id="basic-menu"
        anchorEl={anchorE2}
        open={Secondopen}
        onClose={handleSecondClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleSecondClose}><Link href="/school-dashboard/user-profile">My Profile</Link></MenuItem>
      </Menu>
          </div>

          <div className='flex hover:bg-gray-100 hover:text-primaryPurple hover:cursor-pointer items-center border rounded-full p-2 mx-3'>
            <Link href="school-dashboard/notifications">
            <Badge
              badgeContent={12}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: 'red',
                  color: 'white',
                },
              }}
            >
              <IoMdNotificationsOutline className='text-2xl' />
            </Badge>
            </Link>
          </div>

          <div className='flex items-center border rounded-full p-2 hover:bg-gray-100 hover:text-primaryPurple hover:cursor-pointer'>
            <IoSettingsOutline className='text-2xl' />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Header;
