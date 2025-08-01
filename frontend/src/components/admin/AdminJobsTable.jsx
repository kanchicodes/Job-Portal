import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { all } from "axios";



const AdminJobsTable = () => {
    const { companies, searchCompanyByText } = useSelector((store) => store.company);
    const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();
    useEffect(() => {
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        })
        setFilterJobs(filteredJobs);
    }, [job, searchJobByText])

    return (
        <div>
            <Table>
                <TableCaption>A list of your resent posted jobs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>company Name</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterJobs?.map((job) => (
                        <tr key={job._id}>
                            <TableCell>
                                {/* <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar> */}
                            </TableCell>
                            <TableCell>{job?.company?.name}</TableCell>
                            <TableCell>{job?.title}</TableCell>
                            <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                            <TableCell>
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>{" "}
                                    <PopoverContent className="w-32">
                                        <div
                                            onClick={() => navigate(`/admin/companies/${job._id}`)}
                                            className="flex items-center gap-2 w-fit cursor-pointer">
                                            <Edit2 className="w-4" />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </tr>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminJobsTable;