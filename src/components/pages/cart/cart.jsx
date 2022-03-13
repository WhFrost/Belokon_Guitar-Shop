import React from 'react';
import globalStyles from '../../app/app.module.scss';
import styles from './cart.module.scss';
import Header from '../../header/header';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import Footer from '../../footer/footer';

function Cart () {
  return (
    <>
      <Header />
      <main className={styles['cart']}>
        <div className={`${globalStyles['container']} ${styles['cart__wrapper']}`}>
          <h1 className={`${globalStyles['title']} ${styles['cart__title']}`}>Корзина</h1>
          <BreadCrumbs />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
