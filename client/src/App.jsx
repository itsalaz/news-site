import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx' 
import Home from './components/Home.jsx' 

export default function App() {
  return (
    <>
    <Header />
    <Home />
    <Outlet />
    </>
  )
}