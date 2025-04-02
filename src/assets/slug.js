import axios from 'axios'; // Import axios

const BASE_URL = "https://musclewiki.com/newapi/workout/originals/workouts/";

// Define the function that processes fetched data
function processFetchedData(data) {
    // For now, just log the data or process it as needed
    console.log("Processing fetched data:", data);
}

// Define the function that fetches workout data
async function fetchWorkoutData(slug) {
    // Construct the full URL with the slug as a query parameter
    const url = `${BASE_URL}?slug=${slug}`;

    try {
        const response = await axios.get(url); // Make the GET request using axios

        // Handle the response
        console.log("Fetched Workout Data:", response.data); // Handle success

        // Send the fetched data to another function for further processing
        processFetchedData(response.data); // Call the function for further processing
    } catch (error) {
        console.error("Error fetching workout data:", error); // Handle error
    }
}

// Example usage
fetchWorkoutData("full-body-bodybuilding-workout-day-one");

export { fetchWorkoutData }; // Export the function for use in other modules
