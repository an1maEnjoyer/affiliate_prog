import React, { useContext, useState } from 'react';
import styles from './SortVariants.module.scss';

const SortVariants = ({ listOfVariants }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.sort_container}>
      <ul>
        {listOfVariants.map((item, index) => (
          <li
            key={index}
            className={index === activeIndex ? styles.active : ''}
            onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortVariants;
