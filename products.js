/* make a function to fetchProducts, createProducts */

const fetchProducts = () => {
  console.log("products fetched...");
};
const createProducts = () => {
  console.log("products created...");
};
/* default export 
module.exports = fetchProducts;
*/

/* local module */
module.exports = {
    "retrieve": fetchProducts,
    "store" : createProducts
}


