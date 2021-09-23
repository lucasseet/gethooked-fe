import Navbar from './Navbar'
import Footer from './Footer'
import NearbyFishingDetails from './NearbyFishingDetails';
import React from 'react';
import HomeFishingSpot from './HomeFishingSpot';


export default function Nearby(props) {
  console.log(props)

    return (
        <React.Fragment>
    <Navbar/>
    <NearbyFishingDetails/>
    <HomeFishingSpot/>
    <Footer/>
      </React.Fragment>
    )
  }
  