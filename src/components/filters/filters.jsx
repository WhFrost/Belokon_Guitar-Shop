import React from 'react';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './filters.module.scss';
import Button from '../button/button';
import {
  FILTER_GUITAR_TYPES,
  FILTER_GUITAR_COUNT_STRINGS
} from '../../const';

function Filters () {
  return (
    <section className={styles['filters']}>
      <div className={styles['filters__wrapper']}>
        <h3 className={`${globalStyles['title']} ${styles['filters__title']}`}>
          Фильтр
        </h3>
        <form action="#" className={styles['filters__form']}>
          <div className={styles['filters__form-wrapper']}>
            <fieldset className={`${styles['filters__form-fieldset']} ${styles['filters__form-fieldset--cost']}`}>
              <legend className={styles['filters__fieldset-legend']}>
                Цена, <span className={styles['filters__fieldset-legend--cost']}>₽</span>
              </legend>
              <label htmlFor='min-cost' className={globalStyles['visually-hidden']}>
                от
              </label>
              <input
                type='number'
                id='min-cost'
                className={styles['filters__number-input']}
                min={1000}
                max={2000}
                placeholder={1500}
              />
              <span className={styles['filters__fields-separator']}> - </span>
              <label htmlFor='max-cost' className={globalStyles['visually-hidden']}>
                до
              </label>
              <input
                type='number'
                id='max-cost'
                className={styles['filters__number-input']}
                min={1000}
                max={2000}
                placeholder={1500}
              />
            </fieldset>
            <fieldset className={`${styles['filters__form-fieldset']} ${styles['filters__form-fieldset--type']}`}>
              <legend className={styles['filters__fieldset-legend']}>
                Тип гитар
              </legend>
              {
                FILTER_GUITAR_TYPES.map(({type, label}) => (
                  <div className={styles['filters__checkbox-wrapper']} key={nanoid()}>
                    <input
                      type='checkbox'
                      id={type}
                      className={`${globalStyles['visually-hidden']} ${styles['filters__checkbox-input']}`}
                    />
                    <label htmlFor={type} className={styles['filters__form-label']}>
                      {label}
                    </label>
                  </div>
                ))
              }
            </fieldset>
            <fieldset className={`${styles['filters__form-fieldset']} ${styles['filters__form-fieldset--count-strings']}`}>
              <legend className={styles['filters__fieldset-legend']}>
               Количество струн
              </legend>
              {
                FILTER_GUITAR_COUNT_STRINGS.map(({count, label}) => (
                  <div className={styles['filters__checkbox-wrapper']} key={nanoid()}>
                    <input
                      type='checkbox'
                      id={count}
                      className={`${globalStyles['visually-hidden']} ${styles['filters__checkbox-input']}`}
                    />
                    <label htmlFor={count} className={styles['filters__form-label']}>
                      {label}
                    </label>
                  </div>
                ))
              }
            </fieldset>
          </div>
          <Button
            text={'показать'}
            modificator={'filters-submit'}
          />
        </form>
      </div>
    </section>
  );
}

export default Filters;
