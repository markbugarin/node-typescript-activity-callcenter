"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static getInstance() {
        throw new Error('Method not implemented.');
    }
    static initModel(sequelize) {
        Product.init({
            ProdID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                field: 'ProdID',
            },
            ProdName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'ProdName',
            },
            Base_cost: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Base_cost',
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'Product',
            timestamps: false,
        });
    }
}
exports.default = Product;
