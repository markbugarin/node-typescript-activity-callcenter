import express, { Express, Request, Response } from 'express'
import environment from './environment'
import * as routes from './routes'

const app: Express = express()
const appPort = environment.APP_PORT
const appEnvironment = environment.APP_ENVIRONMENT

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/__gtg', routes.gtgRouter)

// this is what you called a route
app.get('/api/version', (request: Request, response: Response) => {
    response
        .setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .end(
            JSON.stringify({
                version: '1.0.0',
                environment: appEnvironment,
            })
        )
})

app.get('/contact.csv', (request: Request, response: Response) => {
    response
        .setHeader('Content-Type', 'text/csv')
        .writeHead(200)
        .end(`id, name, salary\n1, bugma, 3000`)
})

app.get('/contact.htm', (request: Request, response: Response) => {
    response
        .setHeader('Content-Type', 'text/html')
        .writeHead(200)
        .end(`<html><body><h1>Hello World</h1></body></html>`)
})

app.listen(appPort, () => {
    console.log(`Server running on port http://localhost:${appPort}`)
})
