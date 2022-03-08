import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import SiteNav from '../site-nav/site-nav';
import UserNav from '../user-nav/user-nav';
import {
  HEADER_NAV_MENU_ITEMS,
  HEADER_USER_MENU_ITEMS
} from '../../const';

function Header () {
  return (
    <header className={styles['header']}>
      <div className={`${globalStyles['container']} ${styles['header__wrapper']}`}>
        <nav className={styles['header__nav']}>
          <Logo />
          <SiteNav siteMenuItems={HEADER_NAV_MENU_ITEMS}/>
          <UserNav userMenuItems={HEADER_USER_MENU_ITEMS}/>
        </nav>
      </div>
      <div className={styles['header__decor']}></div>
      <div className={styles['header__decor-line']}></div>
    </header>
  );
}

export default Header;
