import React from 'react'
import { NavLink } from 'react-router-dom'
const AppNavbarNew = () => {
  return (
    <div className='second-navbar'>
    <nav className='main-nav1'>
    <NavLink to='/' className={({isActive})=>isActive ? "active" : "not-active"}>All</NavLink>
    <NavLink to='/Ipad' className={({isActive})=>isActive ? "active" : "not-active"}>ipad</NavLink>
    <NavLink to='/Iphone' className={({isActive})=>isActive ? "active" : "not-active"}>Iphone</NavLink>
    <NavLink to='/Mackbook' className={({isActive})=>isActive ? "active" : "not-active"}>Mackbook</NavLink>
    <NavLink to='/Accesories' className={({isActive})=>isActive ? "active" : "not-active"}>Accesories</NavLink>
    </nav>
    </div>
  )
}

export default AppNavbarNew