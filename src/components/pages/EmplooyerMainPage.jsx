import React from 'react'
/* import  "../../styles/employerDefaultPage.css"; */

export default function EmplooyerMainPage() {
  return (
    <div className='main'>
      <main class="l-main bd-grid">
            <section class="home">
                <div class="home__data">
                    <h1 class="home__title">AirPods</h1>
                    <p class="home__description">Los AirPods te brindan una experiencia inalámbrica inigualable, pues ahora te ofrecen más horas 
                para hablar y traen un nuevo  estuche de carga <br/>inalámbrica.</p>
                </div>
    
                <div class="home__img">x
                    <img src="assets/img/airpod1.png" alt="" class="airpod1"/>
                    <img src="assets/img/airpod2.png" alt="" class="airpod2"/>
                </div>
    
                <div class="home__scroll">
                    <span class="home__scroll-text">Scroll down for more</span>
                    <a href="#l-section"><img src="https://github.com/erhangocen/hrms-frontend/blob/master/public/kisspng-computer-mouse-computer-keyboard-laptop-clip-art-5ae53232d02343.6400588415249700348526.png?raw=true" alt="" class="home__scroll-icon"/></a>
                </div>
            </section>

            <section class="l-section" id="l-section">
                <div class="details">
                    <div class="details__content">
                        <div class="details__box">
                            <span class="details__initial">Más de</span>
                            <h3 class="details__title">24<span> h</span></h3>
                            <p class="details__description">de batería con<br/> el estuche de carga</p>
                        </div>
                        <div class="details__box">
                            <span class="details__initial">Hasta</span>
                            <h3 class="details__title">5<span> h</span></h3>
                            <p class="details__description">de batería con<br/> una sola carga</p>
                        </div>
                        <div class="details__box">
                            <span class="details__initial">Sólo</span>
                            <h3 class="details__title">15<span> min</span></h3>
                            <p class="details__description">de carga equivalen<br/> a hasta 3 horas de<br/> audio</p>
                        </div>
                    </div>

                    <div class="details__img">
                        <img src="assets/img/airpods.png" alt="" class="airpods"/>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
