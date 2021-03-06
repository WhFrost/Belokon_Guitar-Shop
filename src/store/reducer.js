import {combineReducers} from 'redux';
import {ProductsReducer} from './products/products-reducer';

const rootReducer = combineReducers({
  products: ProductsReducer
});

export {
  rootReducer
};
