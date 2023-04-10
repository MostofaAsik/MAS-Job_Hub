import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const assignments = [
        { number: "Asingment 1", mark: 56 },
        { number: "Asingment 2", mark: 50 },
        { number: "Asingment 3", mark: 57 },
        { number: "Asingment 4", mark: 60 },
        { number: "Asingment 5", mark: 60 },
        { number: "Asingment 6", mark: 60 },
        { number: "Asingment 7", mark: 60 },
        { number: "Asingment 8", mark: 58 }
    ];

    return (
        <div className='pl-3 pr-3  md:pl-16 md:pr-16'>
            <h1 className='text-center text-4xl mb-4 font-semibold'>All Asingments Marks Charts</h1>
            <ComposedChart
                width={1000}
                height={400}
                data={assignments}
            >
                <Tooltip />
                <XAxis dataKey="number" scale="band" />
                <YAxis />

                <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
                <Scatter dataKey="mark" fill="red" />
                <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                <Bar dataKey="mark" barSize={20} fill="#413ea0" />
            </ComposedChart>

        </div>
    );
};

export default Statistics;