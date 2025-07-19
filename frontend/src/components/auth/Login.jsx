// import { useState } from 'react';
// import { Label } from '../ui/label';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import axios from 'axios';
// import { toast } from 'sonner'
// import Navbar from '../shared/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
// import { USER_API_END_POINT } from '../../../utils/constant.js'
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

// const Login = () => {
//     const [input, setInput] = useState({
//         email: "",
//         password: "",
//         role: "",

//     });
//     const navigate = useNavigate();
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value })

//     }

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 navigate("/");
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
//                 <form onSubmit={submitHandler}
//                     className='w-1/2  border-gray-400 rounded-md p-4 my-10  ' >
//                     <h1 className='font-bold text-x1 mb-5 '>Log in</h1>
//                     <div>
//                         <Label>Email</Label>
//                         <Input type='text' placeholder='thekanchigaikwad@gmail.com'
//                             name="email"
//                             value={input.email}
//                             onChange={changeEventHandler}
//                         />
//                     </div>
//                     <div>
//                         <Label>Password</Label>
//                         <Input type='password' placeholder="Enter password"
//                             name="password"
//                             value={input.password}
//                             onChange={changeEventHandler}
//                         />
//                     </div>
//                     <div className='flex items-center justify-between mt-5 '>
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
//                     </div>
//                     <Button type='submit' className='w-full my-4'>Login</Button>
//                     <span className='text-sm'>Dont't have an Account?<Link to="/signup" className='text-blue-600 text-sm'>Signup </Link></span>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link } from 'react-router-dom'




    const Login = () => {
        const [input,setInput]=useState({
           
            email:"",
            password:"",
            role:"",
           
        });
        const changeEvenHandler =(e)=>{
            setInput({...input,[e.target.name]:e.target.value});
            
        };
        
        const submitHandler = async(e)=>{
          e.preventDefault();
        }
  return (
    <div>
        <Navbar/>
        <div className="flex items-center justify-center max-w-7x1 mx-auto">
                <form onSubmit={submitHandler}  className='w-1/2 border border-black-700 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-x1 mb-5'>Log in</h1>
                   
                    <div>
                        <Label>Email</Label>
                        <Input type="email" placeholder="abhishekputta@gmail.com" name="email" value={input.email} onChange={changeEvenHandler} />
                    </div><br/>
                    
                    <div>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Enter password" name="password" value={input.password} onChange={changeEvenHandler}/>
                    </div><br/>
                    
                   
                    <div className='flex items-center justify-between mt-5'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className='flex items-center space-x-2'>
                                 <Input type="radio" name="role" value="student" checked={input.role ==="student"} onChange={changeEvenHandler} className="cursor-pointer"/>
                               
                                <Label htmlFor="r1">Student</Label>

                            </div>
                            <div className='flex items-center space-x-2'>
                              <Input type="radio" name="role" value="recruiter" checked={input.role ==="recruiter"} onChange={changeEvenHandler} className="cursor-pointer"/>
                                <Label htmlFor="r2">Recruiter</Label>

                            </div>
                        </RadioGroup>
                     
                    </div>
                    <Button type='submit' className='w-full my-4'>Login</Button>
                    <span className='text-sm'>Dont't have an Account?<Link to="/signup" className='text-blue-600 text-sm'>Signup </Link></span>
                    </form>
                    </div>
      
    </div>
  )
}

export default Login