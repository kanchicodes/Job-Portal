import React from 'react'
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-logo-vector-png-image_9183290.png" />
                    </Avatar>
                </Button>
                <div>
                    <p className='font-semibold'>Company Name</p>
                    <p>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={"text-blue-700 font-bold"} variant="ghost">12 Positions</Badge>
                <Badge className={"text-red-700 font-bold"} variant="ghost">Part Time</Badge>
                <Badge className={"text-purple-600 font-bold"} variant="ghost">18LPA</Badge>
            </div>
            <div className='flex items-center mt-4 gap-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-purple-600">Save For Later</Button>
            </div>
        </div>
    )
}
export default Job;
