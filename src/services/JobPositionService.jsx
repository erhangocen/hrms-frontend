import axios from "axios";
import React from 'react'

export default class JobPositionService {
    apiUrl = "http://localhost:5050/api/jobPosition/";

    addJobPosition(jobPosition){
        axios.post(this.apiUrl+"add",jobPosition)
    }

    deleteJobPosition(jobPosition){
        axios.post(this.apiUrl+"delete", jobPosition)
    }


    getAllJobPositions(){
        return axios.get(this.apiUrl+"getAll")
    }
}
