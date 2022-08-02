import axios from "axios";
import React, { Component } from 'react'

export default class SkillService {
    apiUrl = "http://localhost:5050/api/skill/";

    addSkill(skill){
        axios.post(this.apiUrl+"add", skill)
    }

    deleteSkill(skill){
        axios.post(this.apiUrl+"delete", skill)
    }


    getAllSkills(){
        return axios.get(this.apiUrl+"getAll")
    }

    getNoHaveSkills(userId){
        return axios.get(this.apiUrl+"getNoHaveSkills?userId="+userId)
    }
}
