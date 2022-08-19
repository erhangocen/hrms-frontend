import axios from "axios";
import React from 'react'

export default class CityService {

    apiUrl = "http://localhost:5050/api/city/";

    addCity(city){
        axios.post(this.apiUrl + "add", city)
    }

    deleteCity(city){
        axios.post(this.apiUrl+"delete", city)
    }


    getAllCities(){
        return axios.get(this.apiUrl + "getAll");
    }

}
