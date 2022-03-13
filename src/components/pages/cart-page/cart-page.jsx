import React from 'react';
import globalStyles from '../../app/app.module.scss';
import styles from './cart-page.module.scss';
import Header from '../../header/header';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import Cart from '../../cart/cart';
import Footer from '../../footer/footer';

function CartPage () {
  return (
    <>
      <Header />
      <main className={styles['cart-main']}>
        <div className={`${globalStyles['container']} ${styles['cart-main__wrapper']}`}>
          <div className={styles['cart-main__title-wrapper']}>
            <h1 className={`${globalStyles['title']} ${styles['cart-main__title']}`}>Корзина</h1>
            <BreadCrumbs />
          </div>
          <Cart />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
