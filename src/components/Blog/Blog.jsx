import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-3 mb-3 text-blue-800'>Blog Questions And Answer</h1>
            <div className='pl-3 pr-3  md:pl-16 md:pr-16 bg-orange-400'>
                <div className='text-white'>
                    <h1 className='text-3xl text-black font-bold'><span className='text-4xl text-red-800'> Q1:</span >When should you see use Context Api</h1>
                    <p className='mt-3 text-xl'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
                </div>
                <div className='text-white'>
                    <h1 className='text-3xl text-black font-bold'><span className='text-4xl text-red-800'> Q2:</span >What is custom hook?</h1>
                    <p className='mt-3 text-xl'>Hooks are reusable functions.
                        When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
                        Custom Hooks start with "use". Example: useFetch.
                    </p>
                </div>
                <div className='text-white'>
                    <h1 className='text-3xl text-black font-bold'><span className='text-4xl text-red-800'> Q3:</span >What is useRef?</h1>
                    <p className='mt-3 text-xl'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
                <div className='text-white pb-2'>
                    <h1 className='text-3xl text-black font-bold'><span className='text-4xl text-red-800'> Q4:</span >What is useMemo?</h1>
                    <p className='mt-3 text-xl'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
                </div>
            </div>

        </div>

    );
};

export default Blog;