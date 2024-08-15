import React, { useEffect, useState } from "react";
import HomepageS1 from "./HomepageS1";
import HomepageS2 from "./HomepageS2";
import HomepageS3 from "./HomepageS3";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getstudent } from "../store/actions/studentActions";
import axios from "../utils/axios";
import { getemployee } from "../store/actions/employeeActions";

const Home = () => {
  // const [internships, setinternships] = useState([
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "internship",
  //     duration: "2 months",
  //     logo: "/images/logo.png",
  //   },
  //   {
  //     isActivelyHiring: false,
  //     title: "Software Engineer 123",
  //     company: "XYZ Corp. 1234",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "internship",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "internship",
  //     duration: "2 months",
  //   },
  // ]);


  // const {employee} = useSelector(state => state.employeeSlice)
  // const {student} = useSelector(state => state.studentSlice)
  const {internships} = useSelector(state => state.internshipSlice)

  console.log(internships)


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

  const getinternships =async ()=>{{
    const internships = await axios.get('/internship/all')
    // console.log(internships)
  }}

  
  const {employee} = useSelector(state => state.employeeSlice)
  const {student} = useSelector(state => state.studentSlice)

  const navigate = useNavigate()
  Object.keys(employee).length > 0 && navigate('/employee/dashboard')
  
  useEffect(()=>{
    // loginUserJWT()
  },[])


  return internships && (
    <main className="container mx-auto pt-12">
      <Outlet />
      <HomepageS1 internships={internships} />
      {/* <HomepageS2 internships={internships} /> */}
      {/* <HomepageS2 jobs={jobs} />
      <HomepageS3 type="certification" />
      <HomepageS3 type="placement" /> */}
    </main>
  );
};

export default Home;
