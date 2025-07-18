import React from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto  '>
                <form action="" className='w-1/2  border-gray-400 rounded-md p-4 my-10  ' >
                    <h1 className='font-bold text-x1 mb-5 '>Sign Up</h1>
                    <div>
                        <Label>FullName</Label>
                        <Input type='text' placeholder='Kanchi Gaikwad' />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type='email' placeholder='thekanchigaikwad@gmail.com' />
                    </div>
                    <div>
                        <Label>Phone Number</Label>
                        <Input type='text' placeholder='9999999999' />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input type='password' placeholder='Enter password' />
                    </div>
                    <div className='flex items-center justify-between '>
                        <RadioGroup className="flex items-center gap-4 my-5" >
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value="default" id="rl" />
                                <Label htmlFor="rl">Student</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value="comfortable" id="r2" />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input accept="image/*" type="file" className="cursor-pointer" />
                        </div>
                    </div>
                    <Button type='submit' className='w-full my-4' >Signup</Button>
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600 text-sm'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}
export default Signup