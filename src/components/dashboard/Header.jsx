import React from 'react'

export default function Header() {
    return (
        <>
            <div className="flex text-5xl md:text-xl justify-between  mx-2 mt-6 text-left">

                <ul className="divide-black  divide-y-2 md:divide-y-0 flex  flex-col md:flex-row  md:gap-x-4 md:justify-between  text-orange-300 gap-0.5  ml-6 rotate-90 md:rotate-0">

                    <li>About</li>

                    <li>Services </li>
                    <li>Projects</li>

                    <li>Contact</li>

                </ul>

                <div className="flex flex-col underline decoration-orange-300 text-rightS">
                    <h1>01</h1>
                    <h1>02</h1>
                    <h1>03</h1>
                </div>



            </div>
            <div className='relative z-20'>
            {/* <div className='absolute bg-orange-300 w-28 h-8 top-12 left-4 z-0'></div> */}
            <h1 className='text-4xl text-left mt-10 mx-4 z-0 absolute'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque quisquam obcaecati! Ab a recusandae sequi modi corrupti dolorum molestias?</h1>
            
            </div>
        </>


    )
}
