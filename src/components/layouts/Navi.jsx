import React from 'react'
import LogInRegisterButtons from './LogInRegisterButtons'
import ProfileButton from './ProfileButton'
import SearchBar from './SearchBar'


export default function Navi() {
  return (
    <div>
        <SearchBar/>
        <LogInRegisterButtons/>
        <ProfileButton/>
    </div>
  )
}
