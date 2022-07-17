import axios from "axios";
import React from 'react'

export default class EmployerService {

    apiUrl = "http://localhost:5050/api/employers/";

    addEmployer(employer){
        axios.post(this.apiUrl+"add", employer)
    }

    deleteEmployer(employer){
        axios.post(this.apiUrl+"delete", employer)
    }

    updateEmployer(employer){
        axios.post(this.apiUrl+"update", employer)
    }


    getAllEmployers(){
        return axios.get(this.apiUrl + "getAll")
    }
  
}
