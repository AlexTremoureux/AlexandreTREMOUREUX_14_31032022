import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Router } from './utils/Router';

function App() {
  return (
    <>
    <Header/>
    <Router/>
    <Footer/>
    </>
  );
}

export default App;
