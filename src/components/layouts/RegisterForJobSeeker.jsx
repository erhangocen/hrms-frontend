import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CityService from "../../services/CityService";

export default function RegisterForJobSeeker() {

  return (
    <div>
        <TextField
        id="outlined-required"
        className="registerForm w-100 mt-4" 
        label="TC No"
        variant="outlined"
        autoComplete="off"
      />   
      <TextField
        id="outlined-required"
        className="registerForm w-100 mt-4" 
        label="First Name"
        variant="outlined"
        autoComplete="off"
      />
      <TextField
        id="outlined-required"
        className="registerForm w-100 mt-4" 
        label="Last Name"
        variant="outlined"
        autoComplete="off"
      />
      <TextField
        id="date"
        className='w-100 mt-4'
        label="Birthday"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}
