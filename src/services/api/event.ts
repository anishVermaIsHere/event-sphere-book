import axiosInstance from "../axios-interceptor";
import AppConfig from "@/config/app.config";

const BASE_URL = `${AppConfig.baseUrl}/api/v1/events`;


const eventAPI = {
  async events() {
    return await axiosInstance.get(BASE_URL);
  },

};

export default eventAPI;