import Button from "./Button.jsx"; // You can create a Button component
import Card from "./Card.jsx"; // You can create a Card component
import { ChevronLeft, ChevronRight } from "lucide-react"; // Install lucide-react for icons

function WorkoutHero() {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
          <ChevronLeft className="h-6 w-6 text-blue-900" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
          <ChevronRight className="h-6 w-6 text-blue-900" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative h-[300px]">
            <img
              src="https://media.musclewiki.com/media/uploads/full-body-beginner-day-1.jpeg"
              alt="Workout equipment"
              className="object-cover rounded-lg h-full w-full z-0"  // Ensure image is behind the button
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">Full Body Novice Bodybuilding - Day 1</h2>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white w-fit z-10">START WORKOUT</Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-4">
          <div className="h-2 w-2 rounded-full bg-blue-900"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </Card>
  );
}

export default WorkoutHero;
