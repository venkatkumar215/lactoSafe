import React from 'react';
import LogInIconList from '../../LogInComponent/logInForm/logInIconList';
import styles from './signUpForm.module.scss';
import SignUpInputForm from './signUpInputForm';

const SignUpForm:React.FC = () => {
  return (
    <div className={styles.lactoSafe_SignUpForm}>
      <LogInIconList label={'Sign Up with'}/>
      <SignUpInputForm/>
    </div>
  )
}

export default SignUpForm;