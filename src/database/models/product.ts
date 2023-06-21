import { Model, Sequelize, DataTypes } from 'sequelize'
import { ProductsAttributes } from '../attributes/productsAttributes'

class Product extends Model implements ProductsAttributes {
    static getInstance() {
        throw new Error('Method not implemented.')
    }
    public ProdID!: string
    public ProdName!: string
    public Base_cost!: number

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                ProdID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    field: 'ProdID',
                },
                ProdName: {
                    type: DataTypes.STRING,
                    field: 'ProdName',
                },
                Base_cost: {
                    type: DataTypes.INTEGER,
                    field: 'Base_cost',
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Product',
                timestamps: false,
            }
        )
    }
}

export default Product
