"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "logins",
      [
        {
          email: "root@adm.com",
          password: "root12345",
        },
        {
          email: "vincenzo@adm.com",
          password: "vincenzo213",
        }
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("logins", null, {});
  },
};
