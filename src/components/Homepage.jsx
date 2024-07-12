// src/HomePage.js
import React from 'react';
import Nav from './Nav';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Home />
    </div>
  );
};

export default HomePage;
