import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <h1>COMMSELL</h1>
      </div>
      <nav>
        <ul className={styles.header_list}>
          <li>
            <a href="#">клиенты</a>
          </li>
          <li>
            <a href="#">о нас</a>
          </li>
          <li>
            <a href="#">услуги</a>
          </li>
        </ul>
      </nav>
      <div className={styles.log_in}>
        <a>Войти</a>
      </div>
    </div>
  );
}

export default Header;
