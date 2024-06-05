import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import CRUDPage from './pages/crud';
import HomePage from './pages/home';
import DetailPage from './pages/detail';

import { userContext } from './context/userContext';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <>
     <userContext.Provider value={{userData, setUserData}}>
      <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/crud' element={<CRUDPage />} />
          <Route path='/detail-product/:productId' element={<DetailPage />} />
        </Routes>
        <section>
          Footer
        </section>
     </userContext.Provider>
    </>
  )
}

export default App
