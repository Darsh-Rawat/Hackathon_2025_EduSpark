import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { userId, score, selectedClass } = await req.json()

    // Update user points
    await prisma.users.update({
      where: { user_id: userId },
      data: {
        points: {
          increment: score,
        },
      },
    })

    return NextResponse.json({ message: "Score saved successfully" }, { status: 200 })
  } catch (error) {
    console.error("Score save error:", error)
    return NextResponse.json({ error: "Failed to save score" }, { status: 500 })
  }
}
