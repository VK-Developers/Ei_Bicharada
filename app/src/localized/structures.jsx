export const menuTopics = [
  'Resgate',
  'Denúncias',
  'Animais Perdidos',
  'Adoção',
  'Doação',
  'Eventos',
  'Divulgação',
  'Noticias',
  'Nossos Produtos',
  'Prestação de Contas'
]

export const ResgateDenuncia = [
  {title: 'Animal', maxLength: 15, type: 'default'},
  {title: 'Esta andando', options: ['sim', 'não']},
  {title: 'Ocorrido', maxLength: 50, type: 'default'},
  {title: 'Horário', maxLength: 5, type: 'numeric'},
  {title: 'Endereço', maxLength: 25, type: 'default'},
  {title: 'Bairro', maxLength: 15, type: 'default'},
]

export const events = [
  {title: 'Descrição', maxLength: 50, type: 'default'},
  {title: 'Endereço', maxLength: 20, type: 'default'},
  {title: 'Bairro', maxLength: 15, type: 'default'},
  {title: 'Cidade', maxLength: 8, type: 'default'},
  {title: 'Data', maxLength: 8, type: 'numeric'},
  {title: 'Horário', maxLength: 5, type: 'numeric'},
]

// {"bairro": "Gggggggggg", "cidade": "Gggggggg", "data": "22/08/23", 
// "descricao": "Gggggggggggy", "endereco": "Hhhhhggggg", "horario": "22:22"}