import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/swiper-bundle.min.css";
import "../../styles/defaultMainPage.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Thumbs } from "swiper";

 

export default function DefaultMainPage() {

    const [activeThumb,setActiveThumb] = useState()
    
    /*==================== GSAP ANIMATION ====================*/
    const controlImg = document.querySelectorAll('.controls__img')
    
    function scrollAnimation(){
        gsap.from('.islands__subtitle', {opacity: 0, duration: .1, delay: .1, y: -20})
        gsap.from('.islands__title', {opacity: 0, duration: .2, delay: .2, y: -20})
        gsap.from('.islands__description', {opacity: 0, duration: .3, delay: .3, y: -20})
        gsap.from('.islands__button', {opacity: 0, duration: .4, delay: .4, y: -20})
    }
    
    controlImg.forEach(c => c.addEventListener('click', scrollAnimation))

  return (
    <main class='main'>
            <div class="swiper-container gallery-top">
                <div class="swiper-wrapper">
                    <Swiper 
                        style={{all: 'unset'}} 
                        grabCursor={true} 
                        modules={[Navigation, Thumbs]} 
                        thumbs={{swiper:activeThumb}}
                        direction= "horizontal"
                        mousewheel={{sensitivity:1}}
                        navigation={{
                            prevEl: '.prev',
                            nextEl: '.next',
                        }}>
                            <SwiperSlide style={{all: 'unset'}}>
                            <div 
                                class="islands swiper-slide">
                            <img src="https://github.com/erhangocen/hrms-frontend/blob/master/public/defaultMainPageJobSeekerPart3.png?raw=true" alt="" class="islands__bg"/>

                            <div class="islands__container bd-container">
                                <div class="islands__data">
                                    <h2 class="islands__subtitle">kariyer.net</h2>
                                    <h1 class="islands__title">JOB SEEKERS</h1>
                                    <p class="islands__description">It is an Indonesian island known and beautiful for its lush active volcanic mountains.</p>
                                    <a href="#" class="islands__button">Continue As An Employee<i class='bx bx-right-arrow-alt islands__button-icon'></i></a>
                                </div>
                            </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide style={{all: 'unset'}}> <div class="islands swiper-slide w-100" style={{position:"relative", left:"100%"}}>
                            <img src="https://github.com/erhangocen/hrms-frontend/blob/master/public/defaultMageEmplooyerPart3.png?raw=true" alt="" class="islands__bg"/>

                            <div class="islands__container bd-container">
                                <div class="islands__data">
                                    <h2 class="islands__subtitle">kariyer.net</h2>
                                    <h1 class="islands__title">EMPLOYERS</h1>
                                    <p class="islands__description">It is an Indonesian island known and beautiful for its lush active volcanic mountains.</p>
                                    <a href="#" class="islands__button">Continue As An Employer<i class='bx bx-right-arrow-alt islands__button-icon'></i></a>
                                </div>
                            </div>
                            </div>
                            </SwiperSlide>
                    </Swiper>
                    
                </div>
            </div>
            <div class="controls gallery-thumbs">
                
                    <div class="controls__container swiper-wrapper">
                        <Swiper style={{all: 'unset'}}
                            modules={[Navigation,Thumbs]}
                            onSwiper={setActiveThumb}>
                           <SwiperSlide style={{all: 'unset'}} className="prev thumb__swip">
                                <img src="https://github.com/erhangocen/hrms-frontend/blob/master/public/employee.jpg?raw=true" style={{width:"50%", borderRadius:"20%", marginLeft:"9%"}} alt="" class="controls__img swiper-slide"/>
                            </SwiperSlide>
                           <SwiperSlide style={{all: 'unset'}} className="next thumb__swip">
                                <img src="https://github.com/erhangocen/hrms-frontend/blob/master/public/employer.jpg?raw=true" style={{width:"50%", borderRadius:"20%", marginLeft:"18%"}} alt="" class="controls__img swiper-slide"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
            </div>
            
    </main>
  )
}
