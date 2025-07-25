import React from 'react'
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
    const { allJobs } = useSelector(state => state.job)
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job Not Found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <Job key={job?._id} job={job} />
                                        ))}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Jobs;
