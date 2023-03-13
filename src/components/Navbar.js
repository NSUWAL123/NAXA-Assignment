import React from 'react'
import hamicn from '../pictures/ham-icn.svg'
import naxalogo from '../pictures/naxa-logo.png'

const Navbar = () => {
  return (
    <div className='h-[4rem] flex items-center w-[92%]  justify-between'>
      <img src={naxalogo} alt="" className='w-[8rem]'/>
      <nav className='hidden lg:flex list-none text-sm w-1/2 lg:text-[16px] font-medium justify-between'>
        <li className='hover:cursor-pointer'>Services</li>
        <li className='hover:cursor-pointer'>Protfolio</li>
        <li className='hover:cursor-pointer'>Company</li>
        <li className='hover:cursor-pointer'>Events & Media</li>
        <li className='hover:cursor-pointer'>Blogs</li>
      </nav>
      <button className='bg-[#FFDC1C] text-[#124AF4] font-semibold px-10 py-2 text-sm'>Let's Talk</button>
      <img src={hamicn} alt="" srcset="" className='lg:hidden w-[2rem] cursor-pointer'/>
    </div>
  )
}

export default Navbar