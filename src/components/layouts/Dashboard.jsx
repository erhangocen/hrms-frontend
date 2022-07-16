import React from 'react'
import AdminPanel from '../pages/AdminPanel'
import AdvertisementDetails from '../pages/AdvertisementDetails'
import Form from './Form'
import MainAdvertisement from './MainAdvertisement'
import MainPage from './MainPage'
import Profile from './Profile'

export default function Dashboard() {
  return (
    <div> 
        <MainPage/>
        <AdvertisementDetails/>
        <AdminPanel/>
        <Form/>
        <Profile/>
        <MainAdvertisement/>
    </div>
  )
}
