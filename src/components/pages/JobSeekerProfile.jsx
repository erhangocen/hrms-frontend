import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import TextField from '@mui/material/TextField';
import JobSeekerService from "../../services/JobSeekerService";
import "../../styles/jobSeekerProfile.css";

export default function JobSeekerProfile() {
  const [jobSeeker, setJobSeker] = useState();
  const [photo, setPhoto] = useState();
  const [certificates, setCertificates] = useState([]);
  const [references, setReferences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [positions, setPositions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getCvByUserId(6).then((result) => {
      setJobSeker(result.data.data.jobSeeker);
      setPhoto(result.data.data.photo);
      setCertificates(result.data.data.jobSeekerCertificates);
      setReferences(result.data.data.jobSeekerReferences);
      setSkills(result.data.data.jobSeekerSkills);
      setExperiences(result.data.data.jobSeekerExperiences);
      setPositions(result.data.data.jobSeekerPositions);
      setLanguages(result.data.data.jobSeekerLanguages);
      setSchools(result.data.data.jobSeekerSchools);
    });
  });

  let localeYear = new Date().getFullYear();

  const edits = Array.from(document.getElementsByClassName("editing"));

  function editing() {
    edits.forEach((edit) => {
      edit.style.visibility = "visible";
    });
  }

  function endEditing() {
    edits.forEach((edit) => {
      edit.style.visibility = "hidden";
    });
  }

  return (
    <div>
      <div id="main-div">
        <main
          className="l-main bd-container"
          onMouseOver={editing}
          onMouseLeave={endEditing}
        >
          <div className="resume" id="area-cv">
            <div className="resume__left">
              <section className="home" id="home">
                <div className="home__container section bd-grid">
                  <div className="home__data bd-grid">
                    <img src={photo?.photoUrl} alt="" className="home__img" />
                    <h1 className="home__title">
                      <b>
                        {jobSeeker?.firstName} {jobSeeker?.lastName}
                      </b>
                    </h1>
                    <h3 className="home__profession">
                      {" "}
                      Year : {localeYear - jobSeeker?.birthYear}
                    </h3>
                  </div>
                  <div className="home_address bd-grid">
                    <span className="home__information">
                      <i className="bx bx-map home__icon"></i>{" "}
                      {jobSeeker?.city.cityName +
                        " - " +
                        jobSeeker?.city.countryName}
                    </span>
                    <span className="home__information">
                      <i className="bx bx-envelope home__icon"></i>{" "}
                      {jobSeeker?.email}
                    </span>
                    <span className="home__information">
                      <i className="bx bx-phone home__icon"></i>{" "}
                      {jobSeeker?.phoneNumber}
                    </span>
                  </div>
                </div>
                    <i className="bi bi-pencil-square main__edit__button editing" 
                      data-bs-toggle="modal" data-bs-target="#editContact"></i>           
              </section>

              <section className="profile section" id="profile">
                <div class="profile__header">
                  <i class="bi bi-pencil-square edit__button editing"></i>
                  <h2 class="section-title">Profile</h2>
                </div>
                <p className="profile__description">{jobSeeker?.coverLetter}</p>
              </section>

              <section className="social section" id="social">
                <div class="social__header">
                  <i class="bi bi-pencil-square edit__button editing"></i>
                  <h2 class="section-title">SOCIAL</h2>
                </div>
                <div className="social__container bd-grid">
                  <a href={jobSeeker?.githubLink} className="social__link">
                    <i className="bx bxl-github"> </i> @github
                  </a>
                  <a href={jobSeeker?.linkedinLink} className="social__link">
                    <i className="bx bxl-linkedin-square social__icon"></i>{" "}
                    @linkedin
                  </a>
                  <a href={jobSeeker?.instagramLink} className="social__link">
                    <i className="bx bxl-instagram social__icon"></i> @instagram
                  </a>
                  <a href={jobSeeker?.twitterLink} className="social__link">
                    <i className="bx bxl-twitter social__icon"></i> @twitter
                  </a>
                </div>
              </section>

              <section className="education section" id="educations">
                <div class="education__header">
                  <i class="bi bi-plus-square-fill add__button editing"></i>
                  <h2 class="section-title">Educations</h2>
                </div>
                <div className="education__container bd-grid">
                  {schools?.map((school) => (
                    <div className="education__content" key={school.id}>
                      <div className="education__time">
                        <span className="education__rounder"></span>
                        {schools.indexOf(school, -1) === -1 ? (
                          <span className="education__line"></span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="education__data bd-grid col-9">
                        <h3 className="education__title">
                          {school.departmentName}
                        </h3>
                        <span className="education__studies">
                          {school.schoolName}
                        </span>
                        <span className="education__year">
                          {school.startYear} -{" "}
                          {school.finishYear === 0 ? "..." : school.finishYear}
                        </span>
                      </div>
                      <div class="col-1">
                        <i class="bx bx-x delete__button editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="resume__right">
              <section className="experience section" id="experiences">
                <i class="bi bi-plus-square-fill add__button editing right_add"></i>
                <h2 className="section-title">Experiences</h2>
                <div className="experience__conteiner bd-grid">
                  {experiences?.map((experience) => (
                    <div className="experience__content" key={experience.id}>
                      <div className="experience__time">
                        <span className="experience__rounder"></span>
                        {experiences.indexOf(experience, -1) === -1 ? (
                          <span className="experience__line"></span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="experience__data bd-grid col-9">
                        <h3 className="experience__title">
                          {experience.jobPosition.positionName}
                        </h3>
                        <span className="experience__company">
                          From <b>{experience.startDate.split("T")[0]}</b> to{" "}
                          <b>
                            {experience.finishDate?.split("T")[0] ?? " ... "}
                          </b>{" "}
                          | <b>{experience.workplaceName}</b>
                        </span>
                        <p className="experience__description">
                          {experience.experienceExplanation}
                        </p>
                      </div>
                      <div class="col-1">
                        <i class="bx bx-x delete__button editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="certificate section" id="certificates">
                <i class="bi bi-plus-square-fill add__button editing right_add"></i>
                <h2 className="section-title">Certificates</h2>

                <div className="certificate__container bd-grid">
                  {certificates?.map((certificate) => (
                    <div className="certificate__content" key={certificate.id}>
                      <div className="col-9">
                        <h3 className="certificate__title">
                          {certificate.certificateTitle} (
                          {certificate.certificateYear})
                        </h3>
                      </div>

                      <div className="col-1">
                        <i class="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="references section" id="references">
                <i class="bi bi-plus-square-fill add__button editing right_add"></i>
                <h2 className="section-title">References</h2>

                <div className="references__container bd-grid">
                  {references?.map((reference) => (
                    <div
                      className="references__content bd-grid"
                      key={reference.id}
                    >
                      <div className="col-9">
                        <span className="references__subtitle">
                          {reference.referenceTitle}
                        </span>
                        <h3 className="references__title">
                          {reference.referenceName}
                        </h3>
                        <ul className="references__contect">
                          <li>{reference.referenceMail}</li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <i class="bx bx-x editing delete__button del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="languages section" id="languages">
                <i class="bi bi-plus-square-fill add__button editing language__add"></i>
                <h2 className="section-title">Languages</h2>
                <div className="languages__container">
                  <ul className="languages__content bd-grid">
                    {languages?.map((language) => (
                      <li className="languages__name" key={language.id}>
                        <span className="languages__circle"></span>{" "}
                        {language.language.languageName}
                        <div>
                          <span className="star-rate">
                            <Rating name="simple-controlled" value={language.level} readOnly />
                          </span>
                        </div>
                        <div class="col-1 rate__delete">
                          <i class="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="skills section" id="skills">
                <i class="bi bi-plus-square-fill add__button editing skills__add"></i>
                <h2 className="section-title">Skills</h2>
                <div className="skills__container">
                  <ul className="skills__content bd-grid">
                    {skills?.map((skill) => (
                      <li className="skills__name" key={skill.id}>
                        <div>
                          <span className="skills__circle"></span>{" "}
                          {skill.skill.skillName}
                        </div>
                        <div class="col-2">
                          <i class="bx bx-x editing del"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="positions section" id="positions">
                <i class="bi bi-plus-square-fill add__button editing positions__add"></i>
                <h2 className="section-title">Positions</h2>
                <div className="positions__container">
                  <ul className="positions__content bd-grid">
                    {positions?.map((position) => (
                      <li className="positions__name" key={position.id}>
                        <div>
                          <span className="positions__circle"></span>{" "}
                          {position.jobPosition.positionName}
                        </div>
                        <div class="col-2">
                          <i class="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>


      {/* DELETE MODAL */}
      <div id="deleteModal" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header flex-column">
              <div class="icon-box">
              <i class="bx bx-x"></i>
              </div>
              <h4 class="modal-title w-100" id="delete-title">Are you sure?</h4>
              <button type="button" class="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="modal fade" id="editContact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}


      <div id="editContact" class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header flex-column">
            <h4 class="editContact-title w-100">Editing Contact</h4>
              <TextField id="standard-basic" className="contactForm w-100" label="City" variant="outlined" />
              <TextField id="standard-basic" className="contactForm w-100" label="E-Mail" variant="outlined" />
              <TextField id="standard-basic" className="contactForm w-100" label="Phone Number" variant="outlined" />
              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
