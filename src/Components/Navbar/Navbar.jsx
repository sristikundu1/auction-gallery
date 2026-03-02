import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto py-3'>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home </a></li>
        <li><a>Auctions</a></li>
        <li><a>Categories </a></li>
        <li><a>How to works</a></li>
      </ul>
    </div>
    <a className=" text-xl text-[#003EA4]">Auction <span className='text-[#FFD337]'>Gallery</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-14 px-1">
      <li><a>Home</a></li>
      <li><a>Auctions</a></li>
      <li><a>Categories </a></li>
      <li><a>How to works</a></li>
    </ul>
  </div>
  <div className="navbar-end flex">
    <button className='mr-2'>
        <IoMdNotificationsOutline size={25} />
    </button>
   <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
              <img src="https://cmmodels.co.uk/wp-content/uploads/2025/02/cover-yasmin-zitman-female-model-dark-blond-hair-blue-eyes-studio-shooting-white-background-black-dress-open-hair-socks-.jpg" />
            </div>
          </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;