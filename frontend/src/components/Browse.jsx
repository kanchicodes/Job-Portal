import React from 'react'
import Navbar from './shared/Navbar';
import Job from './Job';
// import store from 'redux/store';
import { useSelector } from 'react-redux';


//const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const Browse = () => {
    const { allJobs } = useSelector(state => state.job);
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Result ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {/* {
                        randomJobs.map((item, index) => {
                            return <Job key={index} />
                        })
                    } */}
                    {
                        allJobs.length <= 0 ? <span>No Jobs Available</span> : allJobs?.slice(0, 6).map((job) => <Job key={job._id} job={job} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Browse;
