'use strict';

const data = require('./userData.json')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const users = data.users.map(user => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('Users', users)
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {})
  }
};
