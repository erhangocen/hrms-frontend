import axios from "axios";
import React, { Component } from 'react'

export default class PhotoService {
    apiUrl = "http://localhost:5050/api/photo/";

    addPhoto(photo){
        axios.post(this.apiUrl+"add", photo)
    }

    deletePhoto(photo){
        axios.post(this.apiUrl+"delete", photo)
    }

    getPhotoByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
