import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./component/HomeArticle";
import Details from "./component/DetailsArticle";
import NavSpace from "./component/NavSpace"
import Footer from "./component/Footer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavSpace/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/article/:id" element={<Details/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}


export default App
