import ProductsDaoMongoDB from "../daos/mongodb/products.dao.js";
const prodDao = new ProductsDaoMongoDB();

// import ProductsDaoFS from "../daos/filesystem/products.dao.js";
// import { __dirname } from "../path.js";
// const prodDao = new ProductsDaoFS(__dirname+'/daos/filesystem/products.json');

export const getAllService = async () => {
    try {
     const docs = await prodDao.getAllProducts();
     return docs;
    } catch (error) {
      console.log(error);
    }
};

export const getByIdService = async (id) => {
    try {
      const doc = await prodDao.getProductById(id);
      if(!doc) throw new Error('Product not found')
      else return doc;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const createService = async (obj) => {
    try {
      const newProd = await prodDao.createProduct(obj);
      if(!newProd) throw new Error('Validation Error!')
      else return newProd;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateService = async (id, obj) => {
    try {
      const doc = await prodDao.getProductById(id);
      if(!doc){
         throw new Error('Product not found')
      } else {
        const prodUpd = await prodDao.updateProduct(id, obj)
        return prodUpd;
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteService = async (id) => {
    try {
       const prodDel = await prodDao.deleteProduct(id);
       return prodDel;
    } catch (error) {
      console.log(error);
    }
  };

