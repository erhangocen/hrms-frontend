import axios from "axios";

export default class JobAdvertisementService {
    apiUrl = "http://localhost:5050/api/jobAdvertisement/";

    //Posts
  
    addJobAdvertisement(jobAdvertisement){
        return null;
    }

    deleteJobAdvertisement(jobAdvertisement){
        return null;
    }

    advertisementActiveSetFalse(id){
        return null;
    }

    advertisementActiveSetTrue(id){
        return null;
    }

    //Gets

    getAllJobAdvertisement(){
        return null;
    }

    getAllActiveAdvertisements(){
        axios.get(this.apiUrl + "getActiveAdvertisements")
    }

    getAllActiveAdvertisementsByEmployerId(id){
        return null;
    }

    getAllActiveAdvertisementsByDeadlineAsc(){
        return null;
    }

    getAllActiveAdvertisementsByDeadlineDesc(){
        return null;
    }
}