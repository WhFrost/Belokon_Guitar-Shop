import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './footer-nav.module.scss';

function FooterNav (props) {
  const {title, footerMenuItems} = props;

  return (
    <section className={styles['footer-nav']}>
      <h3 className={`${globalStyles['title']} ${styles['footer-nav__title']}`}>
        {title}
      </h3>
      <ul className={`${globalStyles['list']} ${styles['footer-nav__list']}`}>
        {
          footerMenuItems.map(({name, link}) => (
            <li className={styles['footer-nav__item']} key={nanoid()}>
              <a href={link} className={`${globalStyles['link']} ${styles['footer-nav__link']}`}>
                {name}
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

FooterNav.propTypes = {
  title: PropTypes.string,
  footerMenuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }))
};

export default FooterNav;
