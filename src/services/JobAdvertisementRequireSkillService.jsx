import axios from "axios";
import React from 'react'

export default class JobAdvertisementRequireSkillService {

    apiUrl = "http://localhost:5050/api/jobAdvertisementRequireSkill/";

    addJobAdvertisementRequireSkill(jobAdvertisementRequireSkill){
        axios.post(this.apiUrl+"add", jobAdvertisementRequireSkill)
    }

    deleteJobAdvertisementRequireSkill(jobAdvertisementRequireSkill){
        axios.post(this.apiUrl+"delete", jobAdvertisementRequireSkill)
    }
    

    getAllJobAdvertisementRequireSkills(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllJobAdvertisementRequireSkillsByJobAdvertisementId(id){
        return axios.get(this.apiUrl+"getByAdvertisementId"+"?id="+id)
    }

    getAllJobAdvertisementRequireSkillsBySkillId(id){
        return axios.get(this.apiUrl+"getBySkillId"+"?id="+id)
    }

}
