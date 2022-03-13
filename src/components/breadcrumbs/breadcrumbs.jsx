import React from 'react';
import {Link} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {nanoid} from 'nanoid';
import globalStyles from '../app/app.module.scss';
import styles from './breadcrumbs.module.scss';
import {BREADCRUMBS} from '../../const';

function BreadCrumbs () {
  const crumbs = useBreadcrumbs();

  return (
    <ul className={`${globalStyles['list']} ${styles['breadcrumbs']}`}>
      {
        crumbs.map((item) => (
          <li className={styles['breadcrumbs__item']} key={nanoid()}>
            {
              item.key === item.location.pathname
                ?
                <p className={styles['breadcrumbs__current-page']}>{BREADCRUMBS[item.key]}</p>
                :
                <Link className={`${globalStyles['link']} ${styles['breadcrumbs__link']}`} to={item.key}>
                  {BREADCRUMBS[item.key]}
                </Link>
            }
          </li>
        ))
      }
    </ul>
  );
}

export default BreadCrumbs;
