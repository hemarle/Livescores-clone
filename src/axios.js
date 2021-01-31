import axios from "axios";

const instance = axios.create({
  baseURL: "https://livescore-api.com/api-client",
});

export default instance;
