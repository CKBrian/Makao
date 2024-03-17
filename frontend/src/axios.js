import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000/v1/";
const navigate = useNavigate();

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      navigate("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
