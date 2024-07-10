import React, { useState } from "react";
import ButtonRounded from "./ButtonRounded";
import Card1 from "./Card1";

const HomepageS2 = () => {
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

  return (
    <div className="HomepageS2 mt-24 bg-lightGray px-32 h-screen pt-14">
      <h2 className="text-3xl font-semibold text-darkGray text-center text-gray-600 mb-8">
        Latest internships on Internshala
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
        {internships.length > 0 ? (
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
          <h1>No Internships yet!</h1>
        )}
      </div>
    </div>
  );
};

export default HomepageS2;
