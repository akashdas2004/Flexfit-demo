import fetch from 'node-fetch'; // Import node-fetch

const BASE_URL = "https://musclewiki.com/newapi/workout/originals/workouts/";

// Define the function that fetches workout data
async function fetchWorkoutData(slug) {
    // Construct the full URL with the slug as a query parameter
    const url = `${BASE_URL}?slug=${slug}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log("Fetched Workout Data:", JSON.stringify(data)); // Handle success

        // Send the fetched data to another file/module for further processing
        processFetchedData(data); // Call a function for further processing
    } catch (error) {
        console.error("Error fetching workout data:", error); // Handle error
    }
}

// Example usage
fetchWorkoutData("full-body-bodybuilding-workout-day-one");

export { fetchWorkoutData }; // Export the function for use in other modules
