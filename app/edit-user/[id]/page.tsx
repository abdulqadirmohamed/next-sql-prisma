import { EditUser } from '@/components/EditUser';
import { TUser } from '@/types'
import React from 'react'
// import EditUser from '@/components/EditUser'

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
    <div className='w-[400px] mx-auto'>
    {user ? <EditUser user={user} /> : <div>Invalid user</div>}
    </div>
  )
}

export default page