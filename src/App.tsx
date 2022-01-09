import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Home from './pages/home';
import Technology from './pages/technology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
