import { Box, Button } from "@mui/material";
import React from "react";
import CustomLogInTextField from "../../Common/CustomTextFeildLogIn/LogInCustomTextField";
import styles from "./signUpForm.module.scss";
import axios from 'axios';

const SignUpInputForm: React.FC = () => {
  const signUp=()=>{
    console.log('entered')
    const URL = 'http://localhost:8080/lactosafe/v1/apis/signup';
    const request = 
    axios.post(URL,{
      email:'emailId',
      pass:'password'
    }).then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log('error',error)
    })
  }
 
  return (
    <Box component="form">
      <div className={styles.lactoSafe_SignUp_InputForm_Input}>
        <CustomLogInTextField
          id="firstName"
          name="firstName"
          label="FirstName"
          type="text"
          variant="outlined"
          
        />
       
        <CustomLogInTextField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          variant="outlined"
        />
      </div>

      <div className={styles.lactoSafe_SignUp_InputForm_Input}>
        <CustomLogInTextField
          id="email"
          name="email"
          label="Email"
          type="text"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className={styles.lactoSafe_SignUp_InputForm_Input}>
        <CustomLogInTextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
      </div>

      <div className={styles.latco_LogIn_Button}>
        <Button type="submit" fullWidth variant="contained">
          Sing Up
        </Button>
      </div>
    </Box>
  );
};

export default SignUpInputForm;
