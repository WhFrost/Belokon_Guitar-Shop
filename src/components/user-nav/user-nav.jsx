import React from 'react';
import PropTypes from 'prop-types';
import globalStyles from '../app/app.module.scss';
import styles from './user-nav.module.scss';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import Svg from '../svg/svg';

function UserNav (props) {
  const {userMenuItems} = props;

  return (
    <ul className={`${globalStyles['list']} ${styles['user-nav']}`}>
      {
        userMenuItems.map(({name, icon, link}) => (
          <li className={styles['user-nav__item']} key={nanoid()}>
            <Link className={`${globalStyles['link']} ${styles['user-nav__link']}`} to={link}>
              <span className={globalStyles['visually-hidden']}>{name}</span>
              <Svg className={styles['user-nav__icon']} icon={icon} />
              {icon === 'cart' && <span className={styles['user-nav__product-amount']}>1</span>}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

UserNav.propTypes = {
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }))
};

export default UserNav;
