import axios from "axios";

export default class JobAdvertisementService {
    apiUrl = "http://localhost:5050/api/jobAdvertisement/";

    //Posts
  
    addJobAdvertisement(jobAdvertisement){
        axios.post(this.apiUrl+"add", jobAdvertisement)
    }

    deleteJobAdvertisement(jobAdvertisement){
        axios.post(this.apiUrl+"delete", jobAdvertisement)
    }

    advertisementActiveSetFalse(id){
        axios.post(this.apiUrl+"advertisementActiveFalse", id)
    }

    advertisementActiveSetTrue(id){
        axios.post(this.apiUrl+"advertisementActiveTrue", id)
    }

    //Gets

    getAllJobAdvertisement(){
        return axios.get(this.apiUrl+"getAll")
    }

    getAllActiveAdvertisements(){
        return axios.get(this.apiUrl + "getActiveAdvertisements")
    }

    getAllActiveAdvertisementsByEmployerId(id){
        return axios.get(this.apiUrl+"getActiveAdvertisementsByEmployer"+"?employerId="+id)
    }

    getAllActiveAdvertisementsByDeadlineAsc(){
        return axios.get(this.apiUrl+"getActiveAdvertisementsByDeadlineAsc")
    }

    getAllActiveAdvertisementsByDeadlineDesc(){
        return axios.get(this.apiUrl+"getActiveAdvertisementsByDeadlineDesc")
    }
}