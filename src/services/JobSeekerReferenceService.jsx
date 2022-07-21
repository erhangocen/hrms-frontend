import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerReferenceService{
    apiUrl = "http://localhost:5050/api/jobSeekerReference/";

    addJobSeekerReference(jobSeekerReference){
        axios.post(this.apiUrl+"add", jobSeekerReference)
    }

    deleteJobSeekerReference(jobSeekerReference){
        axios.post(this.apiUrl+"delete", jobSeekerReference)
    }

    getAllJobSeekerReferenceByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
