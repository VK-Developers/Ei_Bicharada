import axios from 'axios';

const productName = "Hey Pet"

const { url, prefix} = {
  url: 'https://api.vincenzofdg.com.br',
  prefix: "/main"
}

const api = axios.create({
  baseURL: url + prefix,
});

const checkStatus = async() => {
  try {
    const { data } = await api.get('/products');
    const { online } = data.filter(i => i.name === productName)[0]
    return online
  } catch (error) {
    return [];
  }
};

export default checkStatus;