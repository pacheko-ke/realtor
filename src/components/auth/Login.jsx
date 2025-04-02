import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login() {


    const user = [{
        "email": "John Doe",
        "password": "John@213_"

    }]

    const [passwordHidden, showPassword] = useState(true)
    const showFullPass = () => {
        showPassword(!passwordHidden)
    }

    return (
        <div className='flex md:flex-row md:mx-20 h-full mx-6'>
            <img src="" alt="login screen image" className='hidden md:flex basis-1/2' />
            <div className="flex flex-col  text-left  mt-20  gap-4 mx-auto md:px-72 px-4">

                <div className="flex justify-between text-3xl">
                    <h1 className=' ita '>realtors.</h1>

                    <Link to={'/'} className='text-xl underline cursor-pointer'>Landlord Sign Up</Link>

                </div>

                <h1 className='text-3xl font-medium'>Login In To Your Account </h1>


                <select className='border rounded-lg py-2 focus:border-2 pl-2'>
                    <option value="0">Log In As:</option>
                    <option value="1">Tenant</option>
                    <option value="2">Property Owner</option>

                </select>


                <div className="flex flex-col">
                    <label htmlFor="businessName">Email</label>
                    <input type="text" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="businessName">Password</label>
                    <input type={passwordHidden ? "password" : "text"} id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={passwordHidden ? "size-6 absolute right-2 top-8 cursor-pointer" : "size-6 absolute right-2 top-8 hidden"} onClick={showFullPass}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={passwordHidden ? "size-6 absolute right-2 top-8 hidden" : "size-6 absolute right-2 top-8 cursor-pointer"} onClick={showFullPass}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>

                </div>

                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" className='items-start size-6 accent-[#F1F252]' />
                    <p className='text-sm'>I agree to the terms of service and incorporated terms, no fees terms, sanctions agreement and understand Keja’s privacy notice.</p>
                </div>

                <button className='bg-[#F1F252] py-2 rounded-full'>Proceed to Dashboard</button>
            </div>
        </div>
    )
}
