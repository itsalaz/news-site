import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx'
import Latest from './components/Latest.jsx'
import Market from './components/Market.jsx'
import News from './components/News.jsx' 
import Trending from './components/Trending.jsx'
import App from './App.jsx'
import './index.css' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        element: <Home />, 
        index: true  // when we are at / also show home 
      }, 
      {
        path: 'latest',
        element: <Latest />,
      },
      {
        path: '/market',
        element: <Market/>
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/trending',
        element: <Trending />,
      }
    ]
  }
]
const router = createBrowserRouter(routes)


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
