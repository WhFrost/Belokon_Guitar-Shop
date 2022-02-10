import React from 'react';
import globalStyles from '../app/app.module.scss';

function PageNotFound () {
  return (
    <>
      <h1 className={globalStyles['title']}>404: Page Not Found</h1>
      <p>Страница не найдена</p>
    </>
  );
}

export default PageNotFound;
