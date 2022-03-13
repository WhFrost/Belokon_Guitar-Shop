import React from 'react';
import {Link} from 'react-router-dom';
import globalStyles from '../app/app.module.scss';
import styles from './card.module.scss';
import Button from '../button/button';
import {productProp} from '../props-validation/product';

function Card (props) {
  const {product} = props;
  const {
    name,
    reviews,
    cost,
    image,
    imageRetina
  } = product;

  return (
    <section className={styles['card']}>
      <div className={styles['card__wrapper']}>
        <img
          srcSet={`${image} 1x, ${imageRetina} 2x`}
          src={image}
          alt={name}
          width={68}
          height={190}
          className={`${globalStyles['images']} ${styles['card__image']}`}
        />
        <div className={styles['card__rating-wrapper']}>
          <div className={styles['card__rating']}></div>
          <span className={styles['card__reviews']}>
            {reviews}
          </span>
        </div>
        <div className={styles['card__title-wrapper']}>
          <h3 className={`${globalStyles['title']} ${styles['card__title']}`}>
            {name}
          </h3>
          <span className={styles['card__cost']}>
            {`${cost} ₽`}
          </span>
        </div>
        <div className={styles['card__buttons-wrapper']}>
          <Link to="#" className={`${globalStyles['link']} ${styles['card__link']}`}>
            Подробнее
          </Link>
          <Button text={'Купить'} modificator={'card'} />
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  product: productProp,
};

export default Card;
