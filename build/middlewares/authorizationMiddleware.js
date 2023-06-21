"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationTokenMiddleware(request, response, next) {
    const urlPath = request.url;
    const authorizationToken = request.headers['authorization'];
    if (urlPath.startsWith('/api') && !authorizationToken) {
        response
            .status(401)
            .json({ message: 'Authorization token is missing.' });
        return;
    }
    next();
}
exports.default = authorizationTokenMiddleware;
