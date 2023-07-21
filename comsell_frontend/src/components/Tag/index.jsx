import React from 'react';
import styles from './Tag.module.scss';

function Tag({ title, onClick }) {
  return (
    <div className={styles.tag} onClick={onClick}>
      <span>{title}</span>
    </div>
  );
}

export default Tag;
