import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

export default function StoreDrop() {
    let Navigate=useNavigate();
    const navFunction1=()=>{
      Navigate('/ipad')
    }
    const navFunction2=()=>{
        Navigate('/iphone')
    }
    const navFunction3=()=>{
         Navigate('/macbook')
     }
     const navFunction4=()=>{
      Navigate('/Accesories')
     }
  return (
    <DropdownButton id="dropdown-basic-button" title="Store"  align="start" >
      <Dropdown.Item href="#">Accesories</Dropdown.Item><Dropdown.Divider />
      <Dropdown.Item onClick={navFunction1}>Ipad</Dropdown.Item>
      <Dropdown.Item onClick={navFunction2}>Iphone</Dropdown.Item>
      <Dropdown.Item onClick={navFunction3}>Macbook</Dropdown.Item>
      <Dropdown.Item onClick={navFunction4}>Accesories</Dropdown.Item>
      <Dropdown.Item href="#">Cases &Frames</Dropdown.Item>
      <Dropdown.Item href="#">Cables & Docks</Dropdown.Item><Dropdown.Divider />
      <Dropdown.Item href="#">Category</Dropdown.Item>
      <Dropdown.Item href="#">Charging Devices</Dropdown.Item>
      <Dropdown.Item href="#">Connected Home</Dropdown.Item>
      <Dropdown.Item href="#">Device Care</Dropdown.Item>
      <Dropdown.Item href="#">HeadPhones</Dropdown.Item>
      <Dropdown.Item href="#">Fitness & Sport</Dropdown.Item>
    </DropdownButton>
  )
}
