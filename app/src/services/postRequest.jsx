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

export const postNewAnimal = async (obj, where, token) => {
  const url = where === 'adoption' ? '/adoptions' : '/missing-animals';

  console.log(obj)

  const send = {
    animal: obj.animal,
    name: obj.nome,
    description: obj.descricao,
    neutered: obj.castrado,
    sex: obj.sexo,
    picture: obj.picture[0]
  }

  try {
    const request = await api.post(url, send, {
      headers: {
        'Authorization': token
      }
    });

    return request;
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};