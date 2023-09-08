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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.create = void 0;
const http_response_1 = require("../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
const service = __importStar(require("../services/product.services"));
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProd = yield service.create(req.body);
        if (!newProd)
            return httpResponse.NotFound(res, 'Error creating product');
        else
            return httpResponse.Ok(res, newProd);
    }
    catch (error) {
        next(error.message);
    }
});
exports.create = create;
const getAll = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prods = yield service.getAll();
        if (!prods)
            return httpResponse.NotFound(res, 'Products Not Found');
        return httpResponse.Ok(res, prods);
    }
    catch (error) {
        next(error.message);
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const prod = yield service.getById(id);
        if (!prod)
            return httpResponse.NotFound(res, 'Product Not Found');
        return httpResponse.Ok(res, prod);
    }
    catch (error) {
        next(error.message);
    }
});
exports.getById = getById;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const prod = yield service.getById(id);
        if (!prod)
            return httpResponse.NotFound(res, 'Product Not Found');
        const prodUpd = yield service.update(id, req.body);
        if (!prodUpd)
            return httpResponse.NotFound(res, 'Update Error');
        return httpResponse.Ok(res, prodUpd);
    }
    catch (error) {
        next(error.message);
    }
});
exports.update = update;
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const prod = yield service.getById(id);
        if (!prod)
            return httpResponse.NotFound(res, 'Product Not Found');
        const prodDel = yield service.remove(id);
        if (!prodDel)
            return httpResponse.NotFound(res, 'Remove Error');
        return httpResponse.Ok(res, 'prod deleted');
    }
    catch (error) {
        next(error.message);
    }
});
exports.remove = remove;
