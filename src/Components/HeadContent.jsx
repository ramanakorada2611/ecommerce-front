import React from 'react'
import { CgProfile } from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
import { MdProductionQuantityLimits} from 'react-icons/md'
import {ImCross} from 'react-icons/im'


export default function HeadContent() {
 
  return (
    <>
    <ImCross className='cross-max'/>
    <div className='top-div'>
      <div className='top-two'>
      <select name="" id="first-select">
        <option value="0" >EN</option>
        <option value="1">Hindhi</option>
        <option value="2">Tamil</option>
        <option value="2">Telugu</option>
      </select>
      <select name="" id="second-select">
        <option value="0" >$</option>
        <option value="1">£</option>
        <option value="2">é</option>
        <option value="2">¥</option>
      </select>
      </div>
      
      <div className='top-three'>
      <section><CgProfile/>  my profile</section>
      <section><MdProductionQuantityLimits/><span >items</span></section>
      <section><AiOutlineSearch/>  search</section>
      </div>

    </div><br/>
    <h1 className='top-head text-dark'>I SHOP</h1>
    </>
  )
}
