import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://back.aisha.group",
  timeout: 10000,
});

export default apiClient;
