import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    // withCredentials: true, // Enable cookies for cross-origin requests,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
})

export default instance;