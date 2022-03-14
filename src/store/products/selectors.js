const getProducts = (state) => state.products.products;
const getProductsLoadedStatus = (state) => state.products.productsLoaded;

export {
  getProducts,
  getProductsLoadedStatus
};
