import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerCertificateService{
    apiUrl = "http://localhost:5050/api/jobSeekerCertificate/";

    addJobSeekerCertificate(jobSeekerCertificate){
        axios.post(this.apiUrl+"add", jobSeekerCertificate)
    }

    deleteJobSeekerCertificate(jobSeekerCertificate){
        axios.post(this.apiUrl+"delete", jobSeekerCertificate)
    }

    getAllJobSeekerCertificateByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
