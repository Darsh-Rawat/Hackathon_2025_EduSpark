"use client"

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const lecturesByClass: Record<string, { title: string; videoUrl: string }[]> = {
  "9": [
    { title: "Isotopes", videoUrl: "https://www.youtube.com/embed/TFvwAeORJ8Y" },
    { title: "Matter", videoUrl: "https://www.youtube.com/embed/gX6CCKJ2_6E" },
    { title: "Motion", videoUrl: "https://www.youtube.com/embed/Kvy2ua1_Pxw" },
  ],
  "10": [
    { title: "Reflection", videoUrl: "https://www.youtube.com/embed/_5s0nqI01Iw" },
    { title: "Power", videoUrl: "https://www.youtube.com/embed/TVl6ZUMowZo" },
    { title: "Carbon", videoUrl: "https://www.youtube.com/embed/DSeW7L4pF9s" },
  ],
  "11": [
    { title: "Quantities", videoUrl: "https://www.youtube.com/embed/htoiXGYtdlw" },
    { title: "Energy and Power", videoUrl: "https://www.youtube.com/embed/nziwZIc8U4A" },
    { title: "Isomerism", videoUrl: "https://www.youtube.com/embed/PxY9kMhMcwI" },
  ],
  "12": [
    { title: "Types of Matrix", videoUrl: "https://www.youtube.com/embed/sELU7m5J0RE" },
    { title: "Laws of Motion", videoUrl: "https://www.youtube.com/embed/oWHEcE_hvfk" },
    { title: "Haloalkanes and Haloalkenes", videoUrl: "https://www.youtube.com/embed/CV4Q6tl608w" },
  ],
}

export default function LearningLectures() {
  const searchParams = useSearchParams()
  const selectedClass = searchParams.get("class") ?? "1"
  const lectures = lecturesByClass[selectedClass]

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold text-center">Class {selectedClass} Lectures</h1>

      {!lectures ? (
        <p className="text-center mt-4">No lectures available for this class.</p>
      ) : (
        lectures.map((lecture, i) => (
          <div key={i} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">{lecture.title}</h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={lecture.videoUrl}
                title={lecture.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))
      )}
    </div>
  )
}