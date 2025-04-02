/* eslint-disable */
import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';

const RoutineDisplay = ({
  routine,
  index,
  expanded,
  toggleExpand,
  gymEquipmentDictionary,
  gymEquipments,
  difficultyMap,
  colorMap
}) => {
  return (
    <div key={index} className="rounded-lg overflow-hidden bg-white shadow-md">
      <div className={`bg-${colorMap[routine.difficulty]}-500 p-4 flex items-center`}>
        <h3 className="text-white font-medium">{routine.name}</h3>
      </div>
      <div className="relative group">
      <Link to="/WorkoutPage" state={{ routine }}>
    <img
      src={routine.src_image || "/placeholder.svg"}
      alt={routine.name}
      className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
    />
  </Link>
</div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
          <h4 className="font-medium">Equipment:</h4>
          {/* Display gym equipment icons */}
          <div className="flex gap-2">
            {routine?.equipment_list?.map((item, i) => {
              const equipmentName = gymEquipmentDictionary[item]; // Get equipment name from dictionary
              const equipmentImage = gymEquipments[equipmentName]; // Get equipment SVG URL from gymEquipments

              return (
                <div key={i} className="relative group cursor-pointer">
                  <img
                    src={equipmentImage}
                    alt={equipmentName}
                    className="h-6 w-6 text-gray-500 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                    {equipmentName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-gray-600">{routine.workouts.length} Workouts in this Routine</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">Click to view workout details</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => toggleExpand(index)}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <MdOutlineExpandMore className={`h-5 w-5 transition-transform ${expanded[index] ? "rotate-180" : "rotate-0"}`} />
          </button>
        </div>
        {expanded[index] && (
          <div className="mt-4 bg-gray-100 p-3 rounded-md text-sm text-gray-700">
            {routine.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineDisplay;
