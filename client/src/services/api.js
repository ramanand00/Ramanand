import axios from "axios";

const api = axios.create({
  baseURL: "https://ramanand.onrender.com/api",
  withCredentials: true, // for cookies/sessions if needed
});

export default api;
