'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn('factura', 'descuento', {
			type: Sequelize.DECIMAL(10, 2),
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn('factura', 'descuento', {
			type: Sequelize.DECIMAL(5, 2),
		});
	},
};
