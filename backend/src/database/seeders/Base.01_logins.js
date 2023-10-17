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
          email: "marcelojuvenal@gmail.com",
          password: "0314186574",
        },
        {
          email: "humorsapiens2@hotmail.com",
          password: "Fa375150",
        }
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("logins", null, {});
  },
};
