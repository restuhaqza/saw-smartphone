"use strict"

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

    await queryInterface.bulkInsert("matriks", [
      {
        id: 1,
        id_product: 1,
        K1: 5999000,
        K2: 3,
        K3: 256,
        K4: 12,
        K5: "5,5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        id_product: 2,
        K1: 21799000,
        K2: 4,
        K3: 64,
        K4: 48,
        K5: "6,5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        id_product: 3,
        K1: 16999000,
        K2: 4,
        K3: 256,
        K4: 31,
        K5: "5,6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        id_product: 4,
        K1: 6999000,
        K2: 6,
        K3: 128,
        K4: 48,
        K5: "6,4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        id_product: 5,
        K1: 5850000,
        K2: 4,
        K3: 128,
        K4: 16,
        K5: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        id_product: 6,
        K1: 3599000,
        K2: 8,
        K3: 128,
        K4: 48,
        K5: "6,5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        id_product: 7,
        K1: 3599000,
        K2: 8,
        K3: 128,
        K4: 48,
        K5: "6,4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        id_product: 8,
        K1: 3099000,
        K2: 4,
        K3: 64,
        K4: 25,
        K5: "6,4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        id_product: 9,
        K1: 3149000,
        K2: 4,
        K3: 64,
        K4: 48,
        K5: "6,4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        id_product: 10,
        K1: 11999000,
        K2: 8,
        K3: 128,
        K4: 48,
        K5: "6,7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        id_product: 11,
        K1: 2599000,
        K2: 4,
        K3: 128,
        K4: 20,
        K5: "6,35",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        id_product: 12,
        K1: 2799000,
        K2: 4,
        K3: 128,
        K4: 13,
        K5: "6,47",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        id_product: 13,
        K1: 3399000,
        K2: 6,
        K3: 128,
        K4: 48,
        K5: "6,3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        id_product: 14,
        K1: 3999000,
        K2: 6,
        K3: 64,
        K4: 32,
        K5: "6,39",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        id_product: 15,
        K1: 1499000,
        K2: 2,
        K3: 32,
        K4: 12,
        K5: "6,22",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('matriks', null,{})
  },
}
