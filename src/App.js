import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Free APIs</h1>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
      <footer className="App-footer">
        <p>Created by Alex</p>
      </footer>

    </div>
  );
}

export default App;
