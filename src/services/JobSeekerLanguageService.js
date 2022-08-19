

import axios from 'axios';
import React, { Component } from 'react'

export default class JobSeekerLanguageService{
    apiUrl = "http://localhost:5050/api/jobSeekerLanguage/";

    addJobSeekerLanguage(jobSeekerLanguage){
        axios.post(this.apiUrl+"add", jobSeekerLanguage)
    }

    deleteJobSeekerLanguage(jobSeekerLanguage){
        axios.post(this.apiUrl+"delete", jobSeekerLanguage)
    }


    getAllJobSeekerLanguage(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllJobSeekerLanguageByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
