import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import HomePage from "./HomePage";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/"
          target="_self"
          rel="noopener noreferrer"
        >

          Learn React

        </a>
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
            <Route path="/page-1" element={<Page1 />}></Route>
            <Route path="/page-2" element={<Page2 />}></Route>
        </Routes>
        


      </header>
    </div>
  );
}

export default App;
