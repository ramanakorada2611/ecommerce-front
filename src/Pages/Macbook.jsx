import React,{useEffect,useState} from 'react'
import {BsFillCircleFill} from'react-icons/bs'
import RemainingData from '../Components/RemainingData'
// import data2 from '../Data/Data2'

import EndData from '../Components/EndData'
export default function Macbook() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://ecommerce-database-zepl-d65j69f9z-ramanakorada2611.vercel.app/macbookPage")
    .then(response=>response.json())
    .then(response=>setData(response.macbookPage))
  },[])
  return (
    <><br/>
    <div className='iphone-bar'>Macbook/Accesories</div><br/><br/>
    
    <div className='overall-iphone'>
      <div className='overall-iphone1 ms-2'>
        <div className='side-bar-data'>
           <div className='side-data1' >
            <h3 style={{color:"red"}}>Accesories</h3>
             <div className='side-data11'>
            <div>Apple Car</div>
            <div>2</div>
            <div>Air port & wireless </div>
            <div>5</div>
            <div>Cables & Docks</div>
            <div>4</div>
            <div>Charging Devices</div>
            <div>5</div>
            <div>Headphones</div>
            <div>44</div>
            <div>Cases & Films</div>
            <div>4</div>
             </div>
           </div>
        
           <div className='side-data2'><h3 style={{color:"red"}}>Prices</h3>
             <div className='side-data11'>
             <div>Ranger</div>
             <div>10$-15$</div>
             <input type='range' ></input>
             </div>
           </div>
    
           <div className='side-data3'><h3 style={{color:"red"}}>Colors</h3>
            <div className='side-data12'>
            <BsFillCircleFill style={{color:"red"}}/>
            <BsFillCircleFill style={{color:"yellow"}}/>
            <BsFillCircleFill style={{color:"blue"}}/>
            <BsFillCircleFill style={{color:"pink"}}/>
            <BsFillCircleFill style={{color:"grey"}}/>
            <BsFillCircleFill style={{color:"white"}}/>
            </div>
           </div>
           <div className='side-data4'><h3 h3 style={{color:"red"}}>Brands</h3>
           <div className='side-data11'>
            <div>Apple</div>
            <div>22</div>
            <div>LG </div>
            <div>10</div>
            <div>One Plus</div>
            <div>40</div>
            <div>Oppo</div>
            <div>50</div>
            <div>Samsung</div>
            <div>44</div>
             </div>
           </div>
           <button className='button'>MORE</button>
        </div>
      </div>  
    
     <div className='overall-iphone1'>
        <div className='bg-dark text-danger iphone-color-container'>
        <h2 className='blue-head'>Macbook</h2><br/>
        <p className='blue-para'>Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit. Dolor, repudiandae.</p><br/>
        <u className='blue-uline'>SHOP NOW</u>
        </div>
     <br/>
        <div className='first-image-card-remaining' >
          {
            data&&data.map((item)=>{
              return <RemainingData image={item.image} title={item.title} cost={item.cost} star={item.star}/>
            })
          }
        </div>
      </div>
    </div>
        <br/><br/>
        <EndData/>
        </>
  )
}
