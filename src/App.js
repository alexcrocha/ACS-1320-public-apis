import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import APIList from './components/APIList';
import Categories from './components/Categories';
import Home from './components/Home';


function App() {
  const [apiList, setApiList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => {
        const treatedData = data.entries.map((api) => {
          api.Auth = api.Auth === "" ? "None" : api.Auth;
          return api;
        });
        setApiList(treatedData);
      });

    fetch("https://api.publicapis.org/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesList(data.categories);
      });
  }, []);



  return (
    <div className="App">

      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/godlist' element={<APIList apiList={apiList} />} />
          <Route path='/categories' element={<Categories apiList={apiList} categoriesList={categoriesList} />} />
          <Route path='/categories/:category' element={<APIList apiList={apiList} />} />
        </Routes>
      </main>
      <footer className="App-footer">
        <p>Made with <small>❤️</small> by <a href='https://github.com/alexcrocha' target='_blank'>Alex C Rocha</a></p>
      </footer>
    </div>
  );
}

export default App;
