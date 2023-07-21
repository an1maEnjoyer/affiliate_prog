import React, { useState } from 'react';
import SortVariants from '../SortVariants';
import styles from './Sort.module.scss';
import { ReactComponent as UpArrowIcon } from '../../images/up_arrow.svg';
import { ReactComponent as DownArrowIcon } from '../../images/arrow_down.svg';

const Sort = ({ listOfVariants, sortingAspect, ...props }) => {
  const [activeSort, setActiveSort] = useState(false);

  const handleClick = () => {
    setActiveSort(!activeSort);
  };

  return (
    <div className={styles.sort}>
      <div className={styles.sort_label} onClick={handleClick}>
        <props.leftIcon className={styles.left_icon} />
        <span>{sortingAspect}</span>
        <UpArrowIcon className={`${styles.arrow} ${activeSort ? styles.hidden : styles.visible}`} />
        <DownArrowIcon
          className={`${styles.arrow} ${activeSort ? styles.visible : styles.hidden}`}
        />
      </div>
      {activeSort && <SortVariants listOfVariants={listOfVariants} />}
    </div>
  );
};

export default Sort;
