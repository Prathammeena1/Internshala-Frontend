import React, { useEffect, useState } from "react";
import HomepageS1 from "./HomepageS1";
import HomepageS2 from "./HomepageS2";
import HomepageS3 from "./HomepageS3";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getstudent } from "../store/actions/studentActions";
import axios from "../utils/axios";

const Home = () => {
  const [internships, setinternships] = useState([
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "internship",
      duration: "2 months",
      logo: "/images/logo.png",
    },
    {
      isActivelyHiring: false,
      title: "Software Engineer 123",
      company: "XYZ Corp. 1234",
      location: "New York",
      stipend: "1500/month",
      type: "internship",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "internship",
      duration: "2 months",
    },
  ]);

  const [jobs, setjobs] = useState([
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
      logo: "/images/logo.png",
    },
    {
      isActivelyHiring: false,
      title: "Software Engineer 123",
      company: "XYZ Corp. 1234",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "jobs",
      duration: "2 months",
    },
  ]);


  useEffect(async()=>{
    const internships = await axios.get('/internship/all')
    console.log(internships)
    
  },[])


  return (
    <main className="container mx-auto pt-12">
      <Outlet />
      <HomepageS1 />
      <HomepageS2 internships={internships} />
      <HomepageS2 jobs={jobs} />
      <HomepageS3 type="certification" />
      <HomepageS3 type="placement" />
    </main>
  );
};

export default Home;
