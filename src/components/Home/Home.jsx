import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeatureJob from '../FeatureJob/FeatureJob';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const jobs = useLoaderData()

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

                <div className='grid grid-cols-2 gap-6'>
                    {
                        jobs.map(job => <FeatureJob
                            key={job.id}
                            job={job}
                        ></FeatureJob>)
                    }
                </div>
            </section>

        </div>




    );
};

export default Home;