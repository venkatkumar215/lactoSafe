import React, { useState } from 'react';
import { Box } from "@mui/system";
import { Button,  Checkbox, FormControlLabel } from "@mui/material";
import styles from './logInForm.module.scss';
import CustomLogInTextField from '../../Common/CustomTextFeildLogIn/LogInCustomTextField';
import { useNavigate } from 'react-router';
import axios from 'axios';



const LogInInputForm: React.FC = () => {

  const navigate =useNavigate();
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn=()=>{
    console.log('entered')
    const URL = 'http://localhost:8080/lactosafe/v1/apis/fetchrole?email=pragati.mrinal@gmail.com';
    const config = {
      headers:{
        "X-Client-Id": "fake-id",
      Authorization: "Bearer fakeAuthToken",
      "Access-Control-Allow-Origin":'*'
      }
    };
    const request = 
    axios.get(URL,config).then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log('error',error)
    })
  }
  return (
    <div  >
      <div className={styles.lactoSafe_InputForm_Input}>
        <CustomLogInTextField
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          onChange={(event)=>setEmail(event.target.value)}

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
          onChange={(event)=>setPassword(event.target.value)}
        />
      </div>
      <div>
        <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label='RememberMe' />  
        
         </div>
      <div className={styles.latco_LogIn_Button}>
        <Button type="submit" onClick={()=>signIn()} fullWidth variant="contained">
          Sing In
        </Button>
      </div>

      <div className={styles.lacto_SignUp_Content}>

        <h5>Donot have Account ?  <Button variant="text" sx={{textTransform: 'capitalize'}} onClick={()=>navigate('/signUp')}  color='error'>Register</Button></h5>
       

      </div>
    </div>
  )
}

export default LogInInputForm;