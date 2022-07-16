import React from 'react'
import DefaultMainPage from '../pages/DefaultMainPage'
import EmplooyerMainPage from '../pages/EmplooyerMainPage'
import JobSeekerMainPage from '../pages/JobSeekerMainPage'
import SystemUserMainPage from '../pages/SystemUserMainPage'

export default function MainPage() {
  return (
    <div>
      <DefaultMainPage/>
      <EmplooyerMainPage/>
      <JobSeekerMainPage/>
      <SystemUserMainPage/>
    </div>
  )
}
