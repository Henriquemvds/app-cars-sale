import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'
import Buy from './assets/pages/Buy'
import Sell from './assets/pages/Sell'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/buy',
    element: <Buy />
  },
  {
    path: '/sell',
    element: <Sell />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)