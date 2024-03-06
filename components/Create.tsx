'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


export const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!name || !email) {
            const errorMessage = "Name and email are required"
            toast.error(errorMessage)
        }
        try {
            const res = await fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email
                })
            });
            if (res.ok) {
                toast.success('User created successfull')
                router.push('/')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="mt-32">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your fullname" className="border px-4 py-2 rounded-md outline-none w-full my-2" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="border px-4 py-2 rounded-md outline-none w-full my-2" />
                </div>
                <div className="my-3">
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Submit</button>
                </div>
            </form>
        </div>
    )
}
