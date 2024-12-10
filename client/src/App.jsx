import './App.css'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import ClipLoader from 'react-spinners/ClipLoader'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <ClipLoader size={150} color={'#3123abc'} loading={loading} />
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </div>
  )
}