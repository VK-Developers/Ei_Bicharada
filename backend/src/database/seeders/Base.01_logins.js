"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "logins",
      [
        {
          email: "vincenzo@adm.com",
          password: "vincenzo213",
        },
        {
          email: "kaio@adm.com",
          password: "kaio12345",
        }
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("logins", null, {});
  },
};
