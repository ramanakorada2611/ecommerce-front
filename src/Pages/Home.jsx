import React, { useEffect, useState } from 'react'
import HomeData from '../Components/HomeData'
// import data1 from '../Data/Data1'
import SideData from '../Components/SideData'
import Shipping from '../Components/Shipping'
import EndData from '../Components/EndData'
import AppNavbarNew from '../Pages1/AppNavbarNew'

// import AppRouterNew from '../Pages1/AppRouterNew'

export default function Home() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://ecommerce-database-zepl-d65j69f9z-ramanakorada2611.vercel.app/homePage")
    .then(response=>response.json())
    .then(response=>setData(response.homePage))
  },[])
  return (
   <>
    <SideData/>
    <center className='best-seller'>BEST SELLER</center>
    {/* <AppRouterNew/> */}
   <AppNavbarNew/>
    <br/>
    <div className='first-image-card-home' >
      {
        data && data.map((item)=>{
          return <HomeData image={item.image} title={item.title} cost={item.cost} star={item.star}/>
        })
      }
    </div><br/>
    <div className='text-center'><u className='text-danger '>Load More</u></div><br/><br/>
    
    <div className='bg-dark text-danger blue-container '>
    <h2 className='blue-head'>Iphone 6 Plus</h2><br/>
    <p className='blue-para'>Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit. Dolor, repudiandae.</p><br/>
    <u className='blue-uline'>SHOP NOW</u>
    </div>
    <Shipping/>
    <SideData/><br/><br/>
    <EndData/>
   </>
  )
}
