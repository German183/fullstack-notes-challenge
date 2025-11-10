// frontend/src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fullstack-notes-challenge.onrender.com/api/notes', // backend en Render
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
