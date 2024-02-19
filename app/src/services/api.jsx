import axios from 'axios';

const server = {
  url: {
    // local
    androidPhone: 'https://192.168.0.51:3001',
    android: 'https://10.0.2.2:3001',
    ios: 'https://localhost:3001',
    // Production
    api: 'https://api.vincenzofdg.com.br'
  },
  prefix: "/hey-pet"
}

const api = axios.create({
  baseURL: server.url.api + server.prefix,
});

export default api;