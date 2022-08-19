import React from 'react'
import LogInForm from '../pages/LogInForm'
import RegisterForm from '../pages/RegisterForm'
import styles from "../../styles/loginRegister.module.css";
import TextField from '@mui/material/TextField';


export default function Form() {
  return (
    <div>
      <div class="container"> 
        <div class="row"> 
          <div class="col-md-6"> 
            <div class={styles.loginCard}> 
              <form onsubmit="event.preventDefault()" class={styles.loginBox}> 

                {/* <LogInForm/> */}
                <RegisterForm/>

                <TextField
                  id="outlined-required"
                  className="registerForm w-100 mt-4" 
                  label="Email"
                  variant="outlined"
                  autoComplete="off"
              />   
              <TextField
                id="outlined-required"
                className="registerForm w-100 mt-4" 
                label="Password"
                variant="outlined"
                autoComplete="off"
              /> 
              <div class={styles.form__button}>
                <input type="Submit" class={styles.form__submit} value="Sign Up"/>
              </div>
              <div class="col-md-12"> 
        <ul class={styles.loginSocialNetwork + " " + styles.socialCircle}> 
          <li>
            <a href="#" class={styles.icoFacebook} title="Facebook">
              <i class='bx bxl-facebook'></i>
            </a>
          </li> 
          <li>
            <a href="#" class={styles.icoTwitter} title="Twitter">
              <i class='bx bxl-twitter' ></i>
            </a>
          </li> 
          <li>
            <a href="#" class={styles.icoGoogle} title="Google +">
              <i class='bx bxl-google' ></i>
            </a>
          </li> 
        </ul> 
      </div> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
