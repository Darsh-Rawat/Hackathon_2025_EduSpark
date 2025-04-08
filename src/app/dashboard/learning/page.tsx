"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { GraduationCap, ArrowRight, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function LearningStart() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null)
  const [showError, setShowError] = useState(false)
  const router = useRouter()

  const handleContinue = () => {
    if (selectedClass) {
      router.push(`/dashboard/learning/lectures?class=${selectedClass}`)
    } else {
      setShowError(true)
    }
  }

  return (
    <div>
      <Card className="w-[350px] mx-auto mt-20">
        <CardHeader>
          <CardTitle><GraduationCap className="inline-block mr-2" />Select Your Class</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Separator />
            <Label>Select Class:</Label>
            <Select onValueChange={(val) => setSelectedClass(parseInt(val))}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a class" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    Class {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {showError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Please select a class to continue.</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleContinue}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}
