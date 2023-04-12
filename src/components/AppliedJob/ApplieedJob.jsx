import React, { useState } from 'react';
import { getStoredJob } from '../../utils/fakeDb';
import { useLoaderData } from 'react-router-dom';
import JoB from '../Job/JoB';

const ApplieedJob = () => {

    const jobData = useLoaderData()
    console.log(jobData);
    const savedJobCart = getStoredJob()
    console.log(savedJobCart);
    let jobCart = []
    for (const id in savedJobCart) {
        const foundJob = jobData.find(job => job.id === id)
        if (foundJob) {
            jobCart.push(foundJob)

        }
    }
    console.log(jobCart);

    return (
        <div>



            <div className='pl-3 pr-3  md:pl-16 md:pr-16'>
                <h3 className='text-4xl text-center font-bold mt-2 mb-8'>Aplied Jobs</h3>
            </div>

            <div className='pl-3 pr-3  md:pl-16 md:pr-16 mb-10'>
                {
                    jobCart.map(job => <JoB
                        key={job.id}
                        job={job}
                    ></JoB>)
                }
            </div>


        </div>
    );
};

export default ApplieedJob;