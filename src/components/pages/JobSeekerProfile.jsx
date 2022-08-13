import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import JobSeekerService from "../../services/JobSeekerService";
import CityService from "../../services/CityService";
import SkillService from "../../services/SkillService";
import LanguageService from "../../services/LanguageService";
import JobPositionService from "../../services/JobPositionService";
import  "../../styles/jobSeekerProfile.css";

export default function JobSeekerProfile() {
  const [jobSeeker, setJobSeeker] = useState();
  const [photo, setPhoto] = useState();
  const [certificates, setCertificates] = useState([]);
  const [references, setReferences] = useState([]);
  const [jobSeekerSkills, setJobSeekerSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [jobSeekerPositions, setJobSeekerPositions] = useState([]);
  const [jobSeekerLanguages, setJobSeekerLanguages] = useState([]);
  const [schools, setSchools] = useState([]);

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([])
  const [languages, setLanguages] = useState([])
  const [skills, setSkills] = useState([])

  const [star, setStar] = React.useState(0);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getCvByUserId(6).then((result) => {
      setJobSeeker(result.data.data.jobSeeker);
      setPhoto(result.data.data.photo);
      setCertificates(result.data.data.jobSeekerCertificates);
      setReferences(result.data.data.jobSeekerReferences);
      setJobSeekerSkills(result.data.data.jobSeekerSkills);
      setExperiences(result.data.data.jobSeekerExperiences);
      setJobSeekerPositions(result.data.data.jobSeekerPositions);
      setJobSeekerLanguages(result.data.data.jobSeekerLanguages);
      setSchools(result.data.data.jobSeekerSchools);
    });
  });

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAllCities().then((result) => {
      setCities(result.data.data);
    });
  });

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getNoHaveJobPositions(6).then((result) => {
      setJobPositions(result.data.data);
    });
  });

  useEffect(() => {
    let languageService = new LanguageService();
    languageService.getNoHaveLanguages(6).then((result) => {
      setLanguages(result.data.data);
    });
  });

  useEffect(() => {
    let skillService = new SkillService();
    skillService.getNoHaveSkills(6).then((result) => {
      setSkills(result.data.data);
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


  let currentYear = new Date().getFullYear();
  let years = [];
  for(currentYear = 2022; currentYear>1950; currentYear--){
    years.push(currentYear)
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
                    <img src={photo?.photoUrl} className="home__img" />
                    <h1 className="home__title">
                      <b>
                        {jobSeeker?.firstName} {jobSeeker?.lastName}
                      </b>
                    </h1>
                    <h3 className="home__profession">
                      {" "}
                      Age : {localeYear - jobSeeker?.birthYear}
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
                <i
                  className="bi bi-pencil-square main__edit__button editing"
                  data-bs-toggle="modal"
                  data-bs-target="#editContact"
                ></i>
              </section>

              <section className="profile section" id="profile">
                <div className="profile__header">
                  <i
                    className="bi bi-pencil-square edit__button editing"
                    data-bs-toggle="modal"
                    data-bs-target="#editCoverLetter"
                  ></i>
                  <h2 className="section-title">Profile</h2>
                </div>
                <p className="profile__description">{jobSeeker?.coverLetter}</p>
              </section>

              <section className="social section" id="social">
                <div className="social__header">
                  <i
                    className="bi bi-pencil-square edit__button editing"
                    data-bs-toggle="modal"
                    data-bs-target="#editSocials"
                  ></i>
                  <h2 className="section-title">SOCIAL</h2>
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
                <div className="education__header">
                  <i
                    className="bi bi-plus-square-fill add__button editing"
                    data-bs-toggle="modal"
                    data-bs-target="#addSchool"
                  ></i>
                  <h2 className="section-title">Educations</h2>
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
                      <div className="col-1">
                        <i
                          className="bx bx-x delete__button editing del"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="resume__right">
              <section className="experience section" id="experiences">
                <i
                  className="bi bi-plus-square-fill add__button editing right_add"
                  data-bs-toggle="modal"
                  data-bs-target="#addExperience"
                ></i>
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
                      <div className="col-1">
                        <i
                          className="bx bx-x delete__button editing del"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="certificate section" id="certificates">
                <i className="bi bi-plus-square-fill add__button editing right_add"
                    data-bs-toggle="modal"
                    data-bs-target="#addCertificate"></i>
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
                        <i
                          className="bx bx-x editing del"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="references section" id="references">
                <i className="bi bi-plus-square-fill add__button editing right_add"
                    data-bs-toggle="modal"
                    data-bs-target="#addReference"></i>
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
                        <i
                          className="bx bx-x editing delete__button del"
                          data-bs-target="#deleteModal"
                          data-bs-toggle="modal"
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="languages section" id="languages">
                <i className="bi bi-plus-square-fill add__button editing language__add"
                    data-bs-toggle="modal"
                    data-bs-target="#addLanguage"></i>
                <h2 className="section-title">Languages</h2>
                <div className="languages__container">
                  <ul className="languages__content bd-grid">
                    {jobSeekerLanguages?.map((language) => (
                      <li className="languages__name" key={language.id}>
                        <span className="languages__circle"></span>{" "}
                        {language.language.languageName}
                        <div>
                          <span className="star-rate">
                            <Rating
                              name="simple-controlled"
                              value={language.level}
                              readOnly
                            />
                          </span>
                        </div>
                        <div className="col-1 rate__delete">
                          <i
                            className="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"
                          ></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="skills section" id="skills">
                <i className="bi bi-plus-square-fill add__button editing skills__add"
                    data-bs-toggle="modal"
                    data-bs-target="#addSkill"></i>
                <h2 className="section-title">Skills</h2>
                <div className="skills__container">
                  <ul className="skills__content bd-grid">
                    {jobSeekerSkills?.map((skill) => (
                      <li className="skills__name" key={skill.id}>
                        <div>
                          <span className="skills__circle"></span>{" "}
                          {skill.skill.skillName}
                        </div>
                        <div className="col-2">
                          <i
                            className="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"
                          ></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="positions section" id="positions">
                <i className="bi bi-plus-square-fill add__button editing positions__add"
                    data-bs-toggle="modal"
                    data-bs-target="#addPosition"></i>
                <h2 className="section-title">Positions</h2>
                <div className="positions__container">
                  <ul className="positions__content bd-grid">
                    {jobSeekerPositions?.map((position) => (
                      <li className="positions__name" key={position.id}>
                        <div>
                          <span className="positions__circle"></span>{" "}
                          {position.jobPosition.positionName}
                        </div>
                        <div className="col-2">
                          <i
                            className="bx bx-x editing del"
                            data-bs-target="#deleteModal"
                            data-bs-toggle="modal"
                          ></i>
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
      <div
        id="deleteModal"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <div className="icon-box">
                <i className="bx bx-x"></i>
              </div>
              <h4 className="modal-title w-100" id="delete-title">
                Are you sure?
              </h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Do you really want to delete these records? This process cannot
                be undone.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EDİT CONTACT MODAL  */}
      <div
        id="editContact"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Edit Contact</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <select
                className="form-select mb-4"
                aria-label="Default select example"
              >
                {cities?.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city.cityName + " - " + city.countryName}
                  </option>
                ))}
              </select>
              {jobSeeker ? (
                <div>
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="E-Mail"
                    defaultValue={jobSeeker.email}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Phone Number"
                    defaultValue={jobSeeker?.phoneNumber}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="E-Mail"
                    defaultValue={jobSeeker.email}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Phone Number"
                    defaultValue={jobSeeker?.phoneNumber}
                    variant="outlined"
                  />
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDİT Cover Letter MODAL  */}
      <div
        id="editCoverLetter"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Edit Cover Letter</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              {jobSeeker ? (
                <textarea
                  className="form-control w-100 coverLetter"
                  id="exampleFormControlTextarea1"
                  defaultValue={jobSeeker.coverLetter}
                  rows="10"
                ></textarea>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDİT Social Icons */}
      <div
        id="editSocials"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Edit Contact</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Github"
                    defaultValue={jobSeeker.githubLink}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Linkedin"
                    defaultValue={jobSeeker.linkedinLink}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Instagram"
                    defaultValue={jobSeeker.instagramLink}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Twitter"
                    defaultValue={jobSeeker.twitterLink}
                    variant="outlined"
                  />
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add School */}
      <div
        id="addSchool"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Education</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Department"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="School Name"
                    variant="outlined"
                  />

                  <div className="row">
                    <div className="col-6 ">
                      <label className="float-top text-left">Start Year</label>
                      <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                      <option value={""}> ---Start Year---</option>
                      {years.map(year=>(
                        <option value={year}>{year}</option>
                      ))}
                  </select>
                    </div>

                    <div className="col-6 ">
                    <label className="float-top text-left">Finish Year</label>
                    <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                      <option value={""}> ---Finish Year---</option>
                      <option value={""}> Continues</option>
                      {years.map(year=>(
                        <option value={year}>{year}</option>
                      ))}
                  </select>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Experiene Icons */}
      <div
        id="addExperience"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Experience</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Workplace Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Explanation"
                    variant="outlined"
                  />
                  <label className="float-top text-left">Position</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                  >
                    <option value={" "}> 
                      ---Select Job Position---
                    </option>
                    {jobPositions?.map((jobPosition) => (
                      <option value={jobPosition.id} key={jobPosition.id}>
                        {jobPosition.positionName}
                      </option>
                    ))}
                    
                  </select>

                  <div className="row">
                    <div className="col-6 ">
                      <label className="float-top text-left">Start Date</label>
                      <input
                        id="outlined-required"
                        className="dateForm form-control float-bottom w-100 "
                        type="month"
                        label="Start Year"
                        variant="outlined"
                      />
                    </div>

                    <div className="col-6 ">
                      <label className="float-top text-left">Finish Date</label>
                      <input
                        id="outlined-required"
                        className="dateForm form-control float-bottom w-100 "
                        type="month"
                        label="Start Year"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Add Certificate Icons */}
      <div
        id="addCertificate"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Certificate</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div className="w-100">
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Title"
                    variant="outlined"
                  />
                  <label className="float-top text-left">Year Of Taken</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example">
                      <option value={""}> ---Year Of Taken---</option>
                      {years.map(year=>(
                        <option value={year}>{year}</option>
                      ))}
                  </select>
                   
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Add Reference Icons */}
      <div
        id="addReference"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Reference</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Title"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Name - Surname"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-required"
                    className="contactForm w-100"
                    label="Mail"
                    variant="outlined"
                  />

                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Language */}
      <div
        id="addLanguage"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Language</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div >
                  <div className="row">
                    <div className="col-7">
                    <label className="float-left text-left">Position</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                  >
                    <option value={" "}> 
                      Select Language
                    </option>
                    {languages?.map((language) => (
                      <option value={language.id} key={language.id}>
                        {language.languageName}
                      </option>
                    ))}
                    
                  </select>
                    </div>
                      <div className="col-5 mt-4">
                        <Rating
                          name="simple-controlled"
                          value={star}
                          onChange={(event, newValue) => {
                            setStar(newValue);
                          }}
                        />
                      </div>
                  </div>
                  
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        
      {/* Add Skill */}
      <div
        id="addSkill"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Skill</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <label className="float-top text-left">Skill</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                  >
                    <option value={" "}> 
                      ---Select Skill---
                    </option>
                    {skills?.map((skill) => (
                      <option value={skill.id} key={skill.id}>
                        {skill.skillName}
                      </option>
                    ))}
                    
                  </select>
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Add Position */}
      <div
        id="addPosition"
        className="modal fade"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header flex-column">
              <h4 className="editContact-title w-100">Add Position</h4>
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {jobSeeker ? (
                <div>
                  <label className="float-top text-left">Position</label>
                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                  >
                    <option value={" "}> 
                      ---Select Job Position---
                    </option>
                    {jobPositions?.map((jobPosition) => (
                      <option value={jobPosition.id} key={jobPosition.id}>
                        {jobPosition.positionName}
                      </option>
                    ))}
                    
                  </select>
                </div>
              ) : null}

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
