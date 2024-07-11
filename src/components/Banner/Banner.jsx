import React from 'react';

const Banner = () => {
    return (
        <div className='my-12 grid gap4 grid-cols-1 md:grid-cols-2'>
            <div  className='mt-12 max-w-80 space-y-6'>
                <h1  className='text-5xl font-semibold space-y-5'>One Step Closer To Your <span className='text-teal-400'>Dream Job</span></h1>
               <p> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className="px-4 py-2 bg-teal-400 rounded-md text-white font-bold">Get Started</button>
            </div>
            <div>
                <img className='w-xl' src="/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;