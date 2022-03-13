import React from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import Social from '../social-list/social-list';
import About from '../about/about';
import FooterNav from '../footer-nav/footer-nav';
import Contacts from '../contacts/contacts';
import {
  FOOTER_SOCIALS,
  FOOTER_NAV_CATALOG,
  FOOTER_NAV_INFO
} from '../../const';

function Footer () {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__decor']}></div>
      <div className={styles['footer__content']}>
        <div className={`${globalStyles['container']} ${styles['footer__wrapper']}`}>
          <div className={styles['footer__logo']}>
            <Logo footer />
            <Social socialLinks={FOOTER_SOCIALS}/>
          </div>
          <About />
          <FooterNav title='Каталог' footerMenuItems={FOOTER_NAV_CATALOG} />
          <FooterNav title='Информация' footerMenuItems={FOOTER_NAV_INFO} />
          <Contacts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
