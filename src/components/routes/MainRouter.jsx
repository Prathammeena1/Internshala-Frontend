// src/MainRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Homepage';
import LoginPage from '../LoginPage';
import RegisterStudent from '../RegisterStudent';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path='/register/student' element={<RegisterStudent/>} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default MainRouter;
