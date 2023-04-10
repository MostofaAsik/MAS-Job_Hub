import React from 'react';
import './SingleJob.css'

const SingleJob = ({ job }) => {
    const { categoryLogo, categoryName, jobsAvailable } = job
    console.log(job);
    return (
        <div>
            <div className='mb-4'>
                <div className='w-70 h-60 shadow-lg p-6 flex flex-col'>
                    <img className='w-20 rounded-full p-2' src={categoryLogo} alt="" />
                    <h1 className='text-3xl font-semibold'>{categoryName}</h1>
                    <p className='text-xl pt-2 mt-auto'>{jobsAvailable} <span>Jobs Avialable</span> </p>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;