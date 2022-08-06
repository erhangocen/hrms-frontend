import React from 'react'
import TextField from '@mui/material/TextField';

export default function RegisterForEmployer() {
  return (
    <div>
      <TextField
        id="outlined-required"
        className="registerForm w-100 mt-4" 
        label="Company Name"
        variant="outlined"
        autoComplete="off"
      />   
      <TextField
        id="outlined-required"
        className="registerForm w-100 mt-4" 
        label="Web Address"
        variant="outlined"
        autoComplete="off"
      />
    </div>
  )
}
