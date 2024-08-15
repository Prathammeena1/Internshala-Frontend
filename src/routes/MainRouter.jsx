// src/MainRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Homepage";
import LoginPage from "../components/LoginPage";
import RegisterStudent from "../components/RegisterStudent";
import RegisterEmployee from "../components/RegisterEmployee";
import Dashboard from "../components/Dashboard";
import PostIntership from "../components/PostIntership";
import PostJob from "../components/PostJob";
import { useSelector } from "react-redux";
import NotFoundPage from "../components/NotFoundPage";

const MainRouter = () => {

  const {employee} = useSelector(state => state.employeeSlice)
  const {student} = useSelector(state => state.studentSlice)


  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      {/* register routes */}
      <Route path="/register/student" element={<RegisterStudent />} />
      <Route path="/register/employee" element={<RegisterEmployee />} />

      {/* student routes */}




      {/* employee routes */}
      {Object.keys(employee).length > 0 && <Route path="/employee/dashboard" element={<Dashboard />} />}
      {Object.keys(employee).length > 0 && <Route path="/employee/post/internships" element={<PostIntership />} />}
      {Object.keys(employee).length > 0 && <Route path="/employee/post/jobs" element={<PostJob />} />}



      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
