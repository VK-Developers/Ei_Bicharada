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


export const postRescueComplains = async (obj, where, token) => {
  const url = where === 'rescue' ? '/rescues' : '/complains';

  const send = {
    animal: obj.animal,
    walking: obj.andando,
    description: obj.ocorrido,
    hour: obj.horario,
    adress: obj.endereco,
    city: obj.cidade,
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