import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Challenge from './components/Challenge';
import Article from './components/Article';
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        
        <Route path="/Landing" element={<Landing />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
    <Footer/>
    </>
  );
};

export default App;