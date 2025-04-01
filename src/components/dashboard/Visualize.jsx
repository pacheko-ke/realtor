import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Visualize() {
    return (
        <>
            {/* Data visualization section */}
            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:basis-3/4 bg-gray-100 shadow-lg flex-col py-2 ">
                <h1 className='text-xl'>Revenue Collection Per Quarter</h1>
                    <BarChart
                        series={[
                            
                            { data: [51, 6] },
                            { data: [15, 25] },
                            
                        ]}
                        height={290}
                        xAxis={[{ data: ['Q1', 'Q2'], scaleType: 'band' }]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                </div>
                <div className="flex w-full  md:basis-1/4  bg-gray-100 shadow-lg flex-col py-2">
                <h1 className='text-xl'>Revenue Collection Per Quarter</h1>
                    {

                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Mpesa' },
                                        { id: 1, value: 15, label: 'Paypal' },
                                        { id: 2, value: 20, label: 'Visa Card' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />



                    }

                </div>

            </div>

            <div className="flex gap-6 flex-col md:flex-row">
                <div className="flex w-full md:basis-1/3 bg-gray-100 shadow-lg ">




                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                    />


                </div>
                
                <div className="flex w-full md:basis-1/3 bg-gray-100 shadow-lg  flex-col py-2">
                <h1 className='text-xl'>Dues cleared</h1>

                    <Gauge
                        value={75}
                        startAngle={-110}
                        endAngle={110}
                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 40,
                                transform: 'translate(0px, 0px)',
                            },
                        }}
                        text={
                            ({ value, valueMax }) => `${value} / ${valueMax}`
                        }
                    />
                </div>
                


            </div>
            </>
    )
}
