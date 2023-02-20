import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation } from "react-router-dom";
const CardPage = () => {
  const location= useLocation();
   const {data } = location.state;
   console.log(data)
  return (
    <>
  
    <div className="d-flex justify-content-around  ">
      <Card style={{ width: '10rem' ,height:"18rem"}} className="hover-effect">
        <Card.Img variant="top" src={data.image}  />
        <Card.Body className='text-center'>
          <Card.Title className='text-center'>{data.title}</Card.Title>
          <Card.Text >
            {data.cost}
          </Card.Text >
            {data.star}
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default CardPage