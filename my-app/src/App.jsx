import React from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from './utils/Router';

function App() {
  return (
    <div className='wrapper'>
    <Header/>
    <Router/>
    </div>
  );
}

export default App;
