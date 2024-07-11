import { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState([4])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setFeaturedJobs(data))
    }, [])

    return (
        <div className='my-20 space-y-6'>
        <h1 className='font-bold text-3xl text-center'>Featured Jobs</h1>
        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                featuredJobs.slice(0, dataLength).map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
            }
        </div>
        <div className={`mx-auto text-center ${dataLength===featuredJobs.length? 'hidden' : ''}`}>
            <button onClick={()=>setDataLength(featuredJobs.length)} className="mx-auto text-center px-5 py-2 bg-teal-400 rounded-md text-white font-bold">Show All</button>
        </div>
    </div>
    );
};

export default FeaturedJobs;