'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('kriteria', [
      {
        id: 1,
        kode: 'K1',
        name: 'price',
        value: 4,
        type: 'cost',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        kode: 'K2',
        name: 'ram',
        value: 3,
        type: 'benefit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        kode: 'K3',
        name: 'storage',
        value: 3,
        type: 'benefit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        kode: 'K4',
        name: 'camera',
        value: 3,
        type: 'benefit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        kode: 'K5',
        name: 'screen size',
        value: 2,
        type: 'benefit',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('kriteria', null,{})
  }
};
