import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const JobCategory = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Job Category List</h1>
            <p className='text-center text-sm mt-2 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {
                    data.map((job, i) => <SingleJob
                        key={i}
                        job={job}
                    ></SingleJob>)
                }
            </div>

        </div>
    );
};

export default JobCategory;