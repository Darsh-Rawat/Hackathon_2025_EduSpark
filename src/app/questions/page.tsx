"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const questionsByClass: Record<string, { question: string; options: string[]; answer: string }[]> = {
  "1": [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which animal says 'Meow'?",
      options: ["Dog", "Cow", "Cat", "Lion"],
      answer: "Cat",
    },
    {
      question: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      answer: "Blue",
    },
    {
      question: "Which color is the sky?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Blue",
    },
    {
      question: "What is the first letter of the English alphabet?",
      options: ["B", "A", "C", "D"],
      answer: "B",
    },
    {
      question: "Which fruit is known as the 'King of Fruits'?",
      options: ["Apple", "Mango", "Orange", "Banana"],
      answer: "Mango",
    },
    {
      question: "What is 10 - 4?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
    {
      question: "Which animal has a long trunk?",
      options: ["Elephant", "Giraffe", "Lion", "Horse"],
      answer: "Blue",
    },
    {
      question: "What is the color of a ripe banana?",
      options: ["Green", "Yellow", "Blue", "Red"],
      answer: "Blue",
    },
    {
      question: "How many fingers do we have on one hand?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
  ],
  "2": [
    {
      question: "What is 5 × 2?",
      options: ["10", "12", "15", "8"],
      answer: "10",
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      answer: "Mercury",
    },
    {
      question: "What do plants need to make food?",
      options: ["Water", "Sunlight", "Air", "All of these"],
      answer: "All of these",
    },
    {
      question: "How many legs does a spider have?",
      options: ["6", "8", "10", "4"],
      answer: "8",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
      answer: "New Delhi",
    },
    {
      question: "What is 20 ÷ 4?",
      options: ["4", "5", "6", "8"],
      answer: "5",
    },
    {
      question: "Which organ helps us to smell?",
      options: ["Eyes", "Ears", "Nose", "Tongue"],
      answer: "Nose",
    },
    {
      question: "What is the opposite of 'Big'?",
      options: ["Small", "Tall", "Short", "Thin"],
      answer: "Small",
    },
    {
      question: "Which bird is known for its ability to mimic sounds?",
      options: ["Parrot", "Eagle", "Crow", "Owl"],
      answer: "Parrot",
    },
    {
      question: "How many months are there in a year?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
  ],
  "3": [
    {
      question: "What is 15 + 25?",
      options: ["30", "20", "40", "45"],
      answer: "40",
    },
    {
      question: "Which part of a plant makes food?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: "Leaf",
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Which animal is known as the 'Ship of the Desert'?",
      options: ["Horse", "Camel", "Elephant", "Tiger"],
      answer: "Camel",
    },
    {
      question: "What is 9 × 9?",
      options: ["72", "81", "90", "99"],
      answer: "81",
    },
    {
      question: "Which gas do humans breathe in?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
      answer: "Oxygen",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
      answer: "New Delhi",
    },
    {
      question: "How many zeros are in 1000?",
      options: ["1", "2", "3", "4"],
      answer: "3",
    },
    {
      question: "Which animal gives us wool?",
      options: ["Cow", "Sheep", "Goat", "Dog"],
      answer: "Sheep",
    },
    {
      question: "How many sides does a rectangle have?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },

  ],
  "4": [
    {
      question: "What is 50 ÷ 5?",
      options: ["5", "10", "15", "20"],
      answer: "10",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "What is the opposite of 'Fast'?",
      options: ["Slow", "Small", "High", "Near"],
      answer: "Slow",
    },
    {
      question: "Which gas do plants need for photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon dioxide",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answer: "Pacific",
    },
    {
      question: "What is 12 × 8?",
      options: ["96", "86", "78", "102"],
      answer: "96",
    },
    {
      question: "Who wrote 'The Jungle Book'?",
      options: ["Rudyard Kipling", "William Shakespeare", "Roald Dahl", "Mark Twain"],
      answer: "Rudyard Kipling",
    },
    {
      question: "Which is the fastest land animal?",
      options: ["Lion", "Cheetah", "Tiger", "Kangaroo"],
      answer: "Cheetah",
    },
    {
      question: "How many hours are there in one day?",
      options: ["12", "24", "48", "60"],
      answer: "24",
    },
    {
      question: "What is the capital of the USA?",
      options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
      answer: "Washington, D.C.",
    },
  ],
  "5": [
    {
      question: "What is 144 ÷ 12?",
      options: ["10", "12", "14", "16"],
      answer: "12",
    },
    {
      question: "Which planet is the largest in the solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who discovered gravity?",
      options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Thomas Edison"],
      answer: "Isaac Newton",
    },
    {
      question: "How many states are there in India?",
      options: ["25", "28", "29", "30"],
      answer: "28",
    },
    {
      question: "What is the SI unit of force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Newton",
    },
    {
      question: "What is 75% of 200?",
      options: ["100", "125", "150", "175"],
      answer: "150",
    },
    {
      question: "Who was the first Prime Minister of India?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Narendra Modi", "Rahul Gandhi"],
      answer: "Jawaharlal Nehru",
    },
    {
      question: "Which gas is the most abundant in Earth''s atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "What is the boiling point of water??",
      options: ["50°C", "75°C", "100°C", "150°C"],
      answer: "100°C",
    },
    {
      question: "Who was known as the 'Iron Man of India'?",
      options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh"],
      answer: "Sardar Vallabhbhai Patel",
    },
  ],
  "6": [
    {
      question: "What is the smallest prime number?",
      options: ["2", "3", "5", "7"],
      answer: "2",
    },
    {
      question: "Which gas do plants release during photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      question: "What is the capital of France?",
      options: ["Rome", "London", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who wrote the famous book Ramayana?",
      options: ["Valmiki", "Tulsidas", "Kalidas", "Ved Vyas"],
      answer: "Valmiki",
    },
    {
      question: "What is 35 × 6?",
      options: ["180", "210", "215", "220"],
      answer: "210",
    },
    {
      question: "Which planet is known as the 'Evening Star'?",
      options: ["Mars", "Venus", "Mercury", "Jupiter"],
      answer: "Venus",
    },
    {
      question: "What is the process of water changing into vapor called?",
      options: ["Condensation", "Evaporation", "Precipitation", "Freezing"],
      answer: "Evaporation",
    },
    {
      question: "Who was the first President of India?",
      options: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "B.R. Ambedkar"],
      answer: "Rajendra Prasad",
    },
    {
      question: "What is 25% of 200?",
      options: ["25", "50", "75", "100"],
      answer: "50",
    },
    {
      question: "Which is the longest river in India?",
      options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
      answer: "Ganga",
    },
  ],
  "7": [
    {
      question: "What is 12³ (12 raised to the power of 3)?",
      options: ["144", "1728", "1968", "2024"],
      answer: "1728",
    },
    {
      question: "Which gas is essential for human respiration?",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
      answer: "Oxygen",
    },
    {
      question: "Who discovered America?",
      options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
      answer: "Christopher Columbus",
    },
    {
      question: "What is the hardest natural substance?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond",
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["200", "206", "210", "215"],
      answer: "206",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
      answer: "Tokyo",
    },
    {
      question: "What is the SI unit of speed?",
      options: ["Meter", "Meter per second", "Kilogram", "Newton"],
      answer: "Meter per second",
    },
    {
      question: "What is the chemical formula of water?",
      options: ["CO₂", "O₂", "H₂O", "H₂O₂"],
      answer: "Blue",
    },
    {
      question: "Who wrote Panchatantra?",
      options: ["Valmiki", "Vishnu Sharma", "Kalidas", "Chanakya"],
      answer: "Vishnu Sharma",
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Dollar", "Euro", "Pound Sterling", "Yen"],
      answer: "Pound Sterling",
    },
  ],
  "8": [
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "Who was the first Mughal Emperor of India?",
      options: ["Akbar", "Babar", "Aurangzeb", "Humayun"],
      answer: "Babar",
    },
    {
      question: "What is Newton’s First Law of Motion also called?",
      options: ["Law of Acceleration", "Law of Inertia", "Law of Force", "Law of Momentum"],
      answer: "Law of Inertia",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      question: "Which is the longest bone in the human body?",
      options: ["Tibia", "Humerus", "Femur", "Radius"],
      answer: "Femur",
    },
    {
      question: "Which battle marked the beginning of British rule in India?",
      options: ["Battle of Panipat", "Battle of Plassey", "Battle of Buxar", "Battle of Haldighati"],
      answer: "Nose",
    },
    {
      question: "What is 45% of 500?",
      options: ["200", "225", "250", "275"],
      answer: "225",
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Thar", "Kalahari", "Sahara", "Gobi"],
      answer: "Sahara",
    },
    {
      question: "What is the chemical name of common salt?",
      options: ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Chloride", "Potassium Chloride"],
      answer: "Sodium Chloride",
    },
  ],
  "9": [
    {
      question: "What is the value of (a + b)²?",
      options: ["a² + b²", "a² + b² + 2ab", "a² - b² + 2ab", "a² - b²"],
      answer: "a² + b² + 2ab",
    },
    {
      question: "Which organ produces bile in the human body?",
      options: ["Stomach", "Liver", "Kidney", "Pancreas"],
      answer: "Liver",
    },
    {
      question: "Who was the first Governor-General of India?",
      options: ["Warren Hastings", "Lord Mountbatten", "Lord Canning", "Robert Clive"],
      answer: "Warren Hastings",
    },
    {
      question: "What is the SI unit of work?",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      answer: "Joule",
    },
    {
      question: "What is the chemical formula of methane?",
      options: ["CO₂", "CH₄", "NH₃", "H₂O"],
      answer: "CH₄",
    },
    {
      question: "The Tropic of Cancer passes through which of the following states?",
      options: ["Kerala", "Rajasthan", "Nitrogen", "Helium"],
      answer: "Oxygen",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Maharashtra", "Odisha"],
      answer: "New Delhi",
    },
    {
      question: "What is the Pythagoras theorem?",
      options: ["a² + b² = c²", "a² - b² = c²", "a² + b² = 2c²", "a² = b² + c²"],
      answer: "a² + b² = c²",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["4", "6", "8", "10"],
      answer: "6",
    },

  ],
  "10": [
    {
      question: "What is the quadratic formula?",
      options: ["x = (-b ± √(b² - 4ac)) / 2a", "x = (-b ± √(b² + 4ac)) / 2a", "x = (b ± √(b² - 4ac)) / 2a", "x = (-b ± √(b² - 2ac)) / 2a"],
      answer: "x = (-b ± √(b² - 4ac)) / 2a",
    },
    {
      question: "Which blood group is known as the universal donor?",
      options: ["A", "B", "AB", "O"],
      answer: "O",
    },
    {
      question: "Who was the first Indian to win a Nobel Prize?",
      options: ["C.V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"],
      answer: "Rabindranath Tagore",
    },
    {
      question: "What is the largest gland in the human body?",
      options: ["Kidney", "Liver", "Pancreas", "Lungs"],
      answer: "Liver",
    },
    {
      question: "Which two rivers form the largest delta in the world?",
      options: ["Ganga and Yamuna", "Ganga and Brahmaputra", "Krishna and Godavari", "Indus and Jhelum"],
      answer: "Ganga and Brahmaputra",
    },
    {
      question: "Who discovered the electron?",
      options: ["J.J. Thomson", "James Chadwick", "Niels Bohr", "Rutherford"],
      answer: "J.J. Thomson",
    },
    {
      question: "What is the chemical formula of sulfuric acid?",
      options: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      answer: "H₂SO₄",
    },
    {
      question: "The Battle of Buxar was fought in which year?",
      options: ["1757", "1764", "1775", "1780"],
      answer: "1764",
    },
    {
      question: "The currency of China is ?",
      options: ["Yen", "Yuan", "Rupee", "Ringgit"],
      answer: "Yuan",
    },
    {
      question: "Which layer of the Earth is responsible for the movement of tectonic plates?",
      options: ["Crust", "Mantle", "Core", "Lithosphere"],
      answer: "Mantle",
    },
  ],
  "11": [
    {
      question: "What is the SI unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: "Ampere",
    },
    {
      question: "What is Avogadro’s number?",
      options: ["6.022 × 10²²", "6.022 × 10²³", "6.022 × 10²⁴", "6.022 × 10²⁵"],
      answer: "6.022 × 10²³",
    },
    {
      question: "If sin θ = 1/2, what is the value of θ?",
      options: ["15°", "30°", "45°", "60°"],
      answer: "30°",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      answer: "Mitochondria",
    },
    {
      question: "Who proposed the Theory of Relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein",
    },
    {
      question: "The pH of pure water is?",
      options: ["5", "7", "9", "11"],
      answer: "7",
    },
    {
      question: "What is the sum of all interior angles of a pentagon?",
      options: ["360°", "540°", "720°", "900°"],
      answer: "540°",
    },
    {
      question: "Which part of the brain controls balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
      answer: "Cerebellum",
    },
    {
      question: "Which of the following is an alkali metal?",
      options: ["Calcium", "Sodium", "Iron", "Copper"],
      answer: "Sodium",
    },
    {
      question: "What is the acceleration due to gravity on Earth?",
      options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
      answer: "9.8 m/s²",
    },
  ],
  "12": [
    {
      question: "What is the SI unit of power?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      answer: "Watt",
    },
    {
      question: "What is Faraday’s First Law of Electrolysis?",
      options: ["The amount of substance deposited is proportional to charge.", "The amount of substance is inversely proportional to charge.", "The substance does not depend on charge.", "The substance only depends on temperature."],
      answer: "The amount of substance deposited is proportional to charge.",
    },
    {
      question: "The derivative of sin x is?",
      options: ["cos x", "- cos x", "- sin x", "tan x"],
      answer: "cos x",
    },
    {
      question: "What is the primary function of hemoglobin?",
      options: ["Carry oxygen", "Digest food", "Fight infections", "Regulate temperature"],
      answer: "Carry oxygen",
    },
    {
      question: "What is the unit of magnetic flux?",
      options: ["Tesla", "Weber", "Henry", "Gauss"],
      answer: "Weber",
    },
    {
      question: "Which gas is used in the Haber process to manufacture ammonia?",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
      answer: "Nitrogen",
    },
    {
      question: "What is the Laplace transform of 1?",
      options: ["1/s", "s", "1/s²", "s²"],
      answer: "1/s",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Skin", "Liver", "Brain"],
      answer: "Skin",
    },
    {
      question: "Who proposed the modern periodic table?",
      options: ["Mendeleev", "Moseley", "Dalton", "Bohr"],
      answer: "Moseley",
    },
    {
      question: "Which vitamin is produced when the skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D",
    },
  ],
  // Add more classes here...
}

