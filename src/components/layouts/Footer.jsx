import React from 'react'
import "../../styles/footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="footer-59391">
        <div class="pb-5 mb-4">

          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <form action="" class="subscribe mb-4 mb-lg-0">
                  <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter your email"/>
                  <button><span class="icon-keyboard_backspace"></span></button>
                  </div>
                </form>
              </div>
              <div class="col-lg-6 text-lg-center">
                <ul class="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                  <li><a href="/">Features</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Services</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <ul class="list-unstyled nav-links social nav-right text-lg-right">
                  <li><a href="/"><span class="icon-twitter"></span></a></li>
                  <li><a href="/"><span class="icon-instagram"></span></a></li>
                  <li><a href="/"><span class="icon-facebook"></span></a></li>
                  <li><a href="/"><span class="icon-pinterest"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
              <a href="/" class="m-0 p-0">RC</a>
            </div>
            <div class="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
              <ul class="list-unstyled nav-links m-0 nav-left">
                <li><a href="/">Terms</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            
            <div class="col-lg-4 text-lg-right order-3 order-lg-3">
              <p class="m-0 text-muted"><small>&copy; 2022. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
