import {ActionType} from '../actions';

const initialState = {
  products: [],
  productsLoaded: false,
  filteredProducts: [],
  cart: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsLoaded: true,
        filteredProducts: action.payload,
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: state.products.find((item) => item.id === action.payload)
      };
    default:
      return state;
  }
};

export {
  ProductsReducer
};