export default function QuizQuestionsPage() {
  const searchParams = useSearchParams()
  const selectedClass = searchParams.get("class") ?? "1"
  const questions = questionsByClass[selectedClass]

  const [answers, setAnswers] = useState<{ [index: number]: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const score = questions?.reduce((acc, question, index) => {
    if (answers[index] === question.answer) return acc + 1
    return acc
  }, 0)


  const handleOptionChange = (index: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [index]: value }))
  }

  const handleSubmit = async () => {
    if (submitted) return
    setSubmitted(true)
    setLoading(true)

  try {
    const res = await fetch("/api/submit-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1, // Replace this with actual logged-in user's ID
        score,
        selectedClass: parseInt(selectedClass),
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Unknown error")
    }

    setMessage("Score submitted successfully! 🎉")
  } catch (err: any) {
    console.error("Submit error:", err)
    setMessage("Failed to submit score. Please try again.")
  } finally {
    setLoading(false)
  }
}


if (!questions) {
  return <p className="text-center mt-10">No questions found for this class.</p>
}

return (
  <div className="max-w-3xl mx-auto mt-10 space-y-6">
    <h1 className="text-2xl font-bold text-center">Class {selectedClass} Quiz</h1>

    {questions.map((q, index) => (
      <Card key={index}>
        <CardHeader>
          <CardTitle>Q{index + 1}: {q.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answers[index]}
            onValueChange={(val) => handleOptionChange(index, val)}
          >
            {q.options.map((option, i) => (
              <div key={i} className="flex items-center space-x-2 py-1">
                <RadioGroupItem value={option} id={`${index}-${i}`} />
                <Label htmlFor={`${index}-${i}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {submitted && (
            <p className={`mt-2 text-sm font-medium ${answers[index] === q.answer ? "text-green-600" : "text-red-600"}`}>
              {answers[index] === q.answer ? "Correct" : `Wrong. Correct answer: ${q.answer}`}
            </p>
          )}
        </CardContent>
      </Card>
    ))}

    {!submitted ? (
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Submit Quiz</Button>
      </div>
    ) : (
      <div className="text-center">
        <p className="text-lg font-semibold">
          You scored {score} out of {questions.length}
        </p>
      </div>
    )}
  </div>
)
}