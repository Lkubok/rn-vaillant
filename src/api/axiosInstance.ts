import axios from "axios";
import { config } from "src/config/config";

const defaultHeaders = {};
const baseURL = config.API_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

axiosInstance.interceptors.request.use(async (config) => config);
