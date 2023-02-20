import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// import Placeholder from 'react-bootstrap/Placeholder';
const HomeData = (props) => {
  return (
    <>
   
   <Link to='/cardpage' state={{data:props}}>
   <div className="d-flex justify-content-around  ">
      <Card style={{ width: '10rem' ,height:"18rem"}} className="hover-effect">
        <Card.Img variant="top" src={props.image}  />
        <Card.Body className='text-center'>
          <Card.Title className='text-center'>{props.title}</Card.Title>
          <Card.Text >
            {props.cost}
          </Card.Text >
            {props.star}
        </Card.Body>
      </Card>
    </div></Link>
   
    </>
  )
}

export default HomeData