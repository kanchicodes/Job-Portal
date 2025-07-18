import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto  '>
                <form action="" className='w-1/2  border-gray-400 rounded-md p-4 my-10  ' >
                    <h1 className='font-bold text-x1 mb-5 '>Log in</h1>
                    <div>
                        <Label>FullName</Label>
                        <Input type='text' placeholder='Kanchi Gaikwad' />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type='email' placeholder='thekanchigaikwad@gmail.com' />
                    </div>
                    <div className='flex items-center justify-between mt-5 '>
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
                    </div>
                    <Button type='submit' className='w-full my-4'>Login</Button>
                    <span className='text-sm'>Dont't have an Account?<Link to="/signup" className='text-blue-600 text-sm'>Signup </Link></span>
                </form>
            </div>
        </div>
    );
};

export default Login;