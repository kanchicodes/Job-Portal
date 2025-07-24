import { Popover, PopoverContent, PopoverTrigger, } from "../ui/popover"
import { USER_API_END_POINT } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/authSlice";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";


const Navbar = () => {
    //let [user, setUser] = useState(false);
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='bg-white border-b'>
            <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
                <div className="items-center">
                    <h1 className="text-2xl font-bold">Job<span className="text-blue-600">Portal</span></h1>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5 list-none">
                        <li ><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className="flex items-center gap-2 " >
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">{user?.fullName}</h4>
                                            <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-600 mt-4">
                                        <Button variant="ghost" className="flex items-center justify-start gap-2 cursor-pointer w-full">
                                            <User2 size={16} />
                                            <span><Link to="/profile">View Profile</Link></span>
                                        </Button>
                                        <Button onClick={logoutHandler} variant="ghost" className="flex items-center justify-start gap-2 cursor-pointer w-full">
                                            <LogOut size={16} />
                                            <span>Log Out</span>
                                        </Button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                </div>
            </div>
        </div>
    );
};


export default Navbar;