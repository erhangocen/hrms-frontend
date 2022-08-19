import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerExperienceService{
    apiUrl = "http://localhost:5050/api/jobSeekerExperience/";

    addJobSeekerExperience(jobSeekerExperience){
        axios.post(this.apiUrl+"add", jobSeekerExperience)
    }

    deleteJobSeekerExperience(jobSeekerExperience){
        axios.post(this.apiUrl+"delete", jobSeekerExperience)
    }

    getAllJobSeekerExperience(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllJobSeekerExperienceByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
