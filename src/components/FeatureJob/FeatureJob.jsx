import React from 'react';
import './FeatureJob.css'
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const FeatureJob = ({ job }) => {
    // console.log(job);
    const { title, img_url, logo_title, location, salary, id } = job;

    const navigate = useNavigate()

    return (
        <div className='w-70 h-70 shadow-lg p-6 mt-3'>
            <img className='w-20 mb-2' src={img_url} alt="" />
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h1>{logo_title}</h1>
            <div className='mt-3'>
                <button className='p-2 bg-blue-300 rounded-md '>Remote</button>
                <button className='p-2 bg-blue-300 rounded-md ml-4'>Full time</button>
            </div>

            <small className='pr-4 text-xl'> {location}</small>
            <small className='text-xl'> Salary:{salary}</small>
            <div className='mt-2'>

                {/* <Link to=''> */}
                <button onClick={() => navigate(`job/${id}`)} className='p-2 bg-blue-500 rounded-md '>View Details</button>
                {/* </Link> */}
            </div>


        </div>
    );
};

export default FeatureJob;

