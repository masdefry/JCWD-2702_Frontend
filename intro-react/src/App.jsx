import './App.css';
import { Outlet } from 'react-router-dom';

function App(){
  return(
    <Outlet />
  )
}

// const App = () => {
//   return(
//     <>
//       <h1>
//         Hello
//       </h1>
//       <h1>
//         World
//       </h1>
//     </>
//   )
// }
export default App
