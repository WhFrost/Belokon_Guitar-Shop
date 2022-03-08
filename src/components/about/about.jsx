import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './about.module.scss';

function About () {
  return (
    <section className={styles['about']}>
      <h3 className={`${globalStyles['title']} ${styles['about__title']}`}>
        О нас
      </h3>
      <p className={styles['about__description']}>
        Магазин гитар, музыкальныхх&nbsp;инструментов и&nbsp;гитарная мастерская в Санкт-&nbsp;Петербурге.
      </p>
      <p className={styles['about__description']}>
        Все инструменты проверены,&nbsp;отстроены и доведены до идеала!
      </p>
    </section>
  );
}

export default About;
