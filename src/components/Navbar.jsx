import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [navOpen, openNavbar] = useState(false)
  const openNav = () => {
    openNavbar(!navOpen)
  }

  return (



    <div className='top-0 fixed w-full shadow-xl z-20'>
      {/* mobile nav */}
      <ul className={navOpen ? 'text-white lg:hidden h-full bg-[#1c1b18] text-5xl gap-2 w-3/4 flex flex-col fixed top-0 pl-2' : 'text-white hidden h-full bg-red-500  text-5xl gap-2  flex-col fixed top-0'}>
        <h1 className='absolute w-full text-right pr-6 text-4xl cursor-pointer' onClick={openNav}>x</h1>
        <div className=' text-white top-0 py-2   mb-10 mt-10'>realtors<span className='text-[#F1F252]'>.</span></div>

        <li>Pricing</li>
        {/* <div className='relative'>
          <h1>To Let</h1>
          <div className='text-sm absolute top-1 right-16 text-black px-1 bg-[#F1F252] rounded-md'>NEW</div>
          </div> */}

        <Link to={'/login'}>Sign Up</Link>
        <Link to={'/login'}>Login</Link>
      </ul>

      <div className='bg-[#1c1b18] flex px-4 pt-4 justify-between items-center mx-auto text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white flex lg:hidden" onClick={openNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <ul className='hidden md:flex justify-between gap-6 text-xl'>
          <li>Pricing</li>
          {/* <div className='relative'>
          <h1>To Let</h1>
          <div className='text-sm absolute top-1 right-16 text-black px-1 bg-[#F1F252] rounded-md'>NEW</div>
          </div> */}

          <Link to={'/login'}>Sign Up</Link>
          <Link to={'/login'}>Login</Link>
        </ul>
        <div className={!navOpen ? ' text-white top-0 py-2 text-2xl ' : 'hidden'}>realtors<span className='text-[#F1F252]'>.</span></div>

      </div>
    </div>

  )
}
