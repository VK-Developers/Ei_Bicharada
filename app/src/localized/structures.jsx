// export const menuTopics = [
//   'Resgate',
//   'Denúncias',
//   'Animais Perdidos',
//   'Adoção',
//   'Doação',
//   'Lar Temporario',
//   'Divulgação',
//   'Noticias | Eventos',
//   'Nossos Produtos',
//   'Prestação de Contas'
// ]

export const menuTopics = [
  'Adoção',
  'Doação',
  'Animais Perdidos',
  'Resgate',
  'Denúncias',
  'Lar Temporário',
  'Nossos Produtos',
  'Noticias | Eventos',
  'Prestação de Contas',
  
  'Apoiadores',
]


export const ResgateDenuncia = [
  {title: 'Animal', maxLength: 15, type: 'default'},
  {title: 'Esta andando', options: ['sim', 'não']},
  {title: 'Ocorrido', maxLength: 50, type: 'default'},
  {title: 'Horário', maxLength: 5, type: 'numeric'},
  {title: 'Endereço', maxLength: 25, type: 'default'},
  {title: 'Cidade', maxLength: 15, type: 'default'},
]

export const events = [
  {title: 'Descrição', maxLength: 50, type: 'default'},
  {title: 'Endereço', maxLength: 20, type: 'default'},
  {title: 'Bairro', maxLength: 15, type: 'default'},
  {title: 'Cidade', maxLength: 8, type: 'default'},
  {title: 'Data', maxLength: 8, type: 'numeric'},
  {title: 'Horário', maxLength: 5, type: 'numeric'},
]
