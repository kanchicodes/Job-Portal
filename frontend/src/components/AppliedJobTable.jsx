import { Badge } from './ui/badge';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table';
import React from 'react'

export const AppliedJobTable = () => {
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
                <TableBody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>05/05/2025</TableCell>
                                <TableCell>Frontend Developer</TableCell>
                                <TableCell>Cambium Learning</TableCell>
                                <TableCell><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable;
