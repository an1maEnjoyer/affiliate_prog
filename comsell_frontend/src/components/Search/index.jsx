import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../images/search.svg';
import closeIcon from '../../images/close.svg';

function Search({ searchValue, setSearchValue }) {
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={styles.search_box}>
      <img src={searchIcon} className={styles.search_icon} alt="search" />
      <input
        value={searchValue}
        onChange={onChangeHandler}
        className={styles.search_input}
        type="text"
        placeholder="Введите тег..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          src={closeIcon}
          className={styles.close_icon}
          alt="close"
        />
      )}
    </div>
  );
}

export default Search;
