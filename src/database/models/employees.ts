import { Model, Sequelize, DataTypes } from 'sequelize'
import { EmployeesAttributes } from '../attributes'

class Employees extends Model implements EmployeesAttributes {
    static getInstance() {
        throw new Error('Method not implemented.')
    }
    public EmpID!: string
    public EFirstName!: string
    public ELastName!: string
    public Address!: string
    public Age!: number
    public D_Join!: Date
    public Dept!: string
    public Salary!: number

    static initModel(sequelize: Sequelize): void {
        Employees.init(
            {
                EmpID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'EmpID',
                },
                EFirstName: {
                    type: DataTypes.STRING,
                    field: 'EFirstName',
                },
                ELastName: {
                    type: DataTypes.STRING,
                    field: 'ELastName',
                },
                Address: {
                    type: DataTypes.STRING,
                    field: 'Address',
                },
                Age: {
                    type: DataTypes.INTEGER,
                    field: 'Age',
                },
                D_Join: {
                    type: DataTypes.DATE,
                    field: 'D_Join',
                },
                Dept: {
                    type: DataTypes.STRING,
                    field: 'Dept',
                },
                Salary: {
                    type: DataTypes.INTEGER,
                    field: 'Salary',
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Employees',
                timestamps: false,
            }
        )
    }
}

export default Employees
