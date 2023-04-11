import React from 'react';
import { Link } from 'react-router-dom';

const JoB = ({ job }) => {
    const { img_url, title, salary, location, logo_title, id } = job
    return (
        <div className='shadow-lg w-3/4 h-80 flex gap-5'>
            <div className='rounded-md border'>
                <img className='w-64 pt-32 px-4' src={img_url} alt="" />
            </div>
            <div className='ml-3 flex items-center'>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <h1 className='text-xl font-semibold text-gray-600 mt-2'>{logo_title}</h1>
                    <div className='mt-4'>
                        <button className='bg-purple-200 px-2 py-3 rounded-sm mr-4'>Remote</button>
                        <button className='bg-purple-200 px-2 py-3 rounded-sm '>Full time</button>
                    </div>
                    <p className='mt-3'><span>{location}</span> <span className='ml-4'>{salary}</span> </p>

                </div>
                <div className='ml-32'>
                    <Link to='' >
                        <button className='bg-blue-300 px-3 py-3 rounded-lg font-semibold'>View Details</button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default JoB;