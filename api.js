import axios from "axios";
import Constants from "expo-constants";

// API key is retrieved from environment (expo extra) rather than hard-coded

const spoonacular = axios.create({
  baseURL: "https://api.spoonacular.com/",
  timeout: 10000,
  headers:{
    "Content-Type": "application/json",
  }
});

spoonacular.interceptors.request.use((config) => {
  // read from expo Constants extra which is set from .env
  const API_KEY = Constants.manifest?.extra?.API_KEY;
  if (!API_KEY) {
    console.warn("API_KEY is not defined. Make sure .env is configured and app.json includes it.");
  }
  config.params = {
    ...config.params,
    apiKey: API_KEY,
  };
  return config;
});

export default spoonacular;



