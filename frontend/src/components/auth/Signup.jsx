// import { useState } from 'react'
// import { toast } from 'sonner'
// import Navbar from '../shared/Navbar';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
// import { Button } from '../ui/button';
// import { Link , useNavigate} from 'react-router-dom';
// import { USER_API_END_POINT } from '../../../utils/constant.js'
// import axios from 'axios'


// export const Signup = () => {
//     const [input, setInput] = useState({
//         fullName: "",
//         email: "",
//         phoneNumber: "",
//         password: "",
//         role: "",
//         file: null
//     });
//     const navigate =  useNavigate();
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })

//     }
//     const changeFileHandler = (e) => {
//         setInput({ ...input, file: e.target.files?.[0] })
//     }
//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("fullName", input.fullName);
//         formData.append("email", input.email);
//         formData.append("phoneNumber", input.phoneNumber);
//         formData.append("password", input.password);
//         formData.append("role", input.role);
//         if (input.file) {
//             formData.append("file", input.file);
//         }
//         try {
//             const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 navigate("/login");
//                 toast.success(res.data.message);
//             } else {
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center max-w-7xl mx-auto  '>
//                 <form
//                     onSubmit={submitHandler}
//                     className='w-1/2  border-gray-400 rounded-md p-4 my-10  ' >
//                     <h1 className='font-bold text-x1 mb-5 '>Sign Up</h1>
//                     <div>
//                         <Label>FullName</Label>
//                         <Input
//                             type='text'
//                             value={input.fullName}
//                             name='fullName'
//                             onChange={changeEventHandler}
//                             placeholder='Kanchi Gaikwad'
//                         />
//                     </div>
//                     <div>
//                         <Label>Email</Label>
//                         <Input type='email'
//                             value={input.email}
//                             name='email'
//                             onChange={changeEventHandler}
//                             placeholder='thekanchigaikwad@gmail.com'
//                         />
//                     </div>
//                     <div>
//                         <Label>Phone Number</Label>
//                         <Input type='text'
//                             value={input.phoneNumber}
//                             name='phoneNumber'
//                             onChange={changeEventHandler}
//                             placeholder='9999999999'
//                         />
//                     </div>
//                     <div>
//                         <Label>Password</Label>
//                         <Input type='password'
//                             value={input.password}
//                             name='password'
//                             onChange={changeEventHandler}
//                             placeholder='Enter password'
//                         />
//                     </div>
//                     <div className='flex items-center justify-between '>
//                         <RadioGroup className="flex items-center gap-4 my-5" >
//                             <div className='flex items-center space-x-2'>
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="student"
//                                     checked={input.role === 'student'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="rl">Student</Label>
//                             </div>
//                             <div className='flex items-center space-x-2'>
//                                 <Input
//                                     type="radio"
//                                     name="role"
//                                     value="recruiter"
//                                     checked={input.role === 'recruiter'}
//                                     onChange={changeEventHandler}
//                                     className="cursor-pointer"
//                                 />
//                                 <Label htmlFor="r2">Recruiter</Label>
//                             </div>
//                         </RadioGroup>
//                         <div className='flex items-center gap-2'>
//                             <Label>Profile</Label>
//                             <Input accept="image/*" type="file" onChange={changeFileHandler} className="cursor-pointer" />
//                         </div>
//                     </div>
//                     <Button type='submit' className='w-full my-4' >Signup</Button>
//                     <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600 text-sm'>Login</Link></span>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default Signup

import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '../../../utils/constant.js'
import { toast } from 'sonner'

const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: null
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const validateForm = () => {
        if (!input.fullName || !input.email || !input.phoneNumber || !input.password || !input.role) {
            toast.error("All fields are required!");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(input.email)) {
            toast.error("Invalid email format!");
            return false;
        }
        if (!/^\d{10}$/.test(input.phoneNumber)) {
            toast.error("Phone number must be 10 digits!");
            return false;
        }
        return true;
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        const formData = new FormData();
        Object.keys(input).forEach((key) => {
            if (input[key]) {
                formData.append(key, input[key]);
            }
        });

        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input
                            id="fullname"
                            type="text"
                            value={input.fullName}
                            name="fullName"
                            onChange={changeEventHandler}
                            placeholder="Kanchi Gaikwad"
                        />
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="kanchi@gmail.com"
                        />
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="10DigitsOnly"
                        />
                    </div>
                    <div className='my-2'>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="********"
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="student"
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    id="recruiter"
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label htmlFor="profile">Profile</Label>
                            <Input
                                id="profile"
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <Button type='submit' className='w-full my-4' disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Signup;