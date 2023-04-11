import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className=''>
                <h1 className='text-5xl font-bold'>One Step <br /> Closer To Your <br /><span className='font-color'> Dream Job</span></h1>
                <p className='mt-6 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-blue-500 p-1 md:p-2 rounded-md mt-4'>Get Started</button>
            </div>
            <div className='w-25'>
                <img className='w-25 h-25 rounded-sm' src='https://www.rktt.pl/wp-content/uploads/2019/02/businessman.png?fbclid=IwAR3MiaR1V-nekGnyAzC8oVoSsU-4W_Q9a6ShWd3zR5IClkwa5OUVHtatgsc' alt="" />
            </div>
        </div>
    );
};

export default Banner;