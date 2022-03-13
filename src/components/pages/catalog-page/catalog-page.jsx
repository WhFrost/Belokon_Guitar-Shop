import React from 'react';
import globalStyles from '../../app/app.module.scss';
import styles from './catalog-page.module.scss';
import Header from '../../header/header';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import Filters from '../../filters/filters';
import Sort from '../../sort/sort';
import CardsList from '../../cards-list/cards-list';
import Pagination from '../../pagination/pagination';
import Footer from '../../footer/footer';
import {GuitarsList} from '../../../mock/guitars';

function CatalogPage () {
  return (
    <>
      <Header />
      <main className={styles['catalog-main']}>
        <div className={`${globalStyles['container']} ${styles['catalog-main__wrapper']}`}>
          <div className={styles['catalog-main__title-wrapper']}>
            <h1 className={`${globalStyles['title']} ${styles['catalog-main__title']}`}>Каталог гитар</h1>
            <BreadCrumbs />
          </div>
          <Filters />
          <Sort />
          <CardsList productList={GuitarsList}/>
          <Pagination />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CatalogPage;
