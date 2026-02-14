import axios from "axios";

//const API_KEY = "a8ecbd3a35794c988bd67de57ca940a4";

const spoonacular = axios.create({
  baseURL: "https://api.spoonacular.com/",
  timeout: 10000,
  headers:{
    "Content-Type": "application/json",
  }
});

spoonacular.interceptors.request.use((config) => {
  const API_KEY= "a8ecbd3a35794c988bd67de57ca940a4";
  config.params = {
    ...config.params,
    apiKey: API_KEY,
  };
  return config;
});

export default spoonacular;



