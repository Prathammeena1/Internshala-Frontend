import React, { useState } from "react";
import ButtonRounded from "./ButtonRounded";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const HomepageS2 = ({ type }) => {
  return (
    <div className="HomepageS2 px-32  py-14 bg-lightBlue  ">
      <h2 className="text-3xl font-semibold text-darkGray text-center text-gray-600 mb-2">
        {type == "certification"
          ? "Certification Courses"
          : "Placement guarantee courses"}
      </h2>
      <h3 className="text-xl font-medium text-darkGray text-center text-gray-600 mb-8">
        {type == "certification" ? (
          "Fastest way to build your CV"
        ) : (
          <div className="flex gap-3 items-center justify-center text-base ">
            {" "}
            <span className="flex gap-1 items-center">
              <i className="ri-check-double-line"></i>{" "}
              <p>Guaranteed placement</p>{" "}
            </span>
            <span className="flex gap-1 items-center">
              <i className="ri-check-double-line"></i>{" "}
              <p>Get 100% refund if not hired</p>{" "}
            </span>
            <span className="flex gap-1 items-center">
              <i className="ri-check-double-line"></i> <p>Become job ready</p>{" "}
            </span>
          </div>
        )}
      </h3>
      <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto mt-8">
        {type == "certification" ? (
          <>
            <Card2
              title="Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
            <Card2
              title="Full Stack Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
            <Card2
              title="Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
            <Card2
              title="Full Stack Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
            <Card2
              title="Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
            <Card2
              title="Full Stack Web Dev"
              duration="8 weeks"
              image="https://internshala.com/static/images/home/trainings/images/web_development.png"
              rating="4.2"
              learners="231"
            />
          </>
        ) : (
          <>
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
            <Card3
              title="web"
              duration="2 months"
              image="https://internshala.com/static/images/home/specializations/fsd-min.png"
              rating="4.4"
              opportunities="1 lacs+ "
              salary="25000"
              type="internship"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageS2;
