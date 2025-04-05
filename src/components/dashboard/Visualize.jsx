import React, { PureComponent } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, } from 'recharts';

// dummy data for testing
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];


// line chart dummy data
const data3 = [
    {
        name: 'Jan',
        Income: 4000,
        Expenditure: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        Income: 3000,
        Expenditure: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        Income: 2000,
        Expenditure: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        Income: 2780,
        Expenditure: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Income: 1890,
        Expenditure: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        Income: 2390,
        Expenditure: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        Income: 3490,
        Expenditure: 4300,
        amt: 2100,
    },
];

export default function Visualize() {
    return (
        <>
            {/* Data visualization section */}
            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:basis-1/2 bg-gray-100 shadow-lg flex-col py-2 ">
                    <h1 className='text-md'>Revenue Collection Since January</h1>

                    <LineChart
                        width={500}
                        height={300}
                        data={data3}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Expenditure" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
                    </LineChart>

                </div>
                <div className="flex w-full  md:basis-1/2  bg-gray-100 shadow-lg flex-col ">
                    <h1 className='text-xl'>Revenue Collection Per Apartment</h1>

                    <PieChart width={300} height={300}>
                        <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>


                </div>

            </div>

            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:w-1/2 bg-gray-100 shadow-lg ">
                    <LineChart width={300} height={300} data={data} >
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                </div>

                <div className="flex md:w-1/2 bg-gray-100 shadow-lg  flex-col py-2">
                    <h1 className='text-xl'>Dues cleared</h1>

                    <LineChart width={300} height={300} data={data} >
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
