import axios from "axios";
import React, { Component } from 'react'

export default class JobSeekerFavoriteService {
    apiUrl = "http://localhost:5050/api/jobSeekerFavorite/";

    addJobSeekerFavorite(jobSeekerFavorite){
        axios.post(this.apiUrl+"add", jobSeekerFavorite)
    }

    deleteJobSeekerFavorite(jobSeekerFavorite){
        axios.post(this.apiUrl+"delete", jobSeekerFavorite)
    }


    getAllJobSeekerFavoriteByUserId(id){
        return axios.get(this.apiUrl+"getByUserId"+"?id="+id)
    }
}
