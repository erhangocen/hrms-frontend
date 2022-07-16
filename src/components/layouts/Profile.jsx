import React from 'react'
import EmplooyerProfile from '../pages/EmplooyerProfile'
import JobSeekerProfile from '../pages/JobSeekerProfile'
import SystemUserProile from '../pages/SystemUserProile'

export default function Profile() {
  return (
    <div>
        <JobSeekerProfile/>
        <EmplooyerProfile/>
        <SystemUserProile/>
    </div>
  )
}
