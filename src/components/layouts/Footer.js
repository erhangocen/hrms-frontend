import React from 'react'
import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer59391}>
        <div className="pb-5 mb-4">
          <div className={styles.container}>
            <div className="row align-items-center m-lg-3">
              <div className="col-lg-3">
                <form action="" className={styles.subscribe + " mb-4 mb-lg-0"}>
                  <div className={styles.formGroup+ " form-group"}>
                  <input type="email" className={styles.formControl + " form-control"} placeholder="Enter your email"/>
                  <button><span className="icon-keyboard_backspace"></span></button>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 text-lg-center">
                <ul className={styles.navLinks + " list-unstyled navLeft mb-4 mb-lg-0 " + styles.navLeft}>
                  <li><a href="/">Features</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Services</a></li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className={styles.navLinks + " " + styles.social + " " + styles.navRight + " list-unstyled text-lg-right "}>
                  <li><a href="/"><span className="icon-twitter"></span></a></li>
                  <li><a href="/"><span className="icon-instagram"></span></a></li>
                  <li><a href="/"><span className="icon-facebook"></span></a></li>
                  <li><a href="/"><span className="icon-pinterest"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className="row align-items-center m-lg-3">
            <div className={styles.siteLogo + " col-lg-4 text-lg-center order-1 order-lg-2 mb-3 mb-lg-0"}>
              <a href="/" className="m-0 p-0">RC</a>
            </div>
            <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
              <ul className={styles.navLinks + " " + styles.navLeft + " list-unstyled m-0"}>
                <li><a href="/">Terms</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-lg-4 text-lg-right order-3 order-lg-3">
              <p className="m-0 text-muted"><small>&copy; 2022. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
