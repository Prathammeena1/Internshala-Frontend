import React, { useEffect, useState } from "react";
// import HomepageS1 from "./HomepageS1";
// import HomepageS2 from "./HomepageS2";
// import HomepageS3 from "./HomepageS3";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getstudent } from "../store/actions/studentActions";
import axios from "../utils/axios";
import { getemployee } from "../store/actions/employeeActions";
import Poster from "./Poster";

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
  const { internships } = useSelector((state) => state.internshipSlice);
  const { jobs } = useSelector((state) => state.jobSlice);

  // console.log(jobs);

  // const [jobs, setjobs] = useState([
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //     logo: "/images/logo.png",
  //   },
  //   {
  //     isActivelyHiring: false,
  //     title: "Software Engineer 123",
  //     company: "XYZ Corp. 1234",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  //   {
  //     isActivelyHiring: true,
  //     title: "Software Engineer",
  //     company: "XYZ Corp.",
  //     location: "New York",
  //     stipend: "1500/month",
  //     type: "jobs",
  //     duration: "2 months",
  //   },
  // ]);

  const { employee } = useSelector((state) => state.employeeSlice);
  const { student } = useSelector((state) => state.studentSlice);
  // console.log(student)

  const navigate = useNavigate();
  Object.keys(employee).length > 0 && navigate("/employee/dashboard");

  useEffect(() => {
    // loginUserJWT()
  }, []);

  return (
    internships && (
      <main className="container mx-auto pt-12">
        <Outlet />

        <h1 className="text-5xl my-20 font-bold text-zinc-200 text-center mb-8 flex flex-col items-center">
          {Object.keys(student).length > 0 && <div className="text-3xl font-semibold text-zinc-200 text-center text-gray-600 mb-8">
            Hi, {student.firstname} ! 👋
          </div> }
          
          <span>Make your dream career a reality</span>
          <img className="w-[20vw]" src="/images/underline.png" alt="" />
        </h1>

        {/* Trending internship */}
        <div className="HomepageS1 px-32">
          <h2 className="text-3xl font-semibold text-zinc-200 text-center text-gray-600 mb-8">
            Trending internships on Internshala 🔥
          </h2>

          {internships && (
            <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto">
              {internships.map((d, i) => (
                <Link to={`/internship/detail/${d._id}`}>
                <Poster key={i} url={d.image.url} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Trending job */}
        <div className="HomepageS1 my-24 px-32">
          <h2 className="text-3xl font-semibold text-zinc-200 text-center text-gray-600 mb-8">
            Trending jobs on Internshala 🔥
          </h2>

          {jobs && (
            <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto">
              {jobs.map((d, i) => (
                <Poster key={i} url={d.image.url} />
              ))}
            </div>
          )}
        </div>

        {/* <HomepageS1 data={internships} />
        <HomepageS1 data={jobs} /> */}
        {/* <HomepageS1 internships={jobs} /> */}
        {/* <HomepageS2 internships={internships} /> */}
        {/* <HomepageS2 jobs={jobs} />
      <HomepageS3 type="certification" />
      <HomepageS3 type="placement" /> */}
      </main>
    )
  );
};

export default Home;
