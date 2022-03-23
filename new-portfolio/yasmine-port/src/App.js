// import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';



function App() {
  return (
    <div className="App">
      <div id="background"></div>
      <Navbar />
      <div className='int-container'>
      <Intro />
      </div>
    </div>
  );
}

export default App;
