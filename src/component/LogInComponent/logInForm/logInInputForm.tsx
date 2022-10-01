import React from 'react';
import { Box } from "@mui/system";
import {Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import styles from './logInForm.module.scss';
import CustomLogInTextField from '../../Common/CustomTextFeildLogIn/LogInCustomTextField';



const LogInInputForm:React.FC = () => {
  return (
<Box component="form" >
    <div className={styles.lactoSafe_InputForm_Input}>
    <CustomLogInTextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        
      />
    </div>
    <div>
      <CustomLogInTextField
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />
    </div>
    <div>
     <FormControlLabel control={ <Checkbox /> } label='RememberMe'/>   </div>
    <div className={styles.latco_LogIn_Button}>
      <Button type="submit"  fullWidth variant="contained">
        Sing In
      </Button>
    </div>
  </Box>
  )
}

export default LogInInputForm