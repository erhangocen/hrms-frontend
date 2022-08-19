import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerSkillService {
    apiUrl = "http://localhost:5050/api/jobSeekerSkill/";

    addJobSeekerSkill(jobSeekerSkill){
        axios.post(this.apiUrl+"add", jobSeekerSkill)
    }
    
    deleteJobSeekerSkill(jobSeekerSkill){
        axios.post(this.apiUrl+"delete",jobSeekerSkill)
    }

    getAllJobSeekerSkills(){
        return axios.get(this.apiUrl+"getAll");
    }

    getAllJobSeekerSkillsByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
