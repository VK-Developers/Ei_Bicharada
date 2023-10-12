import axios from 'axios';

import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const postLogin = async (obj) => {
  try {
    const { data } = await api.post('/login', obj);

    if (!data.token) return { token: false };

    return { token: data.token }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const postUser = async (obj) => {
  const format = {
    name: obj.nome,
    email: obj.email,
    phone: obj.telefone,
    city: obj.cidade,
    cep: obj.cep,
    password: obj.senha,
    accepted: false
  }
  try {
    // const result = await api.post('/users/', {});
    const result = await axios.post('193.203.183.47:3001/users', format);
    console.log(result)

    return
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
}