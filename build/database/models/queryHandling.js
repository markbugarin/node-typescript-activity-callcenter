"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class QueryHandling extends sequelize_1.Model {
    static getInstance() {
        throw new Error('Method not implemented.');
    }
    static initModel(sequelize) {
        QueryHandling.init({
            QID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                field: 'QID',
            },
            Sub_Date: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Sub_Date',
            },
            Cust_ID: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Cust_ID',
            },
            EmpID: {
                type: sequelize_1.DataTypes.STRING,
                field: 'EmpID',
            },
            Res_Date: {
                type: sequelize_1.DataTypes.DATE,
                field: 'Res_Date',
            },
            Status: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Status',
            },
            Feedback: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'Feedback',
            },
            Query_Text: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Text',
            },
            Query_Response: {
                type: sequelize_1.DataTypes.STRING,
                field: 'Query_Response',
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'QueryHandling',
            timestamps: false,
        });
    }
}
exports.default = QueryHandling;
