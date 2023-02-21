import React, { useState } from 'react'
import { CardName } from '../Components/Cards'
const ExtraPage = () => {
  const [count1,setCount1]=useState(1)

  const counting1=()=>{
    setCount1(count1-1)
  }
  const counting2=(e)=>{
    setCount1(count1+1)
    
  }
  return (
   <><br/>
    <div className='iphone-bar'>Cards</div><br/><br/>
    <header className='extrapage-header1'>
      <div ><u>Product</u>
      </div>
        <ul className='extrapage-li'>
          <li><u>Price</u></li>
          <li><u>Quantity</u></li>
          <li><u>Unit Price</u></li>
        </ul>
      </header>
   {
   CardName.map((item)=>{
   
    return(
      <>
      
      <header className='extrapage-header2'>
      <div >
      <img style={{width:"5rem" , height:"5rem"}} src={item.image} alt="#" />
      <span className='ms-5'>{item.title}</span>
      </div>
        <ul className='extrapage-ul me-5'>
        <li >{item.cost}</li>
        <li><button onClick={counting1} className="counting ">-</button>{count1}<button  className="counting " onClick={counting2}>+</button></li>
        <li >{item.cost}</li>
        </ul>
      </header>
        
           
      </>
    )
   })
   }
   
   </>
  )
}

export default ExtraPage