import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
