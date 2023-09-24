'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        name: 'Aceh',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sumatera Utara',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sumatera Barat',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Jambi',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sumatera Selatan',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Lampung',
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
