import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-200 pl-16 pr-16  flex items-center justify-between'>
            <h1 className='text-5xl pb-4'>MAS Job Hub</h1>
            <div className='flex items-center'>
                <nav className='text-2xl'>
                    <Link to='/' className='pl-4'>Home</Link>
                    <Link to='/statistics' className='pl-4'>Statistics</Link>
                    <Link to='/appliedjob' className='pl-4'>Applied Jobs</Link>
                    <Link to='/blog' className=' pl-4 pr-2'>Blog</Link>
                </nav>
                <button className='bg-blue-500 p-2 rounded-md'>Start Applying</button>
            </div>

        </div>
    );
};

export default Header;