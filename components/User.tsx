
import Link from 'next/link';
import React, { use } from 'react'

import DeleteBtn from './DeleteBtn';
import { TUser } from '@/types';


export const User = async ({ id, name, email }: TUser) => {

    return (
        <div className='w-[400px]'>
            <div className=' flex justify-between items-center gap-10 my-3 border px-6 py-4 group hover:border-blue-600'>
                <div>
                    <h1 className='capitalize font-bold group-hover:text-blue-600'>{name}</h1>
                    <p className='text-sm'>{email}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <Link href={`user/${id}`} className='hover:text-blue-600'>View</Link>
                    <span className='hover:text-red-600 cursor-pointer'>
                        <DeleteBtn id={id}/>
                    </span>
                </div>
            </div>

        </div>
    )
}
