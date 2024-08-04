import axios from "../utils/axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registeremployee } from "../store/actions/employeeActions";

const RegisterEmployee= () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    contact: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registeremployee(formData))
    navigate('/')
    // console.log(formData);
  };

  return (
    <div className="pt-32 h-screen flex px-40 bg-center bg-cover gap-8 bg-[url('https://internshala.com/static/images/registration/employer/registration_new/images/banner/r1255_banner_new.png')] ">
      <div>
      <h1 className="text-5xl font-bold text-darkGray flex items-center">
        <span>Hire Interns & Freshers</span>
        <img src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg" alt="" />
      </h1>
      <h2 className="text-2xl font-medium text-darkGray text-gray-600">
      Post Internships for Free & Hire Talent with up to 2 Years of Experience
      </h2>
      </div>

      <div className="w-fit max-w-sm p-6 h-fit bg-white rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] mx-auto">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> official email id </span>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> password </span>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="Password (Must be at least 6 characters)"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex mb-2 gap-2">
              <div className="mb-4">
                <span className="text-sm capitalize font-medium"> first name </span>
                <input
                  type="text"
                  name="firstname"
                  className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                  placeholder="John"
                  value={formData.firstname}
                  onChange={handleChange}
                  />
              </div>
              <div className="mb-4">
                <span className="text-sm capitalize font-medium"> last name </span>
                <input
                  type="text"
                  name="lastname"
                  className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                  placeholder="Doe"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> mobile number </span>
              <input
                type="number"
                name="contact"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="Enter mobile number"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <p className="text-xs mb-2">
              By signing up, you agree to our{" "}
              <Link className="text-primary">Terms and Conditions.</Link>
            </p>
            <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primaryHover">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600 font-medium">
            Already registered{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployee;
