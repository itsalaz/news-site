import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx' 


export default function App() {
  return (
    <>
    <Header />
    <h1>Laz's App</h1>
    <Outlet />
    </>
  )
}