import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let [user, setUser] = useState(false);
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
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">Kanchi Gaikwad</h4>
                                            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet. </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-600 mt-4">
                                        <Button variant="ghost" className="flex items-center justify-start gap-2 cursor-pointer w-full">
                                            <User2 size={16} />
                                            <span>View Profile</span>
                                        </Button>
                                        <Button variant="ghost" className="flex items-center justify-start gap-2 cursor-pointer w-full">
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