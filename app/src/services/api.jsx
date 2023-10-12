import axios from 'axios';

// const android = 'http://192.168.0.51:3001';
// const emulator = 'http://10.0.2.2:3001';
const hostinger = 'http://193.203.183.47:3001'

const api = axios.create({
  baseURL: hostinger,
});

export default api;