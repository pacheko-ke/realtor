import React from 'react'
import { motion } from "motion/react"
import EarlyAccess from './core/EarlyAccess'
import Dashboard from '../assets/images/dashboard-illustration.svg'


export default function Home() {

    const raiseAlert = () => {
        alert("Feature under development")
    }

    const variants = {
        initial: {
            y: 500
        },
        animate: {
            y: 0
        }
    }

    return (
        <div className='flex flex-col relative '>
            <div className='flex bg-[#1c1b18] md:h-[80vh]'>
                <div className='flex flex-col  text-white text-left px-4 gap-2 py-4 lg:pt-20 md:basis-1/2 md:gap-8 mt-10'>
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, }} className=' text-3xl md:text-5xl font-bold'>Property management, revenue collection and billing under one roof.</motion.h1>
                    <motion.p initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='md:text-xl'>Grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more.</motion.p>
                    <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-4">
                        <button className='bg-[#F1F252] rounded-full text-[#1c1b18] py-2 md:w-1/2' onClick={raiseAlert}>Sign Up</button>
                        <button className='border border-white rounded-full text-white py-2 md:w-1/2' onClick={raiseAlert}>Request Quote</button>
                    </div>
                </div>
                <div className="flex">

                </div>

            </div>
            <img src={Dashboard} alt="image here" className='mx-4 mt-6 opacity-34' />
            <EarlyAccess />


        </div>


    )
}
