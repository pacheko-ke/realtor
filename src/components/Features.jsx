import React from 'react'
import Pay from '../assets/images/pay.svg'
import Chat from '../assets/images/chat.svg'
import Paypal from '../assets/images/paypal.svg'
import Mpesa from '../assets/images/mpesa.svg'
import Visa from '../assets/images/visa.svg'
import Stripe from '../assets/images/stripe.svg'

export default function Features() {
    return (
        <div className='mt-10 flex flex-col mx-4 text-left gap-4 mb-4 '>
            <h1 className='text-2xl font-bold mb-2'>Manage Your Properties. But With Zero Hassle</h1>

            <div className='flex flex-col gap-y-4 '>
               
                {/* <div className="overflow-x-scroll flex gap-2">

                    <img src={Mpesa} alt="mpesa" className='flex-none size-28' />
                    <img src={Visa} alt="visa" className='flex-none size-28' />
                    <img src={Stripe} alt="stripe" className='flex-none size-28' />
                    <img src={Paypal} alt="paypal" className='flex-none size-28' />
                </div> */}


                <div className="bg-blue-300 border-2 h-[20vh] border-black rounded-xl p-2">
                    <h1 className=' font-bold text-md'>Interact seamlessly with your tenants and agents</h1>
                    <p className=''>Bridge the gap between you and your tenants through a live chat and an inbuilt customer service utility.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>


                <div className="bg-blue-300 border-2 h-[20vh] border-black rounded-xl p-2">
                    <h1 className='text-md font-bold mt-4'>Instant notifications and reminders</h1>
                    <p>Automatically send payment and maintenance notifications and reminders to tenants and agents via SMS and Email.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>
                <div className="bg-blue-300 border-2 h-[20vh] border-black rounded-xl p-2">
                    <h1 className='text-md font-bold mt-4'>Flexible and convinient</h1>
                    <p>Multiple properties and Multiple Payment options; anytime anywhere through our web app, USSD or Mobile App.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>

                {/* <div>
                <h1 className='text-md font-bold'>Enforce offers and deals to tenants</h1>
                <p>Enforce offers and deals for your tenants to increase their stay .</p>
            </div>

            <div>
                <h1 className='text-md font-bold'>Landlords Mobile App</h1>
                <p>Manage your properties from the comfort of your bedroom through our mobile app .</p>
            </div> */}
            </div>
        </div>
    )
}
