import React from 'react';

const JobCategory = () => {
    return (
        <div className='my-16 space-y-6'>
            <h1 className='font-bold text-3xl text-center'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-teal-100 rounded-md p-6 space-y-4' >
                    <img src="/icons/accounts.png" alt="" />
                    <h1 className='font-semibold'>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-teal-100 rounded-md p-6 space-y-4'>
                    <img src="/icons/creative.png" alt="" />
                    <h1 className='font-semibold'>Creative Design</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-teal-100 rounded-md p-6 space-y-4'>
                    <img src="/icons/accounts.png" alt="" />
                    <h1 className='font-semibold'>Marketing & Sales</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-teal-100 rounded-md p-6 space-y-4'>
                    <img src="/icons/accounts.png" alt="" />
                    <h1 className='font-semibold'>Engineering Job</h1>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;