import React from 'react'
import { Link } from 'react-router-dom'
import otp1 from '../otp.svg'
import OtpInput from 'react-otp-input';
import { useState } from 'react';

export default function OTP() {
    const [otp, setOtp] = useState('');
    return (
        <div class="flex flex-col mx-10 mt-20 items-center text-center gap-2">
            <img src={otp1} alt="" className='size-3/4' />
            <h1 className='font-bold text-xl'> OTP Verification</h1>
            <p className='text-gray-500'>Enter OTP sent to <span className='font-bold '>+254 7********</span> </p>

            <input type="number" name="" id="" className='border-b-2 focus:outline-none mt-10 w-2/3 text-center' autoFocus max='9999' required/>

            <h1 className='mt-6 text-gray-500'>Didn't Receive the OTP? <span className='text-orange-400' >RESEND OTP</span></h1>
            <Link to={'/otp'} class='w-full rounded-md text-white bg-blue-600 py-2 shadow-xl mt-2'>VERIFY AND PROCEED</Link>

        </div>
    )
}
