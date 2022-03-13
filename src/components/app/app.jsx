import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Catalog from '../pages/catalog/catalog';
import Cart from '../pages/cart/cart';
import PageNotFound from '../pages/page-not-found/page-not-found';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Catalog />} />
        <Route path={AppRoute.CATALOG} element={<Catalog />} />
        <Route path={AppRoute.CART} element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
