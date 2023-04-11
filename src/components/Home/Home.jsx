import React, { useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeatureJob/FeatureJob';
import { Link, useLoaderData } from 'react-router-dom';
const Home = () => {
    const jobs = useLoaderData()

    const sliceJob = jobs.slice(0, 4)

    const [seeall, setSeeall] = useState(false)

    const handleSeeAll = () => {
        setSeeall(!seeall);
    }

    return (
        <div>
            <div className='pl-3 pr-3  md:pl-16 md:pr-16 flex mt-2'>
                <Banner></Banner>
            </div>
            <section className='pl-3 pr-3  md:pl-16 md:pr-16 mt-10'>
                <JobCategory></JobCategory>
            </section>
            <section className='pl-3 pr-3  md:pl-16 md:pr-16 mt-10'>
                <h1 className='text-center text-3xl font-bold'>Featured Jobs</h1>
                <p className='text-center text-sm mt-2 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                {/* 4 data  */}

                <div className={seeall === true ? "hidden" : ""}>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            sliceJob.map(job => <FeatureJob
                                key={job.id}
                                job={job}
                            ></FeatureJob>)
                        }
                    </div>
                </div>
                {/* 6 data  */}
                <div className={seeall === false ? "hidden" : ""}>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            jobs.map(job => <FeatureJob
                                key={job.id}
                                job={job}
                            ></FeatureJob>)
                        }
                    </div>

                </div>




                <div className='text-center mt-6 mb-2'>
                    <Link className={seeall === true ? "hidden" : ""}>
                        <button onClick={() => handleSeeAll()} className='bg-blue-500 px-3 py-2 w-40 rounded-lg'>See All Jobs</button>
                    </Link>

                </div>
            </section>

        </div>




    );
};

export default Home;