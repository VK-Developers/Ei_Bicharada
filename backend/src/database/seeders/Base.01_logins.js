"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "logins",
      [
        {
          email: "atespets.app@gmail.com",
          password: "Atesp@213",
        }
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("logins", null, {});
  },
};
