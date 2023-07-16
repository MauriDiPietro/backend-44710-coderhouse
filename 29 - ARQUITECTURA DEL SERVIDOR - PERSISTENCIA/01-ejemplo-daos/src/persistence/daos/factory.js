import ProductManagerMongo from "./mongodb/managers/product.manager.js";
import UserManagerMongo from "./mongodb/managers/user.manager.js";
import { initMongoDB } from "./mongodb/connection.js";
import ProductManagerMySql from "./mysql/managers/product.manager.js";
import UserManagerMySql from "./mysql/managers/user.manager.js";
import { initMySqlDB } from "./mysql/connection.js";
import ProductManagerFS from "./filesystem/product.manager.js";

let userManager;
let productManager;
let persistence = process.argv[2];
// let persistence = process.env.PERSISTENCE;

switch (persistence) {
  case "file":
    productManager = new ProductManagerFS(
      "./src/daos/filesystem/products.json"
    );
    //userManager = new UserManagerFS(...)
    break;
  case "mongo":
    await initMongoDB();
    userManager = new UserManagerMongo();
    productManager = new ProductManagerMongo();
    break;
  case "mysql":
    await initMySqlDB();
    userManager = new UserManagerMySql();
    productManager = new ProductManagerMySql();
    break;
  default:
    productManager = new ProductManagerFS(
      "./src/daos/filesystem/products.json"
    );
    //userManager = new UserManagerFS(...)
    break;
}

export default { userManager, productManager };
