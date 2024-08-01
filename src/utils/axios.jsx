import axios from "axios";

const instance = axios.create({
    baseURL: "https://backendapi-cfng.onrender.com",
    // withCredentials: true, // Enable cookies for cross-origin requests,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
})

export default instance;