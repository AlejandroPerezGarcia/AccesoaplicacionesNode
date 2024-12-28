'use strict';

const data = require('./bootcampData.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const bootcamps = data.bootcamp.map(bootcamp => ({
      ...bootcamp,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('Bootcamps', bootcamps)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bootcamps', null, {})
  }
};
