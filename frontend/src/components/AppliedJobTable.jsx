import { Badge } from './ui/badge';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';
import React from 'react'

export const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Roll</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                {/* <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob?._id}>
                                <TableCell>05/05/2025</TableCell>
                                <TableCell>Frontend Developer</TableCell>
                                <TableCell>Cambium Learning</TableCell>
                                <TableCell><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    } */}
                {/* {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>05/05/2025</TableCell>
                                <TableCell>Frontend Developer</TableCell>
                                <TableCell>Cambium Learning</TableCell>
                                <TableCell><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    } */}
                {/* </TableBody> */}
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob?._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell>
                                    <Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === "pending" ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        )
                        )
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable;
