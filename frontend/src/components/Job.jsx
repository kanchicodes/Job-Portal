import React from 'react'
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';


const Job = ({ job }) => {
    const navigate = useNavigate();
    //const jobId = "12345";
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const now = new Date();
        const timeDifference = now.getTime() - createdAt.getTime();
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-logo-vector-png-image_9183290.png" />
                    </Avatar>
                </Button>
                <div>
                    <p className='font-semibold'>{job?.company?.name}</p>
                    <p>{job?.location}</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={"text-red-700 font-bold"} variant="ghost">{job?.jobType}</Badge>
                <Badge className={"text-purple-600 font-bold"} variant="ghost">{job?.salary}</Badge>
            </div>
            <div className='flex items-center mt-4 gap-4'>
                <Button variant="outline" onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
                <Button className="bg-purple-600">Save For Later</Button>
            </div>
        </div>
    )
}
export default Job;
