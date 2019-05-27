import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Nav} from './components/Nav'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
