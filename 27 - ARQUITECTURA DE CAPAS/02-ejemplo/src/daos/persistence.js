import ProductManager from './mongodb/managers/product.manager.js';
import UserManager from './mongodb/managers/user.manager.js';
import ProductManagerFS from './filesystem/product.manager.js';

let userManager;
let productManager;
let persistence = process.argv[2];
// let persistence = process.env.PERSISTENCE;

switch (persistence) {
    case 'file':
        productManager = new ProductManagerFS('./src/daos/filesystem/products.json');
        //userManager = new UserManagerFS(...)
        break;
    case 'mongo':
        userManager = new UserManager();
        productManager = new ProductManager();
        break;
    default:
        productManager = new ProductManagerFS('./src/daos/filesystem/products.json');
        //userManager = new UserManagerFS(...)
        break;
}

export default { userManager, productManager };
