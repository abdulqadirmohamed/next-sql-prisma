import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


// fetching all recond
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(users)
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

// Insert db
export async function POST(req: Request) {

  const { name, email } =
    await req.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "name and email are required." },
      { status: 500 }
    );
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name, email
      },
    });
    console.log("Post created");
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ message: "Could not create post." });
  }
}