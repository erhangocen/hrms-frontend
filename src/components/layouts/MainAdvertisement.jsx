import React from 'react'
import AdvertisementList from '../pages/AdvertisementList'
import AdvertisementFilter from './AdvertisementFilter'

export default function MainAdvertisement() {
  return (
    <div>
        <AdvertisementFilter/>
        <AdvertisementList/>
    </div>
  )
}
