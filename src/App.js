import React from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header'

import './App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      
      <Cards />
    </div>
  );
}

export default App;
