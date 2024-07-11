import { IoLocationOutline } from "react-icons/io5";
import { CgDollar } from "react-icons/cg";
import { Link } from "react-router-dom";

const FeaturedJob = ({featuredJob}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = featuredJob;
    return (
        <div className='border border-inherit rounded-md p-6 space-y-4'>
            <img className="w-28" src={logo} alt="" />
            <h1>{job_title}</h1>
            <p>{company_name}</p>
            <div>
                <button className='border border-black py-1 px-2 rounded'>{remote_or_onsite}</button>
                <button className='ms-4 border border-black py-1 px-2 rounded'>{job_type}</button>
            </div>
            <div className='grid grid-cols-2 '>
                <div className="flex"><p><IoLocationOutline className="text-2xl" /></p><p className="ms-2">{location}</p></div>
                <div className="flex"><p><CgDollar className="text-2xl" /></p><p className="ms-2">{salary}</p></div>
            </div>
            <Link to={`/jobs/${id}`}>
               <button className="mx-auto text-center px-4 mt-4 py-2 bg-teal-500 rounded-md text-white font-bold">View Details</button>
            </Link>

        </div>
    );
};

export default FeaturedJob;