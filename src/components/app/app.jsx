import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Catalog from '../pages/catalog';
import Cart from '../pages/cart';
import PageNotFound from '../pages/404';

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
