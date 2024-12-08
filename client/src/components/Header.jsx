import React from 'react';
import NavBar from './NavBar'
import { Link } from'react-router-dom';



export default function Header() {

  return (
    <>
    <NavBar />
    <header className="header_container">
      <Link to="/">
        <img src='../P2IMAGES/MP-LOGO-BLACK-01.png' alt="header_logo" />
      </Link>
      <Link to='/latest' className='header'>Latest</Link>
      <Link to='/market'className='header'>Market</Link>
      <Link to='/news'className='header'>News</Link> 
      <Link to='/trending' className='header'>Trending</Link>
    </header>
    
    </>
  )
}