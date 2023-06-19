"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = __importDefault(require("./environment"));
var routes = __importStar(require("./routes"));
var app = (0, express_1.default)();
var appPort = environment_1.default.APP_PORT;
var appEnvironment = environment_1.default.APP_ENVIRONMENT;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/__gtg', routes.gtgRouter);
// this is what you called a route
app.get('/api/version', function (request, response) {
    response
        .setHeader('Content-Type', 'application/json')
        .writeHead(200)
        .end(JSON.stringify({
        version: '1.0.0',
        environment: appEnvironment,
    }));
});
app.get('/contact.csv', function (request, response) {
    response
        .setHeader('Content-Type', 'text/csv')
        .writeHead(200)
        .end("id, name, salary\n1, bugma, 3000");
});
app.get('/contact.htm', function (request, response) {
    response
        .setHeader('Content-Type', 'text/html')
        .writeHead(200)
        .end("<html><body><h1>Hello World</h1></body></html>");
});
app.listen(appPort, function () {
    console.log("Server running on port http://localhost:".concat(appPort));
});
