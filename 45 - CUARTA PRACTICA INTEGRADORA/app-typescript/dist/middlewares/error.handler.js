"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_response_1 = require("../utils/http.response");
const httpResponse = new http_response_1.HttpResponse();
const errorHandler = (error) => {
    return httpResponse.ServerError(error.message);
};
exports.errorHandler = errorHandler;
