import React, { useState } from "react";
import ButtonRounded from "./ButtonRounded";
import Card1 from "./Card1";
import Card2 from "./Card2";

const HomepageS2 = () => {
  return (
    <div className="HomepageS2 px-32  py-14 bg-lightBlue  ">
      <h2 className="text-3xl font-semibold text-darkGray text-center text-gray-600 mb-2">
        Certification Courses
      </h2>
      <h3 className="text-xl font-medium text-darkGray text-center text-gray-600 mb-8">
        Fastest way to build your CV
      </h3>
      <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto mt-8">
        <Card2 title="Web Dev" duration="8 weeks" image="https://internshala.com/static/images/home/trainings/images/web_development.png" rating="4.2" learners="231" />
        <Card2 title="Full Stack Web Dev" duration="8 weeks" image="https://internshala.com/static/images/home/trainings/images/web_development.png" rating="4.2" learners="231" />
      </div>
    </div>
  );
};

export default HomepageS2;
