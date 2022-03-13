import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './pagination.module.scss';
import Button from '../button/button';
import {CARDS_ON_PAGE} from '../../const';

function Pagination () {
  const cardsOnPage = new Array(CARDS_ON_PAGE).fill();
  const [isCurrentPage, setCurrentPage] = useState(false);

  return (
    <section className={styles['pagination']}>
      <ul className={`${globalStyles['list']} ${styles['pagination__list']}`}>
        {
          cardsOnPage.map((item, index) => (
            <li className={styles['pagination__item']} key={nanoid()}>
              <Button
                text={`${index + 1}`}
                modificator={isCurrentPage ? 'pagination-item-active': 'pagination-item'}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Pagination;
