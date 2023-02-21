import React,{useState} from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { CardName } from '../Components/Cards';
const HomeData = (props) => {
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
   
   <div className="d-flex justify-content-around  ">
      <Card style={{ width: '10rem' ,height:"18rem"}} className="hover-effect">
        <Card.Img variant="top" src={props.image}  className="home-image" />
        <Card.Body className='text-center'>
          <Card.Title className='text-center'>{props.title}</Card.Title>
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
            
        </Card.Body>
      </Card>
    </div>
   
    </>
  )
}

export default HomeData