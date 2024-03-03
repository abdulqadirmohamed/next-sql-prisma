import Link from 'next/link';
import React, { use } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const getUsers = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/users', {
            cache: 'no-cache'
        });
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const User = async () => {
    const users = await getUsers()
    return (
        <div>
            <Table>
                <TableCaption>Users list</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">CreatedAt</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user: any) => (
                    <TableRow className='capitalize'>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell className="font-medium">{user.createdAt}</TableCell>
                    </TableRow>
                        ))}
                </TableBody>
            </Table>

        </div>
    )
}
