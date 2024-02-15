"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "informations",
      [
        {
          info: "+5513991648700",
          local: "raffle",
          sub_local: "whatsapp"
        },
        {
          info: "52.643.341/0001-89",
          local: "pix",
          sub_local: "pix key"
        },
        {
          info: "http://193.203.183.47:3001/",
          local: "server",
          sub_local: "http url"
        },
        {
          info: "https://atespets.com.br/",
          local: "website",
          sub_local: "https url"
        },
        {
          info: "comercialmarcelo@atespets.com.br",
          local: "adocao",
          sub_local: "email"
        },
        {
          info: "+55 (13) 98854 - 2973",
          local: "adocao",
          sub_local: "telefone 01"
        },
        {
          info: "+55 (19) 98284 - 9344",
          local: "adocao",
          sub_local: "telefone 02"
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("informations", null, {});
  },
};
