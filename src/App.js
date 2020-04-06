import React from 'react';
import logo from './logo.svg';
import './App.css';
import pepe  from "./bigpepe.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Damn grl u fine
        </a>
      </header>
    </div>
  );
}

export default App;
