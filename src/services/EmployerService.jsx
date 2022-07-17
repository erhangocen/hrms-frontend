import axios from "axios";
import React from 'react'

export default class EmployerService {

    apiUrl = "http://localhost:5050/api/employers/";

    addEmployer(employer){
        return null;
    }

    deleteEmployer(employer){
        return null;
    }

    updateEmployer(employer){
        return null;
    }


    getAllEmployers(){
        return axios.get(this.apiUrl + "getAll")
    }
  
}
