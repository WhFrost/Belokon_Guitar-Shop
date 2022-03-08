import React from 'react';
import globalStyles from '../app/app.module.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

function Catalog () {
  return (
    <>
      <Header />
      <main>
        <h1 className={globalStyles['title']}>Каталог гитар</h1>
      </main>
      <Footer />
    </>
  );
}

export default Catalog;
