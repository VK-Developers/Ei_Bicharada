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
    region: obj.region
  }

  try {
    const request = await api.post('/users', format);

    return request.status
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
}