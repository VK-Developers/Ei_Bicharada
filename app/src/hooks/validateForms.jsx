const validateForms = (obj, i) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const telefoneRegex = /^\+\d{2} \d{2} \d{5}-\d{4}$/;
    const cepRegex = /^\d{5}-\d{3}$/;

    const andando = obj.andando !== undefined;
    const horario = !!obj.horario;
    const picture = !!obj.picture;
    const animal = !!obj.animal && obj.animal.length >= 3;
    const endereco = !!obj.endereco && obj.endereco.length >= 6;
    const ocorrido = !!obj.ocorrido && obj.ocorrido.length >= 6;
    const descricao = !!obj.descricao && obj.descricao.length >= 3;
    const cidade = !!obj.cidade && obj.cidade.length >= 4;
    const senha = !!obj.senha && obj.senha.length >= 6;
    const nome = !!obj.nome && obj.nome.length >= 2;
    
    const telefone = !!obj.telefone && telefoneRegex.test(obj.telefone);
    const cep = !!obj.cep && cepRegex.test(obj.cep);
    const region = !!obj.region;
    const castrado = obj.castrado !== undefined ;
    const sexo = obj.castrado !== undefined ;

    const tipo = obj.animal !== undefined ;
    const tempo = obj.tempo !== undefined ;


    const email = !!obj.email && emailRegex.test(obj.email.replace(' ', ''));


    const validation = {
        1: andando && horario && picture && animal && cidade && endereco && ocorrido,
        2: nome && telefone && cidade && tipo && tempo,
        3: {
            basic: nome && email && cidade && telefone && cep && region,
            password: senha && (obj.senha === obj.novamente)
        },
        4: animal && castrado && nome && descricao && sexo && picture
    };
    return validation[i];
}

export default validateForms;