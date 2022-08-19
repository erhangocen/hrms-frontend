import axios from "axios";
import React, { Component } from 'react'

export default class UserService {
    apiUrl = "http://localhost:5050/api/user/";

    validateUser(emailValidation){
        axios.post(this.apiUrl+"validate", emailValidation)
    }

    deleteUser(user){
        axios.post(this.apiUrl+"delete", user)
    }


    getAllUsers(){
        return axios.get(this.apiUrl+"getAll")
    }

    getUserById(id){
        return axios.get(this.apiUrl+"getById"+"?id="+id)
    }
}
