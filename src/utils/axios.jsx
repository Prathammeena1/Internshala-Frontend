import axios from "axios";

// Function to get the token from cookies
const getTokenFromCookies = () => {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];
    return token || '';
};

const instance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true, // Enable cookies for cross-origin requests
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getTokenFromCookies()}`,
    },
})

export default instance;
