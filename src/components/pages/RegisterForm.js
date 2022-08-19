import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CityService from "../../services/CityService";
import RegisterForJobSeeker from "../layouts/RegisterForJobSeeker";
import RegisterForEmployer from "../layouts/RegisterForEmployer";
import styles from "../../styles/loginRegister.module.css";

export default function RegisterForm() {

  const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getAllCities().then((result) => {
        setCities(result.data.data);
        });
    });

  return (
    <div> 
      <h1>Register</h1> 
      <p class="text-muted mt-3"> Please enter fields!</p>  


      <RegisterForJobSeeker/>

      <RegisterForEmployer/>

      <FormControl fullWidth className="mt-4">
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          {cities?.map((city)=>(
            <MenuItem value={city.id}>{city.cityName}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
      
      <TextField
          id="outlined-required"
          className="registerForm w-100 mt-4" 
          label="Phone Number"
          variant="outlined"
          autoComplete="off"
      />       
    </div>
  )
}
