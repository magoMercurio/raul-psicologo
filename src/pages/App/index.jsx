import { BrowserRouter } from 'react-router-dom'
import  './App.css'
import AppRoutes from '../../components/AppRoutes'
import NavBar from '../../components/NavBar'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
