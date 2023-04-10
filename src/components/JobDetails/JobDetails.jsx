import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
    const data = useLoaderData()
    console.log(data);

    const id = useParams().id
    console.log(id);
    const targetData = data.find(data => data.id == id)
    console.log(targetData);

    const { educational_requirement, email, experience, job_description, job_responsibilities, location, phone, salary, title } = targetData


    return (
        <div className='pl-3 pr-3  md:pl-16 md:pr-16'>
            <h1 className='text-4xl text-center font-bold mt-2 mb-6'> Job Details page</h1>
            <div className='flex'>

                <div className='w-1/2'>
                    <h1 className='text-xl font-semibold'>Description:
                        <span className=' text-xl text-gray-500'>{job_description}</span>
                    </h1>

                    <h1 className='text-xl font-semibold'>Job Responsibility:
                        <span className=' text-gray-500'>{job_responsibilities}</span>
                    </h1>
                    <h1 className='text-xl font-semibold mt-3'>Educationl Requirements:</h1>
                    <p className='mt-2'>{educational_requirement}</p>
                    <h1 className='text-xl font-semibold mt-3'>Experience:</h1>
                    <p className='mt-2'>{experience}</p>
                </div>
                <div className='w-80  shadow-md bg-slate-100 pl-4'>
                    <h1 className='text-2xl font-extrabold'>Job Details</h1>

                    <hr className=' border-1 mt-2' />

                    <div className='mt-3'>
                        <h1 className='font-semibold'>Salary:
                            <span className='text-gray-600'> {salary}</span>
                        </h1>
                        <h1 className='font-semibold'>Job Title:
                            <span className='text-gray-600'> {title}</span>
                        </h1>
                    </div>
                    <h1 className='text-2xl font-semibold mt-6'>Contact Information</h1>
                    <hr className=' border-1 mt-4' />
                    <div className='mt-3'>
                        <h1 className='font-semibold mb-2'>Phone:
                            <span className='text-gray-600'> {phone}</span>
                        </h1>
                        <h1 className='font-semibold mb-2'>Email:
                            <span className='text-gray-600'> {email}</span>
                        </h1>
                        <h1 className='font-semibold mb-5'>Location:
                            <span className='text-gray-600'> {location}</span>
                        </h1>


                    </div>
                    <button className='w-full rounded-lg bg-blue-400 p-2'>Apply Now</button>

                </div>

            </div>

        </div>
    );
};

export default JobDetails;