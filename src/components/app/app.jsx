import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import CatalogPage from '../pages/catalog-page/catalog-page';
import CartPage from '../pages/cart-page/cart-page';
import PageNotFound from '../pages/page-not-found/page-not-found';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<CatalogPage />} />
        <Route path={AppRoute.CATALOG} element={<CatalogPage />} />
        <Route path={AppRoute.CART} element={<CartPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
