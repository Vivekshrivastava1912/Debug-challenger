import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Challenge from './components/Challenge';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </>
  );
};

export default App;