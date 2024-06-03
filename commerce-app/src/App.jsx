import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
