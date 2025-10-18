import React from 'react'
import Link from 'next/link'
import "./navbar.css"
import { HiOutlineMenu } from "react-icons/hi"
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar flex justify-center bg-[#F8F9FA] items-center h-[4rem] sm:h-[5.75rem]  lg:h-[6.5rem]">
      <div className="containerr w-[100%] lg:w-[1140px] px-5 lg:px-0 ">
        <div className="nav-right flex items-center">
          <HiOutlineMenu className='rounded-md border-2 inline box-content p-0.5 my-[20px] sm:hidden cursor-pointer '  />
          <span className="logo flex items-center">
            <sup><img src="/images/logo_dark.8e5c7ade 2.png" className='w-[58] h-[28] mt-[10px] mr-[10px]  md:w-[109px] md:h-[53px] ' alt="My photo"  /></sup>
          </span>
          <ul className='hidden gap-4 lg:gap-8  text-[14px] lg:text-[16px] mr-[40PX] menu font-normal  md:flex  '>
            <li className='cursor-pointer'><Link href='/'>صفحه اصلی</Link></li>
            <li className='cursor-pointer'><Link href='/'>قیمت رمز ا‌‌‌رزها‌</Link></li>
            <li className='cursor-pointer'><Link href='/'>مقالات</Link> </li>
            <li className='cursor-pointer'><Link href='/'>تماس با ما</Link></li>
            <li className='hidden lg:inline cursor-pointer' ><Link href='/'>سایر</Link></li>
          </ul>


        </div>
        <div className="nav-left flex gap-8 ">
          <div className="tel hidden md:flex cursor-pointer">
            <span> <img src="/images/Frame.svg" className="w-[18px] lg:w-[24px]" /> </span>
            <a className='text-[14px] lg:text-[16px] mr-[10px] rtl inline-block direction-ltr '>۰۲۱-۹۱۰۰۸۵۹۰</a>
          </div>
          <div className="profile flex items-center  gap-2 cursor-pointer">
            <span> <img src="/images/pexels-los-muertos-crew-10041264 1.png" alt="" className='rounded-[50%]' /> </span>
            <span className=' text-[14px] lg:text-[16px] font-medium'>علی اسماعیلی</span>
            <span> <MdKeyboardArrowDown size={"24px"} /></span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar