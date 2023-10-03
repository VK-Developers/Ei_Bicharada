"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "logins",
      [
        {
          email: "vincenzo@admin.com",
          password: "vincenzo213",
        },
        {
          email: "kaio@admin.com",
          password: "kaio12345",
        },
        {
          email: "marcelo@admin.com",
          password: "marcelo213",
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("logins", null, {});
  },
};
