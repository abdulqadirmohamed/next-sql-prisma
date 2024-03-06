'use client'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const DeleteBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this user?")
    if (confirmed) {
      try {
        const res = await fetch(`/api/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (res.ok) {
          console.log('user deleted')
          const user = await res.json()
          // const
          toast.success('user deleted')
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <button onClick={handleDelete}>
      <Trash2 size={20} />
    </button>
  )
}

export default DeleteBtn