import axios from "axios";
import React from 'react'

export default class EmailValidationService {

    apiUrl = "http://localhost:5050/api/emailValidation/"

    addEmailValidation(emailValidation){
        axios.post(this.apiUrl+"add", emailValidation)
    }

    deleteEmailValidation(emailValidation){
        axios.post(this.apiUrl+"delete", emailValidation)
    }

    validateEmail(userId){
        axios.post(this.apiUrl+"validate", userId)
    }
    

    getAllEmailValidation(){
        return axios.get(this.apiUrl + "getAll")
    }

}
