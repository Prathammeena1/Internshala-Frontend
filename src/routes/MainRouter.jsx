// src/MainRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Homepage";
import LoginPage from "../components/LoginPage";
import RegisterStudent from "../components/RegisterStudent";
import RegisterEmployee from "../components/RegisterEmployee";
import Dashboard from "../components/Dashboard";
import PostIntership from "../components/PostIntership";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* students routes */}
      <Route path="/register/student" element={<RegisterStudent />} />



      {/* students routes */}
      <Route path="/register/employee" element={<RegisterEmployee />} />
      <Route path="/employee/dashboard" element={<Dashboard />} />
      <Route path="/employee/post/internships" element={<PostIntership />} />



      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default MainRouter;
