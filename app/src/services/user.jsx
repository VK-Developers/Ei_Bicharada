import api from "./api";
import handleRequestError from "../hooks/handleRequestError";

const URL = '/users';

const submitObj = (param) => ({
    name: param.nome.trim(),
    email: (param.email.toLowerCase()).trim(),
    phone: param.telefone,
    city: param.cidade.trim(),
    cep: param.cep.trim(),
    password: param.senha,
    region: param.region.trim()
});

export const createUser = async (obj) => {
    const data = submitObj(obj);
    
    try {
        const request = await api.post(URL, data);
        return request.status
    } catch (error) {
        const errorResponse = handleRequestError(error);
        return errorResponse;
    }
}

export const getAll = async (token) => {
    try {
        const {data} = await api.get(URL, {
            headers: { 'Authorization': token }
        });
        return data
    } catch (error) {
        const errorResponse = handleRequestError(error);
        return errorResponse;
    }
}

export const update = async (id, data, token) => {
    
    const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_chave, valor]) => valor !== "")
    );

    try {
        const request = await api.put(`${URL}/${id}`, filteredData, {
            headers: { 'Authorization': token }
        })
        return request;
    } catch (error) {
        const errorResponse = handleRequestError(error);
        return errorResponse;
    }
}
