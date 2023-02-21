import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import {CardName} from '../Components/Cards'
import { useNavigate } from 'react-router-dom';
const RemainingData = (props) => {
  let Navigate=useNavigate();
 const navFunction1=()=>{
     Navigate('/extrapage')
   }
  const [title,settitle]=useState(" ")
  const [image,setImage]=useState(" ")
  const [cost,setCost]=useState(" ")

  const addToCard=()=>{
    const addlist=CardName;

    addlist.push({
      title:title,
      image:image,
      cost:cost
    })
    // console.log(CardName)
    // console.log(addlist)
  }
  return (
    <>
   
    <div classtitle="d-flex justify-content-around  ">
       <Card style={{ width: '13rem' ,height:"22rem"}} className="hover-effect1 ms-5">
         <Card.Img variant="top" src={props.image} className="home-image" />
         <Card.Body className='text-center'>
           <Card.Title >{props.title}</Card.Title>
           <Card.Text >
             {props.cost}
             <p><button onMouseOver={()=>{
              setImage(props.image);
              settitle(props.title);
              setCost(props.cost)}} 
             onClick={()=>{
              addToCard() ; navFunction1()}} className="btn-danger">
              add to cart 
             </button></p>
           </Card.Text >
             {props.star}
         </Card.Body>
       </Card>
     </div>
    
     </>
  )
}

export default RemainingData