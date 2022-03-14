const ActionType = {
  LOAD_PRODUCTS: 'data/loadProducts',
  ADD_TO_CART: 'data/addProductToCart',
};

const ActionCreator = {
  loadProducts: (products) => ({
    type: ActionType.LOAD_PRODUCTS,
    payload: products,
  }),
  addToCart: (product) => ({
    type: ActionType.ADD_TO_CART,
    payload: product,
  })
};

export {
  ActionType,
  ActionCreator
};
