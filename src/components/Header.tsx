import React from "react";

import styles from './Header.module.css'

const Header = () => {
    return (
      <div>
        <header className={styles.header}>
          <div>
            <h1>Minhas notas</h1>
          </div>
        </header>
      </div>
    );
  };
  
  export default Header;