import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './../Pages/Home'
import Iphone from './../Pages/Iphone'
import Ipad from './../Pages/Ipad'
import Macbook from './../Pages/Macbook'
import Store from './../Pages/Store'
import Accesories from './../Pages/Accesories'
import AppNavbar from '../Components/AppNavbar'
import PageNotFound from '../Pages1/PageNotFound'
import CardPage from '../Components/CardPage'


export default function AppRouter() {
  return (
    <>
    
    <BrowserRouter>
    <AppNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/iphone' element={<Iphone/>}/>
      <Route path='/ipad' element={<Ipad/>}/>
      <Route path='/macbook' element={<Macbook/>}/>
      <Route path='/accesories' element={<Accesories/>}/>
      <Route path='/cardpage' element={<CardPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
