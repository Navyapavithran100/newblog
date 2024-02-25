import logo from './logo.svg';
import './App.css'; 
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Blogform from './components/Blogform';
function App(){
  return(
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      
    <Route path='/a' element={<Home />} />
    <Route path='/b' element={<Blogform />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;