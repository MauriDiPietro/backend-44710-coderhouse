"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_LOCAL_URL || 'mongodb://localhost:27017/coderhouse'
};
