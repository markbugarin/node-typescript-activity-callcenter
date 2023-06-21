"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsService_1 = __importDefault(require("../services/productsService"));
const router = express_1.default.Router();
router.get('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prodducts = yield productsService_1.default.getInstance().findAll();
        response.status(200).json(prodducts);
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, request.body);
        const newDepartment = yield productsService_1.default.getInstance().save(payload);
        response.status(201).json(Object.assign({}, newDepartment.dataValues));
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingDepartment = yield productsService_1.default.getInstance().findById(request.params.id);
        if (!existingDepartment) {
            response.status(404).json({
                message: `Employee with EmpID ${request.params.id} not found`,
            });
        }
        else {
            response.status(200).json(existingDepartment);
        }
    }
    catch (error) {
        next(error);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProdID = req.params.id;
        const data = yield productsService_1.default.getInstance().update(ProdID, Object.assign({}, req.body));
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProdID = req.params.id;
        yield productsService_1.default.getInstance().deleteByPrimaryKey(ProdID);
        res.status(200).json({
            message: `department_successfully_deleted: ${ProdID}`,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
