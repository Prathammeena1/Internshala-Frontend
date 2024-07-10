// src/HomePage.js
import React, { useState } from "react";
import Nav from "./Nav";
import HomepageS1 from "./HomepageS1";
import HomepageS2 from "./HomepageS2";
import HomepageS3 from "./HomepageS3";

const HomePage = () => {


  const [internships, setinternships] = useState([
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend: "1500/month",
      type: "internship",
      duration: "2 months",
      logo:'/images/logo.png'
    },
    {
      isActivelyHiring: false,
      title: "Software Engineer 123",
      company: "XYZ Corp. 1234",
      location: "New York",
      stipend:'1500/month',
      type: "internship",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "internship",
      duration:'2 months',
    }
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
      logo:'/images/logo.png'
    },
    {
      isActivelyHiring: false,
      title: "Software Engineer 123",
      company: "XYZ Corp. 1234",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    },
    {
      isActivelyHiring: true,
      title: "Software Engineer",
      company: "XYZ Corp.",
      location: "New York",
      stipend:'1500/month',
      type: "jobs",
      duration:'2 months',
    }
  ]);




  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="container mx-auto pt-12">
        <HomepageS1/>
        <HomepageS2 internships={internships} />
        <HomepageS2 jobs={jobs} />
        <HomepageS3 />
      </main>
    </div>
  );
};

export default HomePage;
