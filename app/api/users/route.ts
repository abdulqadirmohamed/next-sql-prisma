import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


// fetching all recond
export async function GET() {
    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(users)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}
// fetchning single recond
