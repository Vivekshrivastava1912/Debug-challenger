import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Challenge from './components/Challenge';
import Article from './components/Article';
import Quizepage from './components/Quizepage';
import Aabhi from './components/Aabhi';

const App = () => {
  return (
    <>

   
      <Nav />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Navigate to="/" />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/article" element={<Article />} />
        <Route path="/Quizepage" element={<Quizepage />} />
        <Route path="/Aabhi" element={<Aabhi />} />
        
      </Routes>
    </>
  );
};

export default App;
