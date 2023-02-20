import React from 'react'
import { NavLink } from 'react-router-dom'
import StoreDrop from './StoreDrop'

export default function AppNavbar() {
  return (
    <>
    <nav className='main-nav'>
    <NavLink to='/' className={({isActive})=>isActive ? "active" : "not-active"}>Home</NavLink>
    <NavLink to='/store' className={({isActive})=>isActive ? "active" : "not-active"}><StoreDrop/> </NavLink>
    <NavLink to='/iphone' className={({isActive})=>isActive ? "active" : "not-active"}>Iphone</NavLink>
    <NavLink to='/ipad' className={({isActive})=>isActive ? "active" : "not-active"}>Ipad</NavLink>
    <NavLink to='/macbook' className={({isActive})=>isActive ? "active" : "not-active"}>Macbook</NavLink>
    <NavLink to='/accesories' className={({isActive})=>isActive ? "active" : "not-active"}>Accesories</NavLink>
    </nav>
    </>
  )
}
