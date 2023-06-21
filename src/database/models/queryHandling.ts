import { Model, Sequelize, DataTypes } from 'sequelize'
import { QueryHandlingAttributes } from '../attributes'

class QueryHandling extends Model implements QueryHandlingAttributes {
    static getInstance() {
        throw new Error('Method not implemented.')
    }
    public QID!: string
    public Sub_Date!: Date
    public Cust_ID!: string
    public EmpID!: string
    public Res_Date!: Date
    public Status!: string
    public Feedback!: number
    public Query_Text!: string
    public Query_Response!: string

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                QID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'QID',
                },
                Sub_Date: {
                    type: DataTypes.DATE,
                    field: 'Sub_Date',
                },
                Cust_ID: {
                    type: DataTypes.STRING,
                    field: 'Cust_ID',
                },
                EmpID: {
                    type: DataTypes.STRING,
                    field: 'EmpID',
                },
                Res_Date: {
                    type: DataTypes.DATE,
                    field: 'Res_Date',
                },
                Status: {
                    type: DataTypes.STRING,
                    field: 'Status',
                },
                Feedback: {
                    type: DataTypes.INTEGER,
                    field: 'Feedback',
                },
                Query_Text: {
                    type: DataTypes.STRING,
                    field: 'Query_Text',
                },
                Query_Response: {
                    type: DataTypes.STRING,
                    field: 'Query_Response',
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        )
    }
}

export default QueryHandling
