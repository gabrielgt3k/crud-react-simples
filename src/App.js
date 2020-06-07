import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Footer from './components/Footer'
import Logo from './components/Logo'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
