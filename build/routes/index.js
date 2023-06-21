"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHandlingRoute = exports.productsRoute = exports.employeesRoute = exports.gtgRoute = void 0;
const gtgRoute_1 = __importDefault(require("./gtgRoute"));
exports.gtgRoute = gtgRoute_1.default;
const employeesRoute_1 = __importDefault(require("./employeesRoute"));
exports.employeesRoute = employeesRoute_1.default;
const productsRoute_1 = __importDefault(require("./productsRoute"));
exports.productsRoute = productsRoute_1.default;
const queryHandlingRoute_1 = __importDefault(require("./queryHandlingRoute"));
exports.queryHandlingRoute = queryHandlingRoute_1.default;
