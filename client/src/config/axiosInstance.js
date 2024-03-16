import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || "http://localhost:3030/api";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500;

export default axiosInstance;
