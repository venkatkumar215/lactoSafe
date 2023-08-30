import React from "react";
import styles from "./logInForm.module.scss";
import LogInInputForm from "./logInInputForm";
import LogInIconList from "./logInIconList";

const LogInForm: React.FC = () => {
  return (
    <div className={styles.lactoSafe_LogInForm}>
      <LogInIconList label={'Sign In with'}/>
      <LogInInputForm/>
    </div>
  );
};

export default LogInForm;
