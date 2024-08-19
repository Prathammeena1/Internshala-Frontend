import axios from "../utils/axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createinternship } from "../store/actions/internshipActions";

const PostInternship = () => {
  const [formData, setFormData] = useState({
    profile: "",
    type: "In office",
    openings: 1,
    skills: "",
    from: "",
    to: "",
    duration: "",
    responsibility: "",
    stipend: {
      status: "Fixed",
      amount: 0,
    },
    perks: "",
    assessment: "",
    image: null, // Change to null initially
  });

  const amountTag = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'status') {
      amountTag.current.style.display = 'initial';
    }
    if (name === 'status' && value === 'Unpaid') {
      amountTag.current.style.display = 'none';
    }
    if (name === 'status' || name === 'amount') {
      setFormData({
        ...formData,
        stipend: {
          ...formData.stipend,
          [name]: value,
        },
      });
      return;
    }
    if (name === 'image') {
      setFormData({
        ...formData,
        image: files[0], // Store the file object
      });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   if (key === "stipend") {
    //     data.append("stipendStatus", formData.stipend.status);
    //     data.append("stipendAmount", formData.stipend.amount);
    //   } else {
    //     data.append(key, formData[key]);
    //   }
    // });


    try {
      dispatch(createinternship(formData)); // Pass the FormData object to the action
      // console.log(formData)
      navigate("/");
    } catch (error) {
      console.error("Error posting internship:", error);
    }
  };

  return (
    <div className="pt-20 pb-10">
      <h1 className="text-5xl font-bold text-zinc-300 text-center flex flex-col items-end w-fit mx-auto mt-4">
        <span>Post a new Internship</span>
        <img className="w-[18vw]" src="/images/underline.png" alt="" />
      </h1>

      <div className="w-full max-w-xl p-6 shadow shadow-zinc-800 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] mx-auto">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Profile </span>
            <input
              required
              maxLength={20}
              type="text"
              name="profile"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Profile"
              value={formData.profile}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Image </span>
            <input
              required
              type="file"
              name="image"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Profile"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Number of openings </span>
            <input
            maxLength={3}
              type="number"
              name="openings"
              min={1}
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Stipend Amount"
              value={formData.openings}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2 items-center">
          <div className="mb-4 w-1/2">
            <span className="text-sm capitalize font-medium"> From </span>
            <input
            required
            maxLength={10}
              type="date"
              name="from"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              value={formData.from}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-1/2">
            <span className="text-sm capitalize font-medium"> To </span>
            <input
            required
            maxLength={10}
              type="date"
              name="to"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              value={formData.to}
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Duration </span>
            <input
            required
            maxLength={15}
              type="text"
              name="duration"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Responsibility </span>
            <textarea
            required
            maxLength={100}
              type="text"
              name="responsibility"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Responsibility"
              value={formData.responsibility}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Skills </span>
            <textarea
            required
            maxLength={100}
              type="text"
              name="skills"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Responsibility"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Stipend Status </span>
            <select
              name="status"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              value={formData.stipend.status}
              onChange={handleChange}
            >
              <option value="Fixed">Fixed</option>
              <option value="Negotiable">Negotiable</option>
              <option value="Performance Based">Performance Based</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          <div ref={amountTag} className="mb-4">
            <span className="text-sm capitalize font-medium"> Stipend Amount (₹) </span>
            <input
            maxLength={15}
              type="number"
              name="amount"
              min={1}
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Stipend Amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <span className="text-sm capitalize font-medium"> Perks </span>
            <textarea
            required
            maxLength={100}
              type="text"
              name="perks"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
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
              type="text"
              name="assessment"
              className="w-full px-3 bg-transparent py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
              placeholder="Assessment"
              value={formData.assessment}
              onChange={handleChange}
            />
          </div>
          <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded duration-[.3s] hover:bg-primaryHover">
            Post Internship
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostInternship;
