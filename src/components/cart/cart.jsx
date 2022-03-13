import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './cart.module.scss';
import ProductInCart from '../product-in-cart/product-in-cart';
import Button from '../button/button';
import {GuitarsList} from '../../mock/guitars';

function Cart () {
  return (
    <section className={styles['cart']}>
      <ul className={`${globalStyles['list']} ${styles['cart__list']}`}>
        <li className={styles['cart__item']}>
          <ProductInCart product={GuitarsList[0]}/>
        </li>
        <li className={styles['cart__item']}>
          <ProductInCart product={GuitarsList[1]}/>
        </li>
      </ul>
      <div className={styles['cart__order']}>
        <div className={styles['cart__promo']}>
          <h3 className={` ${globalStyles['title']} ${styles['cart__promo-title']}`}>
            Промокод на скидку
          </h3>
          <form action="#" className={styles['cart__promo-form']}>
            <label htmlFor="promo" className={styles['cart__promo-label']}>
              Введите свой промокод, если он у вас есть.
            </label>
            <div className={styles['cart__promo-wrapper']}>
              <input type="text" id="promo" className={styles['cart__promo-field']}/>
              <Button
                text={'Применить купон'}
                modificator={'promo-submit'}
              />
            </div>
          </form>
        </div>
        <div className={styles['cart__confirm-order']}>
          <p className={styles['cart__total-cost']}>
            Всего: {47000} ₽
          </p>
          <Button
            text={'Оформить заказ'}
            modificator={'confirm-order'}
          />
        </div>
      </div>
    </section>
  );
}

export default Cart;
