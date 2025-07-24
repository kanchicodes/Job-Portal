import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '../../../utils/constant'
import { toast } from 'sonner'
import { setUser } from '../../../redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.email || !input.password || !input.role) {
            toast.error("All fields are required.");
            return;
        }
        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Log in</h1>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input type="email" placeholder="kanchi@gmail.com" name="email" value={input.email} onChange={changeEventHandler} />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input type="password" placeholder="********" name="password" value={input.password} onChange={changeEventHandler} />
                    </div>

                    <div className='flex items-center justify-between mt-5'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value="student" id="r1" onClick={() => setInput({ ...input, role: 'student' })} />
                                <Label htmlFor="r1" className="cursor-pointer">Student</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value="recruiter" id="r2" onClick={() => setInput({ ...input, role: 'recruiter' })} />
                                <Label htmlFor="r2" className="cursor-pointer">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type='submit' className='w-full my-4' disabled={loading}>
                        {loading ? <><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</> : "Login"}
                    </Button>
                    <span className="text-sm">Don't have an Account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login