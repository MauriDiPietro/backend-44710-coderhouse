// getAllCarts === products
// createCart 
// export const createCart = async(obj)=>{
//     try {
//         const cart = {
//             id: await getMaxId() + 1,
//             products : []
//         };
//         const cartsFile = await getAllCarts();
//         cartsFile.push(product);
//         await fs.promises.writeFile(pathFile, JSON.stringify(cartsFile));
//         return cart;
//     } catch (error) {
//         console.log(error);
//     }
// }

// getCartById === products
// saveProductToCart

export const saveProductToCart = async (idCart, idProd) => {
    //Buscar cart por id --> const cart = getCartById(idCart)
    // si el cart existe :
                //----> const prodExistant = cart.products.find(p => p.id === idProd)
                        // si el prod existe :
                            // prodExistant.quantity + 1
                        // si el prod no existe en el array products
                            // cart.products.push(idProd)    
    //si el cart no existe: error
}