"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetProduct = exports.validatePostProduct = void 0;
const joi_1 = __importDefault(require("joi"));
const productSchemaPost = joi_1.default.object({
    name: joi_1.default.string().min(3).max(30).required(),
    description: joi_1.default.string().min(10).max(50).required(),
    price: joi_1.default.number().required(),
    stock: joi_1.default.number().required()
});
const productSchemaGet = joi_1.default.object({
    id: joi_1.default.string().min(10).required()
});
const validatePostProduct = (req, res, next) => {
    const { error } = productSchemaPost.validate(req.body, { abortEarly: false });
    error ? res.status(403).send(error) : next();
};
exports.validatePostProduct = validatePostProduct;
const validateGetProduct = (req, res, next) => {
    const { error } = productSchemaGet.validate(req.params, { abortEarly: false });
    error ? res.status(403).send(error) : next();
};
exports.validateGetProduct = validateGetProduct;
