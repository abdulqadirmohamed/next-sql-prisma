import Link from 'next/link';
import React from 'react'

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
            {users.map((user: any) => (
                <div className='hover:underline'>
                    <Link href={`/user/${user.id}`}>{user.email}</Link>
                </div>
            ))}
        </div>
    )
}
