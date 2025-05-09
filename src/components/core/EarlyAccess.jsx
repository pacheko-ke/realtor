import React from 'react'
import { motion } from 'motion/react'

export default function Newsletter(props) {
  return (
    <motion.div className='flex gap-4 shadow-xl flex-col right-6 left-6 md:left-[20%] md:right-[20%] top-[35vh] lg:top-[55vh] align-center z-10    md:gap-8 align-right bg-gray-800 px-6 py-4 text-white absolute' initial={{ y: 500 }} animate={{ y: 0 }} transition={{ duration: 2, delay: 2 }}>
      <p className="text-md lg:text-xl">Sign up to get early access to realtors. We will mail you once the service launch.  </p>
      <input type="email" placeholder='Enter email address' className='border pl-2 py-2 rounded-md invalid:border-red-500 invalid:border-2 text-white' />
      <button className='bg-[#F1F252] py-2 rounded-md text-black'>Get Early Access</button>

    </motion.div>
  )
}
