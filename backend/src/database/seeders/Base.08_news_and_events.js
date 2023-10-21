'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('news_and_events', [
      {
        type: 'noticia',
        title: 'A atividade de proteção animal e os núcleos de controle de zoonoses',
        content: "Os Núcleos de Controle de Zoonoses (NCZ ou CCZ) têm a atribuição principal de proteger a saúde humana e animal de doenças que podem ser veiculadas entre esses dois hospedeiros. Doenças como a raiva, leptospirose, leishmanioses, entre outras, podem circular entre humanos e animais, como cães e gatos, causando sofrimento, perda de vidas e, às vezes prejuízos econômicos.\n Dessa forma, os NCZ têm a responsabilidade de medidas educativas como palestras, orientações técnicas, visitas técnicas, inspeções, além de ações concretas como vacinação, consultas, castrações etc.\n As entidades de proteção animal são instituições que podem ter variadas denominações jurídicas (Associações, Fundações, ONGs, Oscips), a qual discutirá em outras publicações. Sua missão é promover o bem-estar e a proteção dos animais, evitando assim atos de crueldade e buscando parcerias para lares transitórios ou famílias que queiram adotar animais sem um tutor.\n O mais importante para o sucesso de tais ações se estabelece na proximidade em que as entidades de proteção animal possuem dos NCZ de sua cidade ou região. Manter boas relações, entender as funções que coadunam, mas são diferentes em sua execução, podem facilitar a divisão de tarefas e promover a proteção e o bem estar animal geral, objetivo de ambas as instituições. Você conhece entidades de proteção animal em sua cidade? Conhece o Núcleo de Controle de Zoonoses de sua cidade? Em breve, mais publicações. Até a próxima!",
        date: '19/09/2023',
        created: new Date(),
      },
      {
        type: 'release',
        title: 'Versão de Inauguração!!! v1.1',
        content: "Estamos lançando a primeira versão do app, espero que gostem!! ",
        date: '20/10/2023',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('news_and_events', null, {});
  }
};
