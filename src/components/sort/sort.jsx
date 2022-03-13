import React, {useState} from 'react';
import globalStyles from '../app/app.module.scss';
import styles from './sort.module.scss';
import Button from '../button/button';
import Svg from '../svg/svg';

function Sort () {
  const [isLowToHigh, setIsLowToHigh] = useState(false);
  const [isHighToLow, setIsHighToLow] = useState(false);

  const handleSortUpClick = () => {
    setIsLowToHigh(true);
    setIsHighToLow(false);
  };
  const handleSortDownClick = () => {
    setIsLowToHigh(false);
    setIsHighToLow(true);
  };

  return (
    <section className={styles['sort']}>
      <div className={styles['sort__wrapper']}>
        <h3 className={`${globalStyles['title']} ${styles['sort__title']}`}>
          Сортировать:
        </h3>
        <Button modificator={'sort'} text={'по цене'}/>
        <Button modificator={'sort'} text={'по популярности'}/>
        <Button
          modificator={`${isLowToHigh ? 'sort-up-active' : 'sort-up'}`}
          text={'по возрастанию'}
          isVisibleText={false}
          element={<Svg icon={'arrow-up'} />}
          onClick={handleSortUpClick}
        />
        <Button
          modificator={`${isHighToLow ? 'sort-down-active' : 'sort-down'}`}
          text={'по убыванию'}
          isVisibleText={false}
          element={<Svg icon={'arrow-down'} />}
          onClick={handleSortDownClick}
        />
      </div>
    </section>
  );
}

export default Sort;
