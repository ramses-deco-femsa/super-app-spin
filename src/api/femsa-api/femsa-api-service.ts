import axios from 'axios';

// NOTE: this should be an env var
const API_URL = 'http://localhost:3001';

export const femsaAPI = axios.create({
  baseURL: API_URL,
});
