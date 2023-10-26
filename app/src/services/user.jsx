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
