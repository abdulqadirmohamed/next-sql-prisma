import { TUser } from '@/types'

import { NextResponse } from 'next/server'


const getUser = async (id: string): Promise<TUser | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/user/${id}`, {
      cache: 'no-store'
    })
    if (res.ok) {
      const user = await res.json();
      return user;
    } 

  } catch (error) {
    console.log(error)
  }
  return null
}

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const user = await getUser(id)
  return (
    <div>
      <h1>Hello user {user?.email}</h1>
    </div>
  )
}

export default page