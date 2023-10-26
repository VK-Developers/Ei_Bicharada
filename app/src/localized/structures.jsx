export const menuTopics = [
  'Adoção',
  'Animais Perdidos',
  'Resgate',
  'Denúncias',
  'Lar Temporário',
  'Nossos Produtos',
  'Noticias & Eventos',
  'Contribuição',
  'Prestação de Contas',
  'Apoiadores',
]

export const NewUser = {
  basic: [
    {title: 'Nome', maxLength: 20, type: 'default'},
    {title: 'Email', maxLength: 35, type: 'default'},
    {title: 'Telefone', maxLength: 17, type: 'numeric'},
    {title: 'Cidade', maxLength: 15, type: 'default'},
    {title: 'CEP', maxLength: 9, type: 'numeric'},
  ],
  password: [
    {title: 'Senha', maxLength: 12, type: 'default'},
    {title: 'Novamente', maxLength: 12, type: 'default'},
  ]
}

export const ResgateDenuncia = [
  {title: 'Animal', maxLength: 15, type: 'default'},
  {title: 'Esta andando', options: ['sim', 'não']},
  {title: 'Ocorrido', maxLength: 550, type: 'default'},
  {title: 'Horário', maxLength: 5, type: 'numeric'},
  {title: 'Endereço', maxLength: 25, type: 'default'},
  {title: 'Cidade', maxLength: 15, type: 'default'},
]

export const LarTemporario = [
  {title: 'Nome', maxLength: 15, type: 'default'},
  {title: 'Telefone', maxLength: 17, type: 'numeric'},
  {title: 'Cidade', maxLength: 15, type: 'default'},
]

export const newAnimal = [
  {title: 'Animal', placeholder: '', type: 'default'},
  {title: 'Castrado', placeholder: ['Sim', 'Não'], type: 'select'},
  {title: 'Sexo', placeholder: ['Macho', 'Fêmea'], type: 'select'},
  {title: 'Nome', placeholder: 'nome do pet', type: 'default'},
  {title: 'Descrição', placeholder: 'nos fale sobre o pet...', type: 'default'},
]