import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { VehiclesProvider } from './assets/context/vehicles'
import Home from './assets/pages/_Home'
import Buy from './assets/pages/Buy'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/buy/:id_automovel',
    element: <Buy />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
<VehiclesProvider>
    <RouterProvider router={router} />
</VehiclesProvider>

)