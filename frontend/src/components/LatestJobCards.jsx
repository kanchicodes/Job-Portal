import React from 'react'
import { Badge } from './ui/badge';

const LatestJobCards = ({job}) => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='text-lg font-medium'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>{job?.location}</p>
            </div>
            <div>
                <h1 className='text-lg font-bold my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={"text-red-700 font-bold"} variant="ghost">{job?.jobType}</Badge>
                <Badge className={"text-purple-600 font-bold"} variant="ghost">{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}
export default LatestJobCards;
