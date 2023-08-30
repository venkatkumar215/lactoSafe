import React from 'react';
import SignUpForm from '../../component/SignUpComponent/signUpForm/signUpForm';
import styles from './signUp.module.scss'

const SignUp:React.FC = () => {
  return (
    <div className={styles.lactoSafe_signUp_Container}>
        <SignUpForm/>
    </div>
  )
}

export default SignUp;