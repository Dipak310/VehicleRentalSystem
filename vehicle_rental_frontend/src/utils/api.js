// utils/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api', // Your backend API URL
  timeout: 10000, // Set the timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = instance; // Export the instance directly

