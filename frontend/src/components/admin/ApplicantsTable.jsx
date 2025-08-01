import { MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { useSelector } from "react-redux";
import {APPLICATION_API_END_POINT } from "../../../utils/constant.js";
import { toast } from "sonner";


const shortListingStatus = ["Accepted", "Rejected"]

function ApplicantsTable() {
    const { applicants } = useSelector(store => store.application)
    const stastusHandler = async (status, id) => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            console.log(res.data);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }
    return (
        <div>
            <Table>
                <TableCaption>Alist of your recent applies user</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <tr>
                                {/* <TableCell>Kanchi</TableCell>
                            <TableCell>kanchi@gmail.com</TableCell>
                            <TableCell>9876543210</TableCell>
                            <TableCell>
                                <a href="#" target="_blank" className="text-blue-500">View Resume</a>
                            </TableCell>
                            <TableCell>12-03-2024</TableCell> */}


                                <TableHead>FullName</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Resume</TableHead>
                                <TableHead>Date</TableHead>
                                <TableCell className="float-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortListingStatus.map((status, index) => {
                                                    return (
                                                        <div onClick={() => statusHandler(status, item._id)} key={index} className="flex w-fit my-2 items-center justify-between cursor-pointer ">
                                                            <span>{status}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableCell className="float-right cursor-pointer">
                            <Popover>
                                <PopoverTrigger>
                                    <MoreHorizontal />
                                </PopoverTrigger>
                                <PopoverContent className="w-32">
                                    {
                                        shortListingStatus.map((status, index) => {
                                            return (
                                                <div key={index} className="flex w-fit my-2 items-center justify-between cursor-pointer ">
                                                    <span>{status}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </tr> */}
                </TableBody>
            </Table>
        </div>
    )
}

export default ApplicantsTable;