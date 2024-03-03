import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

// Fetching single recond from sql
export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Could not fetch user" });
    }
}

// Delete record
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id
        const user = await prisma.user.delete({ where: { id: parseInt(id) } })
        return NextResponse.json(user)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Could not delete user" });
    }

}

// Update record
export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { email, name } = await req.json()
    const id = params.id

    try {
        const user = await prisma.user.update(
            {
                where: { id: parseInt(id) },
                data: {email, name}
            });
        return NextResponse.json(user)

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error editing user" });
    }
}