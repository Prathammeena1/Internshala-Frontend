import axios from "../utils/axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createjob } from "../store/actions/jobActions"; // Assuming you have a jobActions file

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "In office",
    openings: 1,
    skills: "",
    description: "",
    preferences: "",
    salary: 0,
    perks: "",
    assessment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'salary' && value.length > 10 || name === 'openings' && value.length > 10) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createjob(formData));
      navigate('/employee/jobs'); // Redirect to jobs page after posting
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="pt-20 pb-10">
      <h1 className="text-5xl font-bold text-darkGray text-center flex flex-col items-end w-fit mx-auto mt-4">
        <span>Post a new Job</span>
        <img className="w-[18vw]" src="/images/underline.png" alt="" />
      </h1>

      <div className="w-full max-w-xl p-6 bg-white rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Title </span>
            <input
              required
              maxLength={20}
              type="text"
              name="title"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Type </span>
            <select
              name="type"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="In office">In office</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Openings </span>
            <input
              required
              maxLength={10}
              type="number"
              name="openings"
              min={1}
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Openings"
              value={formData.openings}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Skills </span>
            <input
              required
              maxLength={100}
              type="text"
              name="skills"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Description </span>
            <textarea
              required
              maxLength={500}
              name="description"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Preferences </span>
            <textarea
              required
              maxLength={500}
              name="preferences"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Preferences"
              value={formData.preferences}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Salary (₹) </span>
            <input
              maxLength={15}
              type="number"
              name="salary"
              min={0}
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Perks </span>
            <textarea
              required
              maxLength={100}
              name="perks"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Perks"
              value={formData.perks}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Assessment </span>
            <textarea
              required
              maxLength={100}
              name="assessment"
              className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Assessment"
              value={formData.assessment}
              onChange={handleChange}
            />
          </div>
          <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded duration-[.3s] hover:bg-primaryHover">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
