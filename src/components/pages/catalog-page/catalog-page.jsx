import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
import {ActionCreator} from '../../../store/actions';
import {
  getProducts,
  getProductsLoadedStatus
} from '../../../store/products/selectors';
import ProductProp from '../../props-validation/product';

function CatalogPage (props) {
  const {
    products,
    isProductsLoaded,
    loadProducts,
  } = props;

  useEffect(() => {
    if (!isProductsLoaded) {
      loadProducts(GuitarsList);
    }
  }, [isProductsLoaded, loadProducts]);

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
          <CardsList productList={products}/>
          <Pagination />
        </div>
      </main>
      <Footer />
    </>
  );
}

CatalogPage.propTypes = {
  products: PropTypes.arrayOf(ProductProp),
  isProductsLoaded: PropTypes.bool,
  loadProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
  isProductsLoaded: getProductsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts (products) {
    dispatch(ActionCreator.loadProducts(products));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
