import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to React here
        </h1>
      </header>
      <p className="App-intro">
        Make magic Happen here
        {' '}
        <code>
          src/App.js
        </code>
        {' '}
        and save to reload.
      </p>
    </div>
  );
}

export default App;