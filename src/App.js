import React from 'react';
import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Header from './components/Header';

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
