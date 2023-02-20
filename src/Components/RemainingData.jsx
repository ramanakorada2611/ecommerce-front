import React from 'react'
import Card from 'react-bootstrap/Card';
const RemainingData = (props) => {

  return (
    <>
   
    <div className="d-flex justify-content-around  ">
       <Card style={{ width: '13rem' ,height:"22rem"}} className="hover-effect">
         <Card.Img variant="top" src={props.image}  />
         <Card.Body className='text-center'>
           <Card.Title className='text-center'>{props.title}</Card.Title>
           <Card.Text >
             {props.cost}
           </Card.Text >
             {props.star}
         </Card.Body>
       </Card>
     </div>
    
     </>
  )
}

export default RemainingData