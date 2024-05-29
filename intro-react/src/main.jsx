import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import ProfilePage from './pages/profile'
import AdminPage from './pages/admin'
import HomePage from './pages/home/index.jsx'
import ExerciseResponsivePage from './pages/exercise-responsive/index.jsx'

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
