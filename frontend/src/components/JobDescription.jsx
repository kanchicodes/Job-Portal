import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { JOB_API_END_POINT } from "../../utils/constant"
import { setSingleJob } from '../../redux/jobSlice';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from "../../utils/constant"


const JobDescription = () => {
    const { singleJob } = useSelector(state => state.job);
    const { user } = useSelector(state => state.auth);
    const params = useParams();
    const jobId = params.jobId;
    const dispatch = useDispatch();
    const [isApplied, setApplied] = useState(false);

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            if (res.data.success) {
                setApplied(true);
                const updateSingleJob = { ...singleJob, applications: [...singleJob?.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updateSingleJob));
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        if (singleJob) {
            const applied = singleJob.applications.some(app => app.applicant === user?._id);
            setApplied(applied);
        }
    }, [singleJob, user?._id]);

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);
    return singleJob && (
        <div className='max-w-5xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl '>{singleJob?.title}</h1>
                    <div>
                        <Badge className={"text-blue-700 font-bold"} variant="ghost">{singleJob?.position} Positions</Badge>
                        <Badge className={"text-red-600 font-bold"} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={"text-indigo-600 font-bold"} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button onClick={isApplied ? null : applyJobHandler} disabled={isApplied} className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`} >{isApplied ? "Already Applied" : "Apply Now"}</Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div>
                <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>

                <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>

                <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>

                <h1 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} Years</span></h1>

                <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>

                <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>{singleJob?.applications.length}</span></h1>

                <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription;
