import React from "react";
import LogInRegisterButtons from "./LogInRegisterButtons";
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";
import "../../styles/navi.css";
import $ from "jquery"


export default function Navi() {

  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

  let a = false;

  return (
     <div className="w-100 raw">
       <nav class="navbar navbar-expand-lg navbar-light pt-2">
        <div className="col-9">
          <a class="navbar-brand nav-texts m-4" href="#">
            <img
              src="https://yt3.ggpht.com/ytc/AMLnZu96F20-p5_kjvNwEsHkmY_y1FvRdVENYBwlkyVhkQ=s900-c-k-c0x00ffffff-no-rj"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            <span className="m-lg-2">
              kariyer.net
            </span>
          </a>     
          <SearchBar/>
        </div>

        <div className="col-6 float-right">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="mr-auto"></div>
          <ul class="navbar-nav my-2 my-lg-0" style={{position:"relative", right:"50px"}}>
            <li class="nav-item active">
              <a class="nav-link nav-texts" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link nav-texts" href="#">
                Notifications <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link nav-texts" href="#">
                Contacts <span class="sr-only">(current)</span>
              </a>
            </li>
            {
              a ? <li class="nav-item active">
                    <LogInRegisterButtons />
                  </li>
                : <li class="nav-item dropdown">
                    <ProfileButton/>
                  </li>
            }
          </ul>
        </div>
        </div>

         
      </nav> 
    </div> 
    
  );
}
