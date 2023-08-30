import React from 'react';
import styles from './logIn.module.scss';
import LogInForm from '../../component/LogInComponent/logInForm/logInForm';

const LogIn:React.FC = () => {
  return (
    <div className={styles.lactoSafe_logIn_Container}>
        <LogInForm/>       
    </div>
  )
}

export default LogIn;
