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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.create = void 0;
const product_model_1 = require("../models/product.model");
const create = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prod = yield product_model_1.ProductModel.create(product);
        if (!prod)
            return false;
        return prod;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.ProductModel.find({});
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prod = yield product_model_1.ProductModel.findById(id);
        if (!prod)
            return false;
        return prod;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getById = getById;
const update = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updProd = yield product_model_1.ProductModel.findByIdAndUpdate(id, body, { new: true });
        if (!updProd)
            return false;
        return updProd;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delProd = yield product_model_1.ProductModel.findByIdAndDelete(id);
        if (!delProd)
            return false;
        return delProd;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.remove = remove;
