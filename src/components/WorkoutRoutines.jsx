import { useState, useEffect } from "react";
import axios from 'axios';
import RoutineDisplay from "./RoutineDisplay"; // Import the RoutineDisplay component
import Pagination from './Pagination'; // Make sure to use the correct path if the file is in a different directory

// Import constants from GlobalConstants.js
import { gymEquipments, difficultyMap, colorMap, gymEquipmentDictionary } from './assets/GlobalContsant';

export default function WorkoutRoutines() {
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [expanded, setExpanded] = useState(Array(3).fill(false));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 9; // Show 9 items per page

  const url = "https://pfhbdgndwphxqlzshzvu.supabase.co/storage/v1/object/public/Exercise%20Data//routineWorkout.json";

  const fetchInfo = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  // Get the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Go to previous page
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Go to next page
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(data.length / itemsPerPage)));

  console.log(data);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Loading Screen */}
      {loading && (
        <div className="loader-overlay">
          <div className="loader">
            <img
              src="https://pfhbdgndwphxqlzshzvu.supabase.co/storage/v1/object/public/Exercise%20Data//flexfit_logo.png"
              alt="Flexfit Logo"
            />
          </div>
        </div>
      )}

      {/* Filter & Sorting Bar */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <select
            className="border px-3 py-2 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <div className="flex items-center gap-4">
            <select
              className="border px-3 py-2 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Category</option>
              <option value="strength">Strength</option>
              <option value="cardio">Cardio</option>
            </select>
            <select
              className="border px-3 py-2 rounded-md"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="novice">Novice</option>
              <option value="intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Routines Display */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData?.map((routine, index) => (
            <RoutineDisplay
              key={index}
              routine={routine}
              index={index}
              expanded={expanded}
              toggleExpand={toggleExpand}
              gymEquipmentDictionary={gymEquipmentDictionary}
              gymEquipments={gymEquipments}
              difficultyMap={difficultyMap}
              colorMap={colorMap}
            />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
}
