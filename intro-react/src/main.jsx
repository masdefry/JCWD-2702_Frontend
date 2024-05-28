import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import ProfilePage from './pages/profile'
import AdminPage from './pages/admin'
import HomePage from './pages/home/index.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/', 
        element: <HomePage />
      },
      {
        path: '/profile', 
        element: <ProfilePage />
      }, 
      {
        path: '/admin', 
        element: <AdminPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
