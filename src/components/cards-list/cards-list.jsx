import React from 'react';
import PropTypes from 'prop-types';
import styles from './cards-list.module.scss';
import {nanoid} from 'nanoid';
import Card from '../card/card';
import ProductProp from '../props-validation/product';

function CardsList (props) {
  const {productList} = props;

  return (
    <section className={styles['card-list']}>
      {
        productList.map((item) => <Card product={item} key={nanoid()}/>)
      }
    </section>
  );
}

CardsList.propTypes = {
  productList: PropTypes.arrayOf(ProductProp),
};

export default CardsList;
