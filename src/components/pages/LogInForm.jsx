import React from 'react'


export default function LogInForm() {
  return (
    <form onsubmit="event.preventDefault()" class="box"> 
      <h1>Login</h1> 
      <p class="text-muted mt-3"> Please enter your email and password!</p> 
      <div class="form__box mt-3">
          <input type="email" class="form__input" placeholder="Enter Email"/>
      </div>
      <div class="form__box mt-4">
        <input type="password" class="form__input" placeholder="Enter Password"/>
      </div>

      <div class="form__button">
          <input type="Submit" class="form__submit" value="Sign Up"/>
      </div>
      <div class="col-md-12"> 
        <ul class="social-network social-circle"> 
          <li>
            <a href="#" class="icoFacebook" title="Facebook">
              <i class='bx bxl-facebook'></i>
            </a>
          </li> 
          <li>
            <a href="#" class="icoTwitter" title="Twitter">
              <i class='bx bxl-twitter' ></i>
            </a>
          </li> 
          <li>
            <a href="#" class="icoGoogle" title="Google +">
              <i class='bx bxl-google' ></i>
            </a>
          </li> 
        </ul> 
      </div> 
    </form> 
  )
}
