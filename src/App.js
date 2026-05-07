import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SalesMarketingPage from './pages/SalesMarketing';

import Trafficc from './pages/Sales/Trafficc';
import CrowdAndTrafficc from './pages/Sales/CrowdAndTrafficc';
import AviationSpecialist from './pages/Sales/AviationSpecialist';
import CriticalInfrastructure from './pages/Sales/CriticalInfrastructure';
import EducationAndSchools from './pages/Sales/EducationAndSchools';
import SpecialistTraining from './pages/Sales/SpecialistTraining';
import Cleaning from './pages/Sales/Cleaning';
import PestControl from './pages/Sales/PestControl';
import Landscaping from './pages/Sales/Landscaping';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/salesmarketing" element={<SalesMarketingPage />} />
        <Route path="/services/security-crowd-control" element={<CrowdAndTrafficc />} />
        <Route path="/services/traffic" element={<Trafficc />} />
        <Route path="/services/cleaning" element={<Cleaning />} />
        <Route path="/services/pest-control" element={<PestControl />} />
        <Route path="/services/landscaping" element={<Landscaping />} />
      
       
      </Routes>
    </div>
  );
}

export default App;