// src/MainRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/Homepage';
import LoginPage from '../components/LoginPage';
import RegisterStudent from '../components/RegisterStudent';
import RegisterEmployee from '../components/RegisterEmployee';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path='/register/student' element={<RegisterStudent/>} />
      <Route path='/register/employee' element={<RegisterEmployee/>} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default MainRouter;
