const handleRequestError = (error) => {
    const {response, request, message} = error;

    if (response) {
        return [
            'Erro de resposta da API:',
            response.status,
            response.data,
        ]
    } else if (request) {
        return [
            'Erro de requisição:',
            request,
        ]
    } else {
        return [
            'Erro ao configurar a requisição:',
            message,
        ]
    }
}

export default handleRequestError;