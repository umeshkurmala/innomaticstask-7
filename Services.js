import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import DesignService from './DesignService';
import DevelopmentService from './DevelopmentService';

const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li>
          <NavLink to="design">Design Service</NavLink>
        </li>
        <li>
          <NavLink to="development">Development Service</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="design" element={<DesignService />} />
        <Route path="development" element={<DevelopmentService />} />
      </Routes>
    </div>
  );
};

export default Services;
