import React from 'react';
import globalStyles from '../../app/app.module.scss';
import styles from './page-not-found.module.scss';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function PageNotFound () {
  return (
    <>
      <Header />
      <main className={styles['page-not-found-main']}>
        <div className={`${globalStyles['container']} ${styles['page-not-found-main__wrapper']}`}>
          <div className={styles['page-not-found-main__title-wrapper']}>
            <h1 className={`${globalStyles['title']} ${styles['page-not-found__title']}`}>404: Page Not Found</h1>
            <p className={styles['page-not-found__title']}>Страница не найдена</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PageNotFound;
