import axios from "axios";
import React from 'react'

export default class CityService {

    apiUrl = "http://localhost:5050/api/city/";

    getAllCities(){
        return axios.get(this.apiUrl + "getAll");
    }

    addCity(city){
        return null;
    }

    deleteCity(city){
        return null;
    }

}
