import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './social-list.module.scss';
import Svg from '../svg/svg';

function SocialList (props) {
  const {socialLinks} = props;
  return (
    <ul className={`${globalStyles['list']} ${styles['social-list']}`}>
      {
        socialLinks.map(({name, icon, link}) => (
          <li className={styles['social-list__item']} key={nanoid()}>
            <span className={globalStyles['visually-hidden']}>{name}</span>
            <a href={link} className={`${globalStyles['link']} ${styles['social-list__link']}`}>
              <Svg className={styles['social-list__icon']} icon={icon} />
            </a>
          </li>
        ))
      }
    </ul>
  );
}

SocialList.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string
  }))
};

export default SocialList;
