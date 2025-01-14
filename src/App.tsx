import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VirtualTour from './pages/VirtualTour';
import Education from './pages/Education';
import Membership from './pages/Membership';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/education" element={<Education />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;