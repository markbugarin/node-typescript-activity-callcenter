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
const queryHandlingService_1 = __importDefault(require("../services/queryHandlingService"));
const router = express_1.default.Router();
router.get('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield queryHandlingService_1.default.getInstance().findAll();
        response.status(200).json(employees);
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, request.body);
        const newDepartment = yield queryHandlingService_1.default.getInstance().save(payload);
        response.status(201).json(Object.assign({}, newDepartment.dataValues));
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingDepartment = yield queryHandlingService_1.default.getInstance().findById(request.params.id);
        if (!existingDepartment) {
            response.status(404).json({
                message: `Query with QID ${request.params.id} not found`,
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
        const empID = req.params.id;
        const data = yield queryHandlingService_1.default.getInstance().update(empID, Object.assign({}, req.body));
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empid = req.params.id;
        yield queryHandlingService_1.default.getInstance().deleteByPrimaryKey(empid);
        res.status(200).json({
            message: `query_handling_successfully_deleted: ${empid}`,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
