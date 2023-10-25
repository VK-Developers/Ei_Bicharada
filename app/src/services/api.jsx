import axios from 'axios';

const server = {
  android: 'http://192.168.0.51:3001',
  emulator: 'http://10.0.2.2:3001',
  api: 'http://193.203.183.47:3001'
}

const api = axios.create({
  baseURL: server.android,
});

export default api;