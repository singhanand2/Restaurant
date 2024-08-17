import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from  './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import BookTable from './Pages/BookTable';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () => {
  return (
   <div className="app-main">
    <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/booktable' element={<BookTable/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
   </div>
  )
}

export default App
