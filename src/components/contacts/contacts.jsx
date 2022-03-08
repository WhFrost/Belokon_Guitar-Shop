import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './contacts.module.scss';

function Contacts () {
  return (
    <section className={styles['contacts']}>
      <h3 className={`${globalStyles['title']} ${styles['contacts__title']}`}>
        Контакты
      </h3>
      <address className={styles['contacts__address']}>
        г. Санкт-Петербург,
        м.&nbsp;Невский проспект, ул.&nbsp;Казанская 6.
        <br />
        <a href="tel:8-812-500-50-50" className={`${globalStyles['link']} ${styles['contacts__link']}`}>
          <span className={styles['contacts__address--icon']}></span> 8-812-500-50-50
        </a>
      </address>
      <p className={styles['contacts__working-time']}>
        Режим работы:
        <br />
        <span className={styles['contacts__working-time--icon']}></span> с 11:00 до 20:00,
        без&nbsp;выходных.
      </p>
    </section>
  );
}

export default Contacts;
