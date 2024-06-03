import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register/index';
import LoginPage from './pages/login/index.jsx';

const routing = createBrowserRouter(
  [
    {
      element: <App />, 
      children: [
        {
          path: '/register', 
          element: <RegisterPage />
        }, 
        {
          path: '/login', 
          element: <LoginPage />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routing}>
    <App />
  </RouterProvider>,
)
