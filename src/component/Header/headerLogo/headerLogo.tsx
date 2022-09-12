import React from 'react';
import logo from '../../../asset/img/logo.png'
import styles from './headerLogo.module.scss'


const HeaderLogo:React.FC= () => {
  return (
    <div className={styles.lactoSafe_Logo}>
      <img src={logo} alt='Logo'></img>
    </div>
  )
}

export default HeaderLogo;
