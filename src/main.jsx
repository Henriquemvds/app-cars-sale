import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'
import Buy from './assets/pages/Buy'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/buy/:id_carro',
    element: <Buy />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)