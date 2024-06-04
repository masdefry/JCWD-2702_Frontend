import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import CRUDPage from './pages/crud';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/crud' element={<CRUDPage />} />
      </Routes>
      <section>
        Footer
      </section>
    </>
  )
}

export default App
