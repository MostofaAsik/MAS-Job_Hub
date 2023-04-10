import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div className='pl-3 pr-3  md:pl-16 md:pr-16 flex mt-2'>
            <Banner></Banner>
        </div>
    );
};

export default Home;