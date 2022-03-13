import React from 'react';
import globalStyles from '../../app/app.module.scss';
import styles from './page-not-found.module.scss';

function PageNotFound () {
  return (
    <>
      <h1 className={`${globalStyles['title']} ${styles['page-not-found__title']}`}>404: Page Not Found</h1>
      <p className={styles['page-not-found__title']}>Страница не найдена</p>
    </>
  );
}

export default PageNotFound;
