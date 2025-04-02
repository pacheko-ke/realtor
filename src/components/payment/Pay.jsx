import React from 'react';
import Apple from '../../assets/images/applepay.svg';
import Google from '../../assets/images/gpay.svg';
import { useState } from 'react';


const Pay = () => {

    const [mpesaActive, activateMpesa] = useState(false)

    function toggleMpesa() {
        activateMpesa(true)
    }

    function toggleCard() {
        activateMpesa(false)
    }

    function toggleAirtel() {
        activateMpesa('')
    }



    return (
        <div className='flex flex-col gap-2 mx-4 mt-10'>
            <button className='bg-black rounded-md text-white w-full py-1 cursor-pointer'><img src={Google} alt="" className='mx-auto size-6 ' /></button>
            <button className='bg-black rounded-md text-white w-full py-1 cursor-pointer'><img src={Apple} alt="" className='mx-auto size-6  ' /></button>
            <h1 className='my-4 text-center'>or pay with other method</h1>

            <div className="flex gap-2 ">
                <div className="flex flex-col py-2 pl-2  pr-16 border rounded-lg border-purple-400 cursor-pointer gap-1" onClick={() => toggleCard()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-purple-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>

                    <h1 className='text-lg'>Card</h1>
                </div>

                <div className="flex flex-col py-4 px-10 border rounded-lg cursor-pointer" onClick={toggleMpesa}>
                    <h1>Mpesa</h1>
                </div>
                <div className="flex flex-col py-4 px-10 border rounded-lg cursor-pointer" onClick={()=>{return 0}}>
                    <h1>Airtel Money</h1>
                </div>

            </div>

            {/* MPESA PAYMENT */}
            <div className={mpesaActive ? 'flex flex-col mt-2' : 'hidden'}>
                <label htmlFor="cardNumber " className='text-left mt-4'>Mpesa Number</label>
                <input type="text" className='border rounded-md py-2 pl-2 text-sm' placeholder='254712345678' />

                <button className='bg-green-400  rounded-md text-black w-full py-2 mt-3'>Process Payment</button>
            </div>


            {/* AIRTEL MONEY PAYMENT */}
            {/* <div className={mpesaActive ? 'flex flex-col mt-2' : 'hidden'}>
                <label htmlFor="cardNumber " className='text-left mt-4'>Airtel Number</label>
                <input type="text" className='border rounded-md py-2 pl-2 text-sm' placeholder='254712345678' />

                <button className='bg-green-400  rounded-md text-black w-full py-2 mt-3'>Process Payment</button>
            </div> */}


            {/* CARD PAYMENT */}
            <div className={!mpesaActive ? 'flex flex-col' : 'hidden'}>
                <label htmlFor="cardNumber " className='text-left mt-4'>Card Number</label>
                <input type="text" className='border rounded-md py-2 pl-2 text-sm' placeholder='1234 1234 1234 1234' />
                <div className='flex gap-2'>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="cardNumber " className='text-left mt-4'>Expiration</label>
                        <input type="text" className='border rounded-md py-2 pl-2 text-sm' placeholder='MM/YY' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="cardNumber" className='text-left mt-4'>CVV</label>
                        <input type="text" className='border rounded-md py-2 pl-2 text-sm' placeholder='CVV' />
                    </div>
                </div>
                <button className='bg-green-400  rounded-md text-black w-full py-2 mt-3 cursor-pointer'>Process Payment</button>
            </div>

            <h1 className='site-security-notice'> </h1>

        </div>
    );
};

export default Pay;