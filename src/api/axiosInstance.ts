import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const defaultHeaders = {};
const baseURL = API_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

axiosInstance.interceptors.request.use(async (config) => config);
