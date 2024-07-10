import React, { useState } from "react";
import ButtonRounded from "./ButtonRounded";
import Card1 from "./Card1";

const HomepageS2 = ({internships,jobs}) => {
 

  return (
    <div className="HomepageS2 bg-lightGray px-32  py-14">
      <h2 className="text-3xl font-semibold text-darkGray text-center text-gray-600 mb-8">
        Latest {(internships && 'internships') || (jobs && 'jobs' ) } on Internshala
      </h2>
      <div className="flex items-center justify-center font-medium text-sm">
        <span className="uppercase font-meduim text-gray">
          popular categories:
        </span>
        <div className="ml-5 space-x-3">
          <ButtonRounded text={"Big brands"} type={"fill"} />
          <ButtonRounded text={"Work from home"} />
          <ButtonRounded text={"Part-time"} />
          <ButtonRounded text={"MBA"} />
          <ButtonRounded text={"Engineering"} />
          <ButtonRounded text={"Media"} />
          <ButtonRounded text={"Design"} />
          <ButtonRounded text={"Data Science"} />
        </div>
      </div>
      <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto mt-8">
        { internships && internships.length > 0 ? (
          internships.map((internship, i) => (
            <Card1
              key={i}
              isActivelyHiring={internship.isActivelyHiring}
              title={internship.title}
              company={internship.company}
              location={internship.location}
              stipend={internship.stipend}
              type={internship.type}
              duration={internship.duration}
              logo={internship.logo}
            />
          ))
        ) : (
          jobs.length > 0 ? jobs.map((job, i) => (
            <Card1
              key={i}
              isActivelyHiring={job.isActivelyHiring}
              title={job.title}
              company={job.company}
              location={job.location}
              stipend={job.stipend}
              type={job.type}
              duration={job.duration}
              logo={job.logo}
            />
          )) : <h1>Loading...</h1>
        )}
      </div>
      
    </div>
  );
};

export default HomepageS2;
