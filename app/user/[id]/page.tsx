import { TUser } from '@/types'
import { NextResponse } from 'next/server'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import DeleteBtn from '@/components/DeleteBtn'


const getUser = async (id: number): Promise<TUser | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error("failed to get details");
    }
    return res.json()

  } catch (error) {
    console.log(error)
  }
  return null
}

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = params
  const user = await getUser(id)
  return (
    <div className=' flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <div className='my-2'>
          <span className='text-sm'>User / <Link className='hover:underline' href={'/'}>Back</Link> </span>
        </div>
        <Card className='w-[400px]'>
          <CardHeader>
            <CardTitle className='uppercase text-[20px]'>{user?.name}</CardTitle>
            <CardDescription>{user?.email}</CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter>
              <p>{user?.createdAt}</p>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

export default page