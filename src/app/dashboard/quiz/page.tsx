"use client"

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {GraduationCap} from 'lucide-react'

const QuizStart = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [selectedClass, setSelectedClass] = useState<number | null>(null)
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        const classQuery = searchParams.get("class")
        if (classQuery) {
            console.log("Selected class:", classQuery)
        }
    }, [searchParams])

    const handleContinue = () => {
        if (selectedClass) {
            router.push(`/questions?class=${selectedClass}`)

        } else {
            setShowError(true)
        }
    }

    return (
        <div>
            <Card className="w-[350px] mx-auto mt-20">
                <CardHeader>
                    <CardTitle><GraduationCap/>Select Your Class</CardTitle>
                    <CardDescription>Choose your current class level to personalize your learning experience.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="class">Class :</Label>
                            <Select onValueChange={(val) => setSelectedClass(parseInt(val))}>
                                <SelectTrigger id="class">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                            {i + 1}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {showError && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>Please select a class to continue.</AlertDescription>
                            </Alert>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button onClick={handleContinue}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default QuizStart
