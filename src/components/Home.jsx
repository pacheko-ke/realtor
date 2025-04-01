import React from 'react'
import { motion } from "framer-motion"
import { animate } from 'framer-motion/dom'

export default function Home() {

    const raiseAlert = () => {
        alert("Feature under development")
    }
    return (
        <div className='flex flex-col bg-[#1c1b18] text-white text-left px-4 gap-2 py-4 pt-20'>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, }} className=' text-3xl font-bold'>Property management, revenue collection and billing under one roof.</motion.h1>
            <motion.p initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>Grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more.</motion.p>
            <button className='bg-[#F1F252] rounded-full text-[#1c1b18] py-2' onClick={raiseAlert}>Sign Up</button>
            <button className='border border-white rounded-full text-white py-2' onClick={raiseAlert}>Request Quote</button>
        </div>
    )
}
