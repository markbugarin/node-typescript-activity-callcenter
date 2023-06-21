// Cross-Origin Resource Sharing (CORS)
import express, { Express } from 'express'
import cors from 'cors'
import * as routes from './routes'
import authorizationMiddleware from './middlewares/authorizationMiddleware'
import errorHandler from './middlewares/errorMiddleware'
import morganMiddleware from './middlewares/morganMiddleware'
import logger from './logging/logger'

class Server {
    private app: Express

    constructor(app: Express) {
        if (!app) {
            throw new Error('Express instance is undefined.')
        }
        this.app = app
        this.app.set('trust proxy', true)
        // these are all middlewares
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morganMiddleware.config)
        // this.app.use(authorizationMiddleware)
    }

    errorHandler() {
        this.app.use(errorHandler)
        return this
    }
    routes() {
        this.app.use('/__gtg', routes.gtgRoute)
        this.app.use('/employees', routes.employeesRoute)
        this.app.use('/products', routes.productsRoute)
        this.app.use('/queryhandlings', routes.queryHandlingRoute)
        return this
    }

    start(port: string) {
        this.app.listen(port, () => {
            logger.info(`Server started at http://localhost:${port}`)
        })
    }
}

const createServer = (app: Express) => new Server(app)

export default createServer
