import React from 'react'

export default function Footer() {
    return (
        <div className='bottom-0 bg-[#F1F252] flex flex-col text-left pl-8 pt-2 '>
            <div className="flex flex-col pb-4">
                <h1 className='font-bold'>How it works</h1>
                <h1>Tenant</h1>
                <h1>Landlord</h1>
                <h1 className='divider divider-black'>Invoice Payments</h1>

            </div>
            <div className="flex flex-col pb-4">
                <h1 className='font-bold'>Contact Us</h1>
                <h1>+2547 69869064</h1>
                <h1>contact@keja.co.ke</h1>
                <h1 className='divider divider-black'>Contact Sales</h1>
                <h1 className='mt-4'>Pacheko Technologies</h1>

            </div>

        </div>
    )
}
