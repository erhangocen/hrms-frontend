import axios from "axios";
import React, { Component } from 'react'

export default class StaffValidationService{
    apiUrl = "http://localhost:5050/api/staffValidation/";

    addStaffValidation(staffValidation){
        axios.post(this.apiUrl+"add", staffValidation)
    }

    deleteStaffValidation(staffValidation){
        axios.post(this.apiUrl+"delete", staffValidation)
    }

    validateStaffValidation(employerId,systemUserId){
        return axios.get(this.apiUrl+"validate"+"?employerId="+employerId+"&systemUserId="+ systemUserId)
    }
    

    getAllStaffValidations(){
        return axios.get(this.apiUrl+"getAll")
    }
}
