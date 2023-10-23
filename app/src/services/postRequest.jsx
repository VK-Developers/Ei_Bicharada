import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

export const postLogin = async ({email, password}) => {
  const format = {
    email: (email.toLowerCase()).trim(),
    password
  }

  try {
    const { data } = await api.post('/login', format);

    if (!data.token) return { token: false };

    return { token: data.token }
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};

export const postUser = async (obj) => {
  console.log(obj.email.replace(' ', ''), '|')
  const format = {
    name: obj.nome.trim(),
    email: (obj.email.toLowerCase()).trim(),
    phone: obj.telefone,
    city: obj.cidade.trim(),
    cep: obj.cep.trim(),
    password: obj.senha,
    region: obj.region.trim()
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
    animal: obj.animal.trim(),
    name: obj.nome.trim(),
    description: obj.descricao.trim(),
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
    animal: obj.animal.trim(),
    walking: obj.andando,
    description: obj.ocorrido.trim(),
    hour: obj.horario,
    adress: obj.endereco.trim(),
    city: obj.cidade.trim(),
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

export const postHome = async (obj, token) => {
  const send = {
    name: obj.nome.trim(),
    phone: obj.telefone,
    city: obj.cidade,
    type: obj.animal,
    duration: obj.tempo,
  }

  try {
    const request = await api.post('/homes', send, {
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

export const postVictims = async (token) => {
  try {
    const request = await api.post(
      '/victims',
      {},
      {
        headers: { 'Authorization': token }
      }
    );

    return request;
  } catch (error) {
    const errorResponse = handleRequestError(error);
    return errorResponse;
  }
};