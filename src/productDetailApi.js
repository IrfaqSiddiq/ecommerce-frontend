import axios from 'axios';

const BASE_URL = "http://localhost:3000";

export const fetchProductDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${id}`,{
      headers: {
        'Content-Type': 'application/json', // Specify the content type of the request
      },
      withCredentials: true, // Send cookies with the request
    });
    const jsonData = response.data; // Axios automatically parses JSON responses
    console.log(jsonData, "***********response in json***********");
    return jsonData.product; // Extract and return the `product` object
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code outside the range of 2xx
      console.error("Error status code:", error.response.status);
      if (error.response.status === 401) {
        // Redirect to login page for unauthorized access
        window.location.href = '/login'; // Change this to your login route
      } else {
        console.error("Error message:", error.response.data.message || "An error occurred.");
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", error.message);
    }
    return null; // Return `null` on error
  }
};
