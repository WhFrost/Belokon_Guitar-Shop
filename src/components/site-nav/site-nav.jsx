import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './site-nav.module.scss';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';

function SiteNav (props) {
  const {siteMenuItems} = props;

  return (
    <ul className={`${globalStyles['list']} ${styles['site-nav']}`}>
      {
        siteMenuItems.map(({name, link}) => (
          <li className={styles['site-nav__item']} key={nanoid()}>
            <Link className={`${globalStyles['link']} ${styles['site-nav__link']}`}  to={link}>
              {name}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

SiteNav.propTypes = {
  siteMenuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
};

export default SiteNav;
