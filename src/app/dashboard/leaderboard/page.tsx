import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function LeaderboardPage() {
  const topUsers = await prisma.users.findMany({
    orderBy: { points: "desc" },
    take: 10, // top 10 users
  })

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">🏆 Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topUsers.map((user, index) => (
              <div
                key={user.user_id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-bold w-6 text-right">{index + 1}.</span>
                  <span>{user.username}</span>
                </div>
                <span className="font-semibold text-primary">{user.points} pts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
