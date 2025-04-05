import * as React from 'react';
import { data } from './dashboardItems'
import Visualize from './Visualize';
// import * as React from 'react';



export default function Landlord() {

    const [sideHidden, showSideNav] = React.useState(true)
    function showSideMenu() {
        showSideNav(!sideHidden)
    }

    function hideMenu() {
        showSideNav(true)
    }

    return (
        <div>
            <div className="relative flex gap-4 h-full mx-6 mt-4 flex-row ">
                {/* sidenav */}
                <div className={sideHidden ? "sidebar gap-6 hidden text-left" : " sidebar gap-6 text-left flex flex-col absolute bg-black text-white pl-4 z-20 h-full fixed  left-0 top-0 w-3/4"}>

                    <div className='flex justify-between pr-2'>
                        <h1>realtors</h1>

                        {/* menu close icon */}
                       
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8" onClick={() => showSideMenu()}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>

                    <h1 className='text-gray-400'>MAIN MENU</h1>
                    {data.map((data, i) => {
                        return (<h1 key={i} className='cursor-pointer'>{data}</h1>)

                    })

                    }

                    <hr />
                    <div className='flex  gap-2'>
                        <h1>Demo</h1>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                        </label>
                    </div>

                    <h1>Feedback</h1>
                    <h1>Help and Docs</h1>

                    <div className='px-2 size-32 bg-black mt-32 rounded-md flex-col flex gap-2 pt-4 text-sm'>
                        <h1 className='text-white'>Get detailed analytics to help you</h1>
                        <button className='rounded-md bg-white text-black'>Upgrade Now</button>
                    </div>

                </div>

                {/* main content */}
                <div className="flex flex-col main-content size-full gap-4">
                    <div className="flex flex-row justify-between ">
                        {/* menu hide icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 menu-humburger " onClick={() => showSideNav()}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <input type="text" placeholder='Search anything here' className='text-sm pl-2' />

                        <div className="flex justify-between gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 my-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>



                            <div className='rounded-full size-8 bg-orange-300 text-lg'>P</div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <h1 className="text-lg font-bold mt-4">Overview</h1>

                    </div>
                    <div className="flex j gap-6 flex-wrap md:flex-nowrap w-full">
                        <div className='flex flex-col gap-2 text-left border rounded-lg p-2 basis-full  md:basis-1/3 shadow-lg h-[15vh] bg-blue-300 '>
                            <h1 className='text-2xl'>Total Expenditure</h1>
                            <h1 className='font-bold text-xl'>$230,000.00</h1>
                            <div className="flex gap-x-2">
                                <h1 className='text-md bg-green-300 p-1 rounded-sm'>12.52</h1>
                                <h1 className='text-md py-1'>Compared to last month</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 text-left border rounded-lg p-2 basis-full md:basis-1/3 shadow-lg h-[15vh] bg-blue-300 '>
                            <h1 className='text-sm'>Total Properties</h1>
                            <h1 className='font-bold'>15</h1>
                            <div className="flex gap-x-2">
                                <h1 className='text-xs bg-red-500 p-1 rounded-sm'>12.52</h1>
                                <h1 className='text-xs py-1'>Compared to last month</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 text-left border rounded-lg p-2 basis-full md:basis-1/3 shadow-lg h-[15vh] bg-blue-300 '>
                            <h1 className='text-sm'>Tenants</h1>
                            <h1 className='font-bold text-xl    '>600</h1>
                            <div className="flex">
                                <h1 className='text-xs py-1'>12.52</h1>
                                <h1 className='text-sm'>Compared to last month</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 text-left border rounded-lg p-2 basis-full md:basis-1/3 shadow-lg h-[15vh] bg-blue-300 '>
                            <h1 className='text-sm'>Total Income</h1>
                            <h1 className='font-bold'>$230,000.00</h1>
                            <div className="flex">
                                <h1 className='text-xs py-1'>12.52</h1>
                                <h1 className='text-sm'>Compared to last month</h1>
                            </div>
                        </div>

                    </div>
                    <Visualize />





                </div>
            </div>
        </div>
    )
}
