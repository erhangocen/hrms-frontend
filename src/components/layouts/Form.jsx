import React from 'react'
import LogInForm from '../pages/LogInForm'
import RegisterForm from '../pages/RegisterForm'
import "../../styles/loginRegister.css";

export default function Form() {
  return (
    <div>
      <div class="container"> 
        <div class="row"> 
          <div class="col-md-6"> 
            <div class="login-card"> 
              {/* <LogInForm/> */}
              <RegisterForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
