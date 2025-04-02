import React from "react";
import Card from "./Card.jsx";  // Default import for Card
import { ChevronLeft, ChevronRight } from "lucide-react";

const exercises = [
  {
    image: "/placeholder.svg?height=200&width=300",
    name: "Dumbbell Goblet Squat",
    reps: "3 x 10",
    category: "Glutes",
    level: "Novice",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    name: "Bodyweight Knee Push Ups",
    reps: "3 x 10",
    category: "Chest",
    level: "Novice",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    name: "Band Pull Apart",
    reps: "4 x 15",
    category: "Shoulders",
    level: "Novice",
  },
];

function ExerciseList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-blue-900 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">4 Exercises in this Workout</h2>
        <span className="text-sm">Showing 1 to 3 of 4</span>
      </div>

      <div className="relative">
        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
          <ChevronLeft className="h-6 w-6 text-blue-900" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
          <ChevronRight className="h-6 w-6 text-blue-900" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {exercises.map((exercise, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={exercise.image || "/placeholder.svg"}
                alt={exercise.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="text-sm text-gray-500">{exercise.reps}</div>
                <h3 className="font-semibold">{exercise.name}</h3>
                <div className="text-sm text-gray-500">
                  {exercise.category}
                  <br />
                  {exercise.level}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseList;
