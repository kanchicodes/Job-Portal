import React from 'react'
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE JS", "MONGODB"];
const Profile = () => {
   useGetAppliedJobs();
    const { user } = useSelector((state) => state.auth);
    const isResume = !!user?.profile?.resume;
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar />
            <div className='max-w-5xl mx-auto bg-white border border-gray-500 rounded-2xl my-5 p-8'>
                <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='w-24 h-24'>
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullName}</h1>
                            <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant="outline" size="icon"><Pen className='h-4 w-4' /></Button>
                </div>
                <div className='my-5 '>
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='font-bold text-lg mb-2'>Skills</h1>
                    <div className='flex gap-2 flex-wrap items-center'>
                        {
                            user?.profile?.skills?.length > 0 ? user.profile.skills.map((item) => <Badge key={item}>{item}</Badge>) : (<span>No skills added.</span>)
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm gap-1.5 items-center'>
                    <Label className='font-bold text-md'>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 hover:underline w-full cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>No Resume</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='text-lg font-bold my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;
