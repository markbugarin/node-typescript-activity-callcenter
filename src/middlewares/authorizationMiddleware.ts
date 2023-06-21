import { Request, Response, NextFunction } from 'express'

function authorizationTokenMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const urlPath = request.url
    const authorizationToken = request.headers['authorization']
    if (urlPath.startsWith('/api') && !authorizationToken) {
        response
            .status(401)
            .json({ message: 'Authorization token is missing.' })
        return
    }
    next()
}

export default authorizationTokenMiddleware
