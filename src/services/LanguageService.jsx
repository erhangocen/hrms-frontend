import axios from "axios";
import React, { Component } from 'react'

export default class LanguageService{
    apiUrl = "http://localhost:5050/api/language/";

    addLanguage(language){
        axios.post(this.apiUrl+"add", language)
    }

    deleteLanguage(language){
        axios.post(this.apiUrl+"delete", language)
    }

    getAllLanguages(){
        return axios.get(this.apiUrl+"getAll")
    }
}
