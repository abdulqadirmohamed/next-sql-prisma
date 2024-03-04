import { TUser } from '@/types'

import { NextResponse } from 'next/server'

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
  const {id} = params
  const user = await getUser(id)
  return (
    <div>
      <h1>Hello user  {user?.name} - {user?.email}</h1>
    </div>
  )
}

export default page