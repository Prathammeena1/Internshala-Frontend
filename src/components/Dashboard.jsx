import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isExpired } from "./utils/expirey";

const Dashboard = () => {
  const { internships } = useSelector((state) => state.internshipSlice);
  const { jobs } = useSelector((state) => state.jobSlice);
  console.log(jobs)
  const [view, setView] = useState('internships');

  

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  const renderTableContent = (items) => (
    items.length > 0 ? (
      items.map((item, i) => (
        <div key={i} className="grid grid-cols-5 gap-4 py-4 text-gray-700">
          <div className="font-semibold text-gray">{item.profile || item.title }</div>
          {!isExpired(item.from) ? (
            <div className="text-green-500 font-medium flex items-center gap-2">
              <span className="inline-block h-2 aspect-square rounded-full bg-green-500"></span>
              Live
            </div>
          ) : (
            <div className="text-red-500 font-medium flex items-center gap-2 line-through">
              <span className="inline-block h-2 aspect-square rounded-full bg-red-500"></span>
              Expired
            </div>
          )}
          <div className="text-center font-medium">{item.students.length}</div>
          <div className="text-center">
            <button className="text-primary hover:text-primaryHover duration-[.3s] font-medium ">
              View
            </button>
          </div>
          <div className="text-center">
            <button className="text-primary hover:text-primaryHover duration-[.3s] font-medium">
              Share
            </button>
          </div>
        </div>
      ))
    ) : (
      <h1 className="text-center text-4xl my-16 font-bold capitalize ">
        No {view === 'internships' ? 'internships' : 'jobs'} yet! <br />
        <Link
          to={`/employee/post/${view}`}
          className=" text-2xl text-primary font-medium border-b-2 duration-[.3s] border-transparent hover:border-primary "
        >
          Post {view === 'internships' ? 'Internships' : 'Jobs'}
        </Link>
      </h1>
    )
  );

  return (
    <div className="p-8 pt-24 bg-gray-100 min-h-screen px-32">
      <div className="shadow shadow-zinc-800 rounded-lg">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex space-x-8">
            <button
              className={`font-semibold ${view === 'internships' ? 'text-primary' : 'text-gray-500'}`}
              onClick={() => handleViewChange('internships')}
            >
              Internships
            </button>
            <button
              className={`font-semibold ${view === 'jobs' ? 'text-primary' : 'text-gray-500'}`}
              onClick={() => handleViewChange('jobs')}
            >
              Jobs
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-5 gap-4 py-2 border-b font-semibold text-gray-600">
            <div>PROFILE</div>
            <div>STATUS</div>
            <div className="text-center">Number of Applications</div>
            <div className="text-center">Applications</div>
            <div className="text-center">SHARE ON LINKEDIN</div>
          </div>
          <div>
            {view === 'internships' ? renderTableContent(internships) : renderTableContent(jobs)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
