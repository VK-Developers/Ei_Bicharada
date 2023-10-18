import axios from 'axios';
import environment from './environment';

const api = axios.create({
  baseURL: environment.api,
});

export default api;