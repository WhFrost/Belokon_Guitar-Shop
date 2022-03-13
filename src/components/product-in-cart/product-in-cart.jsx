import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './product-in-cart.module.scss';
import ProductProp from '../props-validation/product';
import Button from '../button/button';
import Svg from '../svg/svg';
import {
  GUITAR_TYPES
} from '../../const';

function ProductInCart (props) {
  const {product} = props;

  const {
    id,
    name,
    type,
    countStrings,
    cost,
    image,
    imageRetina
  } = product;

  return (
    <section className={styles['product-in-cart']}>
      <div className={styles['product-in-cart__wrapper']}>
        <Button
          element={<Svg icon={'delete'}/>}
          text={`Удалить ${name}`}
          isVisibleText={false}
          modificator={'delete-product'}
        />
        <img
          srcSet={`${image} 1x, ${imageRetina} 2x`}
          src={image}
          alt={name}
          width={48}
          height={124}
          className={`${globalStyles['images']} ${styles['product-in-cart__image']}`}
        />
        <div className={styles['product-in-cart__description']}>
          <h3 className={styles['product-in-cart__title']}>{`${GUITAR_TYPES[type].toUpperCase()} ${name.toUpperCase()}`}</h3>
          <p className={styles['product-in-cart__info']}>
            Артикул: {id.toUpperCase()}
          </p>
          <p className={styles['product-in-cart__info']}>
            {`${GUITAR_TYPES[type]}, ${countStrings} струнная`}
          </p>
        </div>
        <p className={styles['product-in-cart__cost']}>
          {cost} ₽
        </p>
        <div className={styles['product-in-cart__button-wrapper']}>
          <Button
            text={'-'}
            modificator={'dec-product'}
          />
          <input
            type="number"
            className={styles['product-in-cart__count-product']}
            value={1}
          />
          <Button
            text={'+'}
            modificator={'inc-product'}
          />
        </div>
        <p className={styles['product-in-cart__sum-count-products']}>
          {41234} ₽
        </p>
      </div>
    </section>
  );
}

ProductInCart.propTypes = {
  product: ProductProp,
};

export default ProductInCart;
