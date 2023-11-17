export default {
  appTitle: 'Hey Pet!',
  login: ['Email', 'digite seu email'],
  password: ['Senha', 'digite sua senha'],
  signIn: 'Entrar',
  passwordForgot: 'Esqueci minha senha',
  signUp: 'Criar Conta',
  return: 'Voltar',
  name: 'Nome',
  sendForm: "Enviar Formulário",
  sendFormSucess: "Solicitação enviada com sucesso!!",
  ok: "OK",
  solicitationBtn: "Ver Solicitações",
  donateTitle: 'Contribua você também!',
  donateBtn: 'Copiar Chave PIX!',
  rifaPlaceHolder: 'Em Breve Novo Evento',
  footer: {
    title: "ATESP",
    subTitle: ['Associação dos Técnicos em', 'Edificações Auxiliares e Afins', 'do Estado de São Paulo']
  },
  newPet: {
    adoption: 'adicionar um pet para doação',
    lost: 'adicionar um pet',
  },
  newUser: {
    basic: ['Informações Básicas', 'CONTINUAR...'],
    city: ['Região de Interesse', 'CONFIRMAR'],
    password: ['Criar Senha', 'CRIAR CONTA']
  },
  modal: {
    resgate: ['Resgate registrado/adicionado \ncom sucesso', 'fechar'],
    denuncia: ['Denúncia registrada com \nsucesso', 'continuar'],
    
    larTemporario01: [
      'Seus dados são confidenciais, sendo a responsabilidade pela preservação e sigilo da ATESP.\n\nAqui, você pode escolher o tipo de animal que deseja receber em sua casa por um período determinado.',
      'entendido'
    ],
    larTemporario02: ['Solicitação de de cadastro de lar temporário\n enviada com sucesso.', 'confirmar'],
  },
  donateAlert: (pix) => `Chave PIX Copiada\n\n CNPJ: ${pix}`,
  rifaWpp: (name, number, entrance) => `*Comprovante pagamento*\n\nRifa: ${name}\nNúmero: ${number}\nValor: ${entrance}`,
  
  server: "http://193.203.183.47:3001/",
  https: "https://atespets.com.br/",
};