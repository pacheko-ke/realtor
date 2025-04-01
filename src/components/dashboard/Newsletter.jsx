import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex gap-4 flex-col mx-10 mt-28 md:w-1/4 md:gap-8 align-right'>
        <h1 className='text-4xl italic'>Keja<span className='text-[#e0e02d]'>.</span></h1>
        <h1 className='text-2xl'>Manage properties effortlessly</h1>
        <p className="text-sm">Sign up to get early access to Keja. We will mail you once the service launch  </p>
        <input type="email" placeholder='Enter email address' className='border pl-2 py-2 rounded-md invalid:border-red-500 invalid:border-2'/>
        <button className='bg-[#F1F252] py-2 rounded-md text-black'>Get Early Access</button>

    </div>
  )
}
