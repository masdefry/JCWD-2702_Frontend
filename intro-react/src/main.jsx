import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Pages
import ProfilePage from './pages/profile'
import AdminPage from './pages/admin'
import HomePage from './pages/home/index.jsx'
import ExerciseResponsivePage from './pages/exercise-responsive/index.jsx'
import DetailCardPage from './pages/detail-card/index.jsx'

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
      },
      {
        path: '/exercise-responsive', 
        element: <ExerciseResponsivePage />
      }, 
      {
        path: '/detail-card/:productName', 
        element: <DetailCardPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
