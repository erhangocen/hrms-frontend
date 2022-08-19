import axios from "axios";
import React, { Component } from 'react'

export default class SystemUserService{
    apiUrl = "http://localhost:5050/api/systemUser/";

    addSystemUser(systemUser){
        axios.post(this.apiUrl+"add", systemUser)
    }

    deleteSystemUser(systemUser){
        axios.post(this.apiUrl+"delete", systemUser)
    }


    getAllSystemUsers(){
        return axios.get(this.apiUrl+"getAll")
    }
}
