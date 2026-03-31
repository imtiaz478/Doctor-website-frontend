import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7030/api", 
});

export default API;