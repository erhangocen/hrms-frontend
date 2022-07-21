import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerService{
    apiUrl = "http://localhost:5050/api/jobSeeker/";

    addJobSeeker(jobSeeker){
        axios.post(this.apiUrl+"add", jobSeeker)
    }

    deleteJobSeeker(jobSeeker){
        axios.post(this.apiUrl+"delete", jobSeeker)
    }

    updateLinks(jobSeekerLinksDto){
        axios.post(this.apiUrl+"updateLinks", jobSeekerLinksDto)
    }

    updateCoverLetter(userId, coverLetter){
        axios.post(this.apiUrl+"updateCoverLetter?coverLetter="+coverLetter+"&userId="+userId)
    }


    getAllJobSeeker(){
        return axios.get(this.apiUrl+"getAll")
    }

    getCvByUserId(userId){
        return axios.get(this.apiUrl+"getByUserId"+"?userId="+userId)
    }


}
