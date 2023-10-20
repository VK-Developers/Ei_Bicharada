export const menuTopics = [
  'Adoção',
  'Animais Perdidos',
  'Resgate',
  'Denúncias',
  'Lar Temporário',
  'Nossos Produtos',
  'Noticias & Eventos',
  'Prestação de Contas',
  'Contribuição',
  'Apoiadores',
]

export const NewUser = {
  basic: [
    {title: 'Nome', maxLength: 15, type: 'default'},
    {title: 'Email', maxLength: 35, type: 'default'},
    {title: 'Telefone', maxLength: 17, type: 'numeric'},
    {title: 'Cidade', maxLength: 15, type: 'default'},
    {title: 'CEP', maxLength: 9, type: 'numeric'},
  ],
  password: [
    {title: 'Senha', maxLength: 9, type: 'default'},
    {title: 'Novamente', maxLength: 9, type: 'default'},
  ]
}

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

export const newAnimal = [
  {title: 'Animal', placeholder: 'tipo de animal', type: 'default'},
  {title: 'Castrado', placeholder: ['Sim', 'Não'], type: 'select'},
  {title: 'Sexo', placeholder: ['Macho', 'Fêmea'], type: 'select'},
  {title: 'Nome', placeholder: 'nome do pet', type: 'default'},
  {title: 'Descrição', placeholder: 'nos fale sobre o pet...', type: 'default'},
]

export const regions = [
  ['Americana', 'Mogi das cruzes', 'Itaquaquecetuba', 'Guararema Suzano', 'Biritiba Mirim', 'Salesópolis', 'Guarulhos', 'Arujá', 'Santa Isabel', 'Ferraz de Vasconcelos' ,'Poá'],
  ['Rio Claro', 'Cordeirópolis Limeira', 'Leme', 'Araras', 'Mogi Guaçu', 'Mogi Mirim', 'Conchal']
]