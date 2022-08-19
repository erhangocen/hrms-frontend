import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerPositionService {
    apiUrl = "http://localhost:5050/api/jobSeekerPosition/";

    addJobSeekerPosition(jobSeekerPosition){
        axios.post(this.apiUrl+"add", jobSeekerPosition)
    }

    deleteJobSeekerPosition(jobSeekerPosition){
        axios.post(this.apiUrl+"delete", jobSeekerPosition)
    }

    getAllJobSeekerPosition(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllJobSeekerPositionByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
