import React from 'react';
import NavBar from './NavBar'
import { Link } from'react-router-dom';



export default function Header() {

  return (
    <>
    <NavBar />
      <Link to='/latest' className='header'>LATEST</Link>
      <Link to='/market'className='header'>MARKET</Link>
      <Link to='/news'className='header'>NEWS</Link> 
      <Link to='/trending' className='header'>TRENDING</Link>
    
    </>
  )
}