"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Employees extends sequelize_1.Model {
    static getInstance() {
        throw new Error('Method not implemented.');
    }
    static initModel(sequelize) {
        Employees.init({
            EmpID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                field: 'EmpID',
            },
            EFirstName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'EFirstName',
            },
            ELastName: {
                type: sequelize_1.DataTypes.STRING,
                field: 'ELastName',
            },
            Address: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Address',
            },
            Age: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Age',
            },
            D_Join: {
                type: sequelize_1.DataTypes.DATE,
                field: 'D_Join',
            },
            Dept: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Dept',
            },
            Salary: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Salary',
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'Employees',
            timestamps: false,
        });
    }
}
exports.default = Employees;
