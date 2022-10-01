import React from "react";
import styles from "./logInForm.module.scss";
import { Instagram, Google, Facebook } from "@mui/icons-material";
import LogInInputForm from "./logInInputForm";

const LogInForm: React.FC = () => {
  return (
    <div className={styles.lactoSafe_LogInForm}>
      <div className={styles.lactoSafe_LogInForm_Icon}>
        <p>Sign in with</p>
        <span className={styles.lactoSafe_LogInForm_Icon__span}>
          <Instagram fontSize="large"></Instagram>
          <Google fontSize="large"></Google>
          <Facebook fontSize="large"></Facebook>
        </span>
      </div>

      <div className={styles.lactoSafe_LineDivider}>
        <p>Or</p>
      </div>
      <LogInInputForm/>
    </div>
  );
};

export default LogInForm;
