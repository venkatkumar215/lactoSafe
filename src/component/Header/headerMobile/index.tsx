import React from 'react';
import HeaderList from '../headerList';
import HeaderLogo from '../headerLogo/headerLogo';
import styles from './headerMobile.module.scss';

interface Props {
 
}

const HeaderMobile:React.FC<Props> = () => {

  return (    
   <div className={styles.lactoSafe_MobileHeader}>
    <HeaderList/>
    <HeaderLogo/>
   </div>  )
}

export default HeaderMobile;
