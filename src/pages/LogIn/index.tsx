import React from 'react';
import styles from './logIn.module.scss';
import logInBckImg from '../../asset/img/process.jpg';
import LogInForm from '../../component/LogInComponent/logInForm/logInForm';

const LogIn:React.FC = () => {
  return (
    <div className={styles.lactoSafe_logIn_Container}>
      {/* <im<LogInFormg src={logInBckImg}></img> */}
        <LogInForm/>
       
    </div>
  )
}

export default LogIn;
