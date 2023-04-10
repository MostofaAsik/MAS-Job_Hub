import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
const Home = () => {
    return (
        <div>
            <div className='pl-3 pr-3  md:pl-16 md:pr-16 flex mt-2'>
                <Banner></Banner>
            </div>
            <section className='pl-3 pr-3  md:pl-16 md:pr-16 mt-10'>
                <JobCategory></JobCategory>
            </section>

        </div>




    );
};

export default Home;