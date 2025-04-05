import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip  } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

export default function Visualize() {
    return (
        <>
            {/* Data visualization section */}
            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:basis-3/4 bg-gray-100 shadow-lg flex-col py-2 ">
                    <h1 className='text-xl'>Revenue Collection Per Quarter</h1>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className="flex w-full  md:basis-1/4  bg-gray-100 shadow-lg flex-col py-2">
                    <h1 className='text-xl'>Revenue Collection Per Quarter</h1>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                </div>

            </div>

            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:basis-1/3 bg-gray-100 shadow-lg ">




                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                </div>

                <div className="flex w-full md:basis-1/3 bg-gray-100 shadow-lg  flex-col py-2">
                    <h1 className='text-xl'>Dues cleared</h1>

                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>



            </div>
        </>
    )
}
