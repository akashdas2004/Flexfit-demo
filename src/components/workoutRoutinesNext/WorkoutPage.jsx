import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from 'react-router-dom';

// Card Component
function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white shadow-lg rounded-md ${className}`} {...props}>
      {children}
    </div>
  );
}

// Button Component
function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
}

// Main WorkoutPage Component
function WorkoutPage() {
  const location = useLocation();
  const { routine } = location.state || {}; // Access the passed routine data

  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);

  const goToPreviousWorkout = () => {
    setCurrentWorkoutIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : routine?.workouts.length - 1
    );
  };

  const goToNextWorkout = () => {
    setCurrentWorkoutIndex((prevIndex) =>
      prevIndex < routine?.workouts.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentWorkout = routine?.workouts[currentWorkoutIndex];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-black text-white p-4">
        <h1 className="text-xl md:text-2xl font-bold">{routine?.name || "Workout Routine"}</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        <p className="text-gray-600">
          The workouts in this routine are short and simple. Perfect for the person just starting out.
        </p>

        {/* Workout Navigation Bar */}
        <div className="bg-gradient-to-r from-red-600 to-black text-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold">
            Workout {currentWorkoutIndex + 1} of {routine?.workouts.length}
          </h2>
        </div>

        {/* Workout Hero */}
        <div className="space-y-4 mt-6">
          {currentWorkout && (
            <Card className="overflow-hidden">
              <div className="relative">
                <button
                  onClick={goToPreviousWorkout}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-900" />
                </button>
                <button
                  onClick={goToNextWorkout}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronRight className="h-6 w-6 text-blue-900" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative h-[300px]">
                    <img
                      src={currentWorkout?.src_image || "/placeholder.svg"}
                      alt={currentWorkout?.name}
                      className="object-cover rounded-lg h-full w-full z-0"
                    />
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-xl font-semibold text-blue-900">{currentWorkout?.name}</h2>
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white w-fit z-10">START WORKOUT</Button>
                  </div>
                </div>

                {/* Workout Navigation Dots */}
                <div className="flex justify-center gap-2 pb-4">
                  {routine?.workouts?.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === currentWorkoutIndex ? "bg-blue-900" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-600 to-black text-white p-4 rounded-lg">
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
      </main>
    </div>
  );
}

export default WorkoutPage;