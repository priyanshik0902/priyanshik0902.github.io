import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from './components/Hero';
import Test from './components/Test';
import SkillsPage from './components/SkillsPage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="relative h-screen overflow-y-scroll bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Test id="test" />
    </div>
  );
}

export default App;