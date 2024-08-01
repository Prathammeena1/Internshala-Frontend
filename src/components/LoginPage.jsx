import axios from "../utils/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function LoginPage() {
  const [activeTab, setActiveTab] = useState("Student");
  const [studentForm, setStudentForm] = useState({
    email: "",
    password: "",
  });
  const [employerForm, setEmployerForm] = useState({
    email: "",
    password: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value,
    });
  };

  const handleEmployerChange = (e) => {
    const { name, value } = e.target;
    setEmployerForm({
      ...employerForm,
      [name]: value,
    });
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/student/signin', studentForm);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
    // console.log(studentForm);
  };

  const handleEmployerSubmit = (e) => {
    e.preventDefault();
    // Handle employer form submission logic here
    console.log(employerForm);
  };

  return (
    <div className="flex items-start pt-[24vh] justify-center min-h-screen bg-gray-100 fixed top-0 h-screen w-full bg-gray/[.5] z-[99]">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <Link to="/" className="relative left-[94%] top-[-1vh] text-xl text-gray/[.7] hover:text-gray transition-all ease-in-out">
          <i className="ri-close-large-line"></i>
        </Link>

        <div className="flex mb-4">
          <button
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === "Student" ? "border-b-2 border-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Student")}
          >
            Student
          </button>
          <button
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === "Employer" ? "border-b-2 border-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Employer")}
          >
            Employer / T&P
          </button>
        </div>

        <div>
          {activeTab === "Student" && (
            <div>
              <button className="w-full py-2 mb-4 text-sm font-medium text-gray rounded border flex justify-center gap-2 items-center">
                <img className="h-4" src="http://pluspng.com/img-png/google-logo-png-open-2000.png" alt="" />
                Login with Google
              </button>
              <div className="flex gap-2 items-center mb-5">
                <hr className="w-1/2" />
                <span className="text-center text-gray-400 text-xs">OR</span>
                <hr className="w-1/2" />
              </div>
              <form onSubmit={handleStudentSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-primaryHover"
                    placeholder="Email"
                    value={studentForm.email}
                    onChange={handleStudentChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-primaryHover"
                    placeholder="Password (Must be at least 6 characters)"
                    value={studentForm.password}
                    onChange={handleStudentChange}
                  />
                </div>
                <div className="flex justify-end mb-4">
                  <a href="#" className="text-sm text-primary font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primaryHover">
                  Login
                </button>
              </form>
              <div className="mt-4 text-center text-sm text-gray-600">
                New to Internshala?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Register (Student / Company)
                </a>
              </div>
            </div>
          )}

          {activeTab === "Employer" && (
            <div>
              <form onSubmit={handleEmployerSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-primaryHover"
                    placeholder="Email"
                    value={employerForm.email}
                    onChange={handleEmployerChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-primaryHover"
                    placeholder="Password (Must be at least 6 characters)"
                    value={employerForm.password}
                    onChange={handleEmployerChange}
                  />
                </div>
                <div className="flex justify-end mb-4">
                  <a href="#" className="text-sm text-primary font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primaryHover">
                  Login
                </button>
              </form>
              <div className="mt-4 text-center text-sm text-gray-600">
                New to Internshala?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Register (Student / Company)
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
