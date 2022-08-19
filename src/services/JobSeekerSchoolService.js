import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerSchoolService {
    apiUrl = "http://localhost:5050/api/jobSeekerSchool/";

    addJobSeekerSchool(jobSeekerSchool){
        axios.post(this.apiUrl+"add", jobSeekerSchool)
    }
    
    deleteJobSeekerSchool(jobSeekerSchool){
        axios.post(this.apiUrl+"delete", jobSeekerSchool)
    }

    getAllJobSeekerSchools(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllJobSeekerSchoolsByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
