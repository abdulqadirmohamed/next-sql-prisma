import { User } from "@/components/User";
import { TUser } from "@/types";
import Image from "next/image";

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

export default async function Home() {
  const users = await getUsers()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {users && users.length > 0 ? (
          users.map((user: TUser) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}

            />
          ))
        ) : (
          <div className="py-6">No posts to display</div>
        )}
      </div>
    </main>
  );
}
