import axios from "axios";
import React from 'react'

export default class EmailValidationService {

    apiUrl = "http://localhost:5050/api/emailValidation/"

    addEmailValidation(emailValidation){
        return null;
    }

    deleteEmailValidation(emailValidation){
        return null;
    }

    getAllEmailValidation(){
        return axios.get(this.apiUrl + "getAll")
    }

    validate(userId){
        return null;
    }

}
