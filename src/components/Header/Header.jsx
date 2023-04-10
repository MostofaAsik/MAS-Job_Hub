import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-200 pl-3 pr-3  md:pl-16 md:pr-16  flex items-center md:items-center justify-between md:justify-between'>
            <h1 className=' text-xl md:text-5xl pt-3 pb-4 md:pb-4 font-bold'>MAS Job Hub</h1>
            <div className='flex items-center'>
                <nav className='text-sm md:text-2xl'>
                    <Link to='/' className='pl-2 md:pl-4'>Home</Link>
                    <Link to='/statistics' className='pl-2 md:pl-4'>Statistics</Link>
                    <Link to='/appliedjob' className='pl-2 md:pl-4'>Applied Jobs</Link>
                    <Link to='/blog' className=' pl-2 md:pl-4 pr-2'>Blog</Link>
                </nav>
                <button className='bg-blue-500 p-1 md:p-2 rounded-md'>Start Applying</button>
            </div>

        </div>
    );
};

export default Header;