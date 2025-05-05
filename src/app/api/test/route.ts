import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  // Create a test user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  return NextResponse.json(user);
}
