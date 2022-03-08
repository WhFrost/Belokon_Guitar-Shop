import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import {Link} from 'react-router-dom';
import headerLogo from '../../assets/img/logo-header.svg';
import footerLogo from '../../assets/img/logo-footer.svg';
import {AppRoute} from '../../const';

function Logo(props) {
  const {footer = false} = props;

  return (
    <div className={styles['logo']}>
      <Link to={AppRoute.ROOT} className={styles['logo__link']}>
        <img
          src={footer ? footerLogo : headerLogo}
          width='67'
          height='70'
          alt='Guitar Shop'
        />
      </Link>
    </div>
  );
}

Logo.propTypes ={
  footer: PropTypes.bool,
};

export default Logo;
