import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SharedBanner from '../SharedBanned/SharedBanner';
import { saveJobApplication} from '../../utilities/localStorage';

const JobDetails = () => {
    const {jobId}= useParams();
    const jobIdInt = parseInt(jobId);
    const jobs  = useLoaderData();
    const job = jobs.find(job => job.id === jobIdInt);
    console.log(job);
    const handleApply =() =>{
        saveJobApplication(jobIdInt);
    }


    return (
        <div className='mb-20'>
            <SharedBanner title={"Job Details"}></SharedBanner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-20'>
                <div className='space-y-4 md:col-span-2'>
                  <h1 className='text-3xl font-bold'>{job.title}</h1>
                    <div>
                        <p className='text-2xl font-bold text-teal-500'>Job Description</p>
                        <p>{job.job_description}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-teal-500'>Job Responsibility</p>
                        <p>{job.job_responsibility}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-teal-500'>Educational Requirements</p>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-teal-500'>Experience</p>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className='space-y-4 mt-4 bg-teal-100 p-4 rounded-md'>
                    <div>
                        <p className='text-2xl font-bold text-teal-500'>Salary</p>
                        <p>{job.salary}</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-2xl font-bold text-teal-500'>Contact Information</p>
                        <p><span className='font-semibold'>Phone:</span> {job.contact_information.phone}</p>
                        <p><span className='font-semibold'>Email:</span> {job.contact_information.email}</p>
                        <p><span className='font-semibold'>Address:</span> {job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApply} className="px-4 py-2 bg-teal-500 rounded-md text-white font-bold">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;