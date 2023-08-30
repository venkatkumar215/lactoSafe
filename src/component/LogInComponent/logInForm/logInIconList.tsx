import React from 'react';
import styles from "./logInForm.module.scss";
import { Instagram, Google, Facebook } from "@mui/icons-material";

interface iconListProps{
    label?:string;
}


const LogInIconList:React.FC<iconListProps> = ({label,...props}) => {
  return (
    <>
    <div className={styles.lactoSafe_LogInForm_Icon}>
    <p>{label}</p>
    <span className={styles.lactoSafe_LogInForm_Icon__span}>
      <Instagram fontSize="large"></Instagram>
      <Google fontSize="large"></Google>
      <Facebook fontSize="large"></Facebook>
    </span>
  </div>

  <div className={styles.lactoSafe_LineDivider}>
    <p>Or</p>
  </div></>
  )
}

export default LogInIconList;