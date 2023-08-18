import React from 'react'

import styles from './Footer.module.css'

type Props = {}

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>Minha lista</span> @ 2023
        </p>
      </footer>
    </div>
  )
}

export default Footer