'use strict';

const data = require('./userBootcampData.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const userBootcamps = data.user_bootcamps.map(userBootcamp => ({
      ...userBootcamp,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('User_bootcamps', userBootcamps)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_bootcamps', userBootcamps)
  }
};
