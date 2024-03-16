import axios from "axios";
const BASE_URL = "http://localhost:3030/api"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500;


export default axiosInstance