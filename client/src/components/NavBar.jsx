import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
    <NavLink to="/" ></NavLink>
    <NavLink to="/latest"></NavLink>
    <NavLink to="/market" ></NavLink>
    <NavLink to="/trending" ></NavLink>

    </>

  )
}