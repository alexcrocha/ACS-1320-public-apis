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
    <div className="App min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col justify-between">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main flex flex-grow px-4 md:px-8 pt-16 pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/godlist" element={<APIList apiList={apiList} />} />
          <Route path="/categories" element={<Categories apiList={apiList} categoriesList={categoriesList} />} />
          <Route path="/categories/:category" element={<APIList apiList={apiList} />} />
        </Routes>
      </main>
      <footer className="App-footer bg-gray-800 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm">
            Made with <small aria-hidden="true">❤️</small><span className="sr-only">love</span> by{" "}
            <a
              href="https://github.com/alexcrocha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Alex C Rocha
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
