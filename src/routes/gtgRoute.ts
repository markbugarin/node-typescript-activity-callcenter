import express, { Request, Response } from 'express'
import environment from '../environment'

const router = express.Router()

// this is what you called a route
router.get('/', (request: Request, response: Response) => {
    response.status(200).json({
        version: '1.0.0',
        status: 'up',
        environment: environment.APP_ENVIRONMENT,
    })
})

export default router
