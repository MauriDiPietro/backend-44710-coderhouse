"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connection_1 = require("./config/db.connection");
const config_1 = __importDefault(require("./config/config"));
const error_handler_1 = require("./middlewares/error.handler");
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = config_1.default.PORT;
(0, db_connection_1.dbConnection)().then(() => console.log('Conectado a la base de datos de Mongo'));
app.use('/api/products', product_routes_1.default);
app.use(error_handler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
