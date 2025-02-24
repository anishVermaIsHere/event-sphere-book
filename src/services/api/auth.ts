import axios from "axios";
import axiosInstance from "../axios-interceptor";
import AppConfig from "@/config/app.config";

const BASE_URL = `${AppConfig.baseUrl}/api/v1/auth`;


const authAPI = {
  async login(email: string, password: string) {
    return await axios.post(BASE_URL, { email, password });

  },
  async logout(){
    await axiosInstance.post(`${BASE_URL}/logout`, {});
  }
};

export default authAPI;