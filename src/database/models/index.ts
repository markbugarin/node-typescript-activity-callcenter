import SequelizeConnection from '../configuration'
import Employees from './employees'
import Product from './product'
import QueryHandling from './queryHandling'

const sequelize = SequelizeConnection.getInstance()

// initialize the models
Employees.initModel(sequelize)
Product.initModel(sequelize)
QueryHandling.initModel(sequelize)

export const db = {
    sequelize,
    Employees,
    Product,
    QueryHandling,
}
