const handleRequestError = (error) => {
    const {response, request, message} = error;

    if (response) return response.data.msg
    if (request) return request.msg

        // return [
        //     'Erro ao configurar a requisição:',
        //     // message,
        // ]
    
}

export default handleRequestError;