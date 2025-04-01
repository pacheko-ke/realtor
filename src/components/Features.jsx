import React from 'react'
import Pay from '../images/pay.svg'
import Chat from '../images/chat.svg'
import Paypal from '../images/paypal.svg'
import Mpesa from '../images/mpesa.svg'
import Visa from '../images/visa.svg'
import Stripe from '../images/stripe.svg'

export default function Features() {
    return (
        <div className='mt-10 flex flex-col mx-4 text-left gap-4 '>
            <h1 className='text-2xl font-bold mb-2'>Manage Your Properties. But With Zero Hassle</h1>

            <div className='flex flex-col '>
                <h1 className='text-md font-bold '>Multiple Payment Methods</h1>
                <p>The mobile app allows your tenants to send payments easily and conviniently through a number of supported payment providers.</p>
                <div className="overflow-x-scroll flex gap-2">
                    
                    <img src={Mpesa} alt="mpesa" className='flex-none size-28' />
                    <img src={Visa} alt="visa" className='flex-none size-28' />
                    <img src={Stripe} alt="stripe" className='flex-none size-28' />
                    <img src={Paypal} alt="paypal" className='flex-none size-28' />
                </div>


                <div>
                    <h1 className='text-md font-bold mt-4'>Interact seamlessly with your tenants and agents</h1>
                    <p>Bridge the gap between you and your tenants through a live chat and an inbuilt customer service utility.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>

                <div>
                    <h1 className='text-md font-bold mt-4'>Automate admin</h1>
                    <p>Super powerful customizable admin dashboard to help you gain insights of your revenue.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>
                <div>
                    <h1 className='text-md font-bold mt-4'>Instant notifications and reminders</h1>
                    <p>Automatically send payment and maintenance notifications and reminders to tenants and agents via SMS and Email.</p>
                    {/* <img src={Chat} alt="payment" /> */}
                </div>
                <div>
                    <h1 className='text-md font-bold mt-4'>Flexible and convinient</h1>
                    <p>Manage multiple properties; anytime anywhere through our web app, USSD or Mobile App.</p>
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
