import React from 'react'
import  '../../styles/jobSeekerProfile.css'


export default function JobSeekerProfile() {
  return (
      <div id="main-div">
        <main className="l-main bd-container">
            <div className="resume" id="area-cv">
                <div className="resume__left">
                    <section className="home" id="home">

                        <div className="home__container section bd-grid">
                            <div className="home__data bd-grid">
                                <img src="https://raw.githubusercontent.com/erhangocen/cv/master/assets/img/perfil.jpg"
                                    alt="" className="home__img"/>
                                <h1 className="home__title"><b>Erhan Göcen</b> </h1>
                                <h3 className="home__profession">Web developer</h3>


                            </div>
                            <div className="home_address bd-grid">
                                <span className="home__information">
                                    <i className="bx bx-map home__icon"></i> Istanbul-Turkey
                                </span>
                                <span className="home__information">
                                    <i className="bx bx-envelope home__icon"></i> erhangocenn@gmail.com
                                </span>
                                <span className="home__information">
                                    <i className="bx bx-phone home__icon"></i> 538-401-45-80
                                </span>
                            </div>
                        </div>

                    </section>
                    <section className="profile section" id="profile">
                        <h2 className="section-title">Profile</h2>
                        <p className="profile__description">I am Erhan, 18 years. I am junior full-stack web developer for 3
                            year. I experienced with all stages of the development cycle for dynamic web project.
                            Well-versed in numerous programming languages. I am experienced in OOP and AOP. I am
                            developing projects with them. I also develop myself in the web3.0 area.</p>
                    </section>

                    <section className="social section" id="social">
                        <h2 className="section-title">SOCIAL</h2>

                        <div className="social__container bd-grid">

                            <a target="_blank" href="https://github.com/erhangocen" className="social__link">
                                <i className="bx bxl-github"> </i> @github
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/erhan-gocen-0854bb206"
                                className="social__link">
                                <i className="bx bxl-linkedin-square social__icon"></i> @linkedin
                            </a>
                            <a target="_blank" href="https://www.instagram.com/eranngocen/" className="social__link">
                                <i className="bx bxl-instagram social__icon"></i> @instagram
                            </a>
                            <a target="_blank" href="https://twitter.com/erhanngocen" className="social__link">
                                <i className="bx bxl-twitter social__icon"></i> @twitter
                            </a>
                        </div>
                    </section>
                    <section className="education section" id="educations">
                        <h2 className="section-title">Educations</h2>



                        <div className="education__container bd-grid">

                            <div className="education__content">
                                <div className="education__time">
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                                <div className="education__data bd-grid">
                                    <h3 className="education__title">Math</h3>
                                    <span className="education__studies">Gebze Technical University</span>
                                    <span className="education__year">2022 - 2026</span>
                                </div>
                            </div>


                            <div className="education__content">
                                <div className="education__time">
                                    <span className="education__rounder"></span>
                                    <span className="education__line"></span>
                                </div>
                                <div className="education__data bd-grid">
                                    <h3 className="education__title">Math - Science</h3>
                                    <span className="education__studies">Istanbul Ataturk High School</span>
                                    <span className="education__year">2018 - 2022</span>
                                </div>
                            </div>

                            <div className="education__content">
                                <div className="education__time">
                                    <span className="education__rounder"></span>
                                </div>
                                <div className="education__data bd-grid">
                                    <h3 className="education__title">Primary Education</h3>
                                    <span className="education__studies">Sehit Ogretmenler Primary School</span>
                                    <span className="education__year">2010 - 2018</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="resume__right">
                    <section className="experience section" id="experiences">
                        <h2 className="section-title">Experiences</h2>

                        <div className="experience__conteiner bd-grid">
                            <div className="experience__content">
                                <div className="experience__time">
                                    <span className="experience__rounder"></span>
                                    {/* <span className="experience__line"></span>  */}
                                </div>

                                <div className="experience__data bd-grid">
                                    <h3 className="experience__title">Web Developer</h3>
                                    <span className="experience__company">From 2020 to 2022 | Freelence</span>
                                    <p className="experience__description">I web development for 3 year. I'm freelancing on
                                        this area.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="certificate section" id="certificates">
                        <h2 className="section-title">Certificates</h2>

                        <div className="certificate__container bd-grid">
                            <div className="certificate__content">
                                <h3 className="certificate__title">BTK Academy Python Certificate Of Attendance (2022)</h3>
                            </div>
                            <div className="certificate__content">
                                <h3 className="certificate__title">BTK Academy Javascript Certificate Of Attendance (2021)
                                </h3>
                            </div>
                            <div className="certificate__content">
                                <h3 className="certificate__title">BTK Academy CSS Certificate Of Attendance (2021)</h3>
                            </div>
                        </div>
                    </section>
                    <section className="references section" id="references">
                        <h2 className="section-title">References</h2>

                        <div className="references__container bd-grid">
                            <div className="references__content bd-grid">
                                <span className="references__subtitle">Software Developer</span>
                                <h3 className="references__title">Engin Demiroğ</h3>
                                <ul className="references__contect">
                                    <li>Email: engindemirog@gmail.com</li>
                                    <li>Linkedin: linkedin.com/in/engindemirog</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="languages section" id="languages">
                        <h2 className="section-title">Languages</h2>
                        <div className="languages__container">
                            <ul className="languages__content bd-grid">
                                <li className="languages__name">
                                    <span className="languages__circle"></span> Turkish
                                </li>
                                <li className="languages__name">
                                    <span className="languages__circle"></span> English
                                </li>
                                <li className="languages__name">
                                    <span className="languages__circle"></span> Germany
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="skills section" id="skills">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills__content bd-grid">
                            <ul className="skills_data">
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Html
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Css
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Javascript
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Angular
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>React
                                </li>
                            </ul>
                            <ul className="skills_data">
                                <li className="skills__name">
                                    <span className="skills__circle"></span>C#
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Java
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>Python
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>SQL
                                </li>
                                <li className="skills__name">
                                    <span className="skills__circle"></span>E-Commerce
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="interests section">
                        <h2 className="section-title">Interests</h2>

                        <div className="interests__container bd-grid">
                            <div className="interest__content">
                                <i className="bx bx-headphone interest__icon"></i>
                                <span className="interest__name">Music</span>
                            </div>
                            <div className="interest__content">
                                <i className="bx bx-film interest__icon"></i>
                                <span className="interest__name">Movie</span>
                            </div>
                            <div className="interest__content">
                                <i className="bx bxs-plane-alt interest__icon"></i>
                                <span className="interest__name">Travel</span>
                            </div>
                            <div className="interest__content">
                                <i className="bx bxs-palette interest__icon"></i>
                                <span className="interest__name">Design</span>
                            </div>
                            <div className="interest__content">
                                <i className="bx bx-book interest__icon"></i>
                                <span className="interest__name">Read</span>
                            </div>
                            <div className="interest__content">
                                <i className="bx bx-code-alt interest__icon"></i>
                                <span className="interest__name">Coding</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
  )
}
