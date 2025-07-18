import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
    let [user, setUser] = useState(false);
    return (
        <div className='bg-white '>
            <div className="flex items-center justify-between mx-auto max-w-6x1 h-16">
                <div className="items-center">
                    <h1 className="text-2x1 font-bold">Job<span className="text-blue-600">Portal</span></h1>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5 list-none">
                        <li >Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className="flex items-center gap-2 " >
                                <Button variant="outline">Login</Button>
                                <Button className="bg-purple-600 hover:bg-purple-700 item-center cursor-pointer">Signup</Button>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-85">
                                    <div className="flex gap-2 spac e-y-2">
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">Kanchi Gaikwad</h4>
                                            <p className="text-sm text-muted-foreground">Lorem ipsum dolar sit amet. </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-600">
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <User2 />
                                            <Button variant="link">View Profile</Button>
                                        </div>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <LogOut />
                                            <Button variant="link">Log Out</Button>
                                        </div>
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