import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-200 pl-3 pr-3  md:pl-16 md:pr-16  flex flex-col md:flex-row items-center md:items-center justify-between md:justify-between'>
            <h1 className=' text-3xl  md:text-5xl  pt-3 pb-4 md:pb-4 font-bold'>MAS Job Hub</h1>
            <div className='flex flex-col md:flex-row items-center'>
                <nav className='text-xl flex flex-row  md:text-2xl'>
                    <Link to='/' className='pl-2 md:pl-4'>Home</Link>
                    <Link to='/statistics' className='pl-2 md:pl-4'>Statistics</Link>
                    <Link to='/appliedjob' className='pl-2 md:pl-4'>Applied Jobs</Link>
                    <Link to='/blog' className=' pl-2 md:pl-4 pr-2'>Blog</Link>
                </nav>
                <div >
                    <button className='bg-blue-500 mt-3 mb-3 p-2 md:p-2 rounded-md'>Start Applying</button>
                </div>
            </div>

        </div>
    );
};

export default Header;