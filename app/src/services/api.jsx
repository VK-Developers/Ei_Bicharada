import axios from 'axios';

const emulator = 'http://192.168.0.51:3001';
const android = 'http://10.0.2.2:3001';

const api = axios.create({
  baseURL: android || emulator,
});

export default api;