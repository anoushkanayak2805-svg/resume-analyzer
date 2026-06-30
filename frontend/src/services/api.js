import axios from "axios";

const api = axios.create({
  baseURL: "https://resume-analyzer-57w9.onrender.com",
});

export default api;