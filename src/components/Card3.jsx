import React from "react";

const Card3 = ({ title, duration, image, rating, opportunities,salary,type }) => {


    const style = {
        background: 'linear-gradient(90deg, #fff8c4 60.53%, #fff8c400 100%)'
    }

  return (
    <div className="bg-white rounded-xl border border-gray/[.1] w-[288px] flex-shrink-0 flex flex-col overflow-hidden h-[55vh]">
      <img src={image} alt="" />
      <div className="p-5 flex flex-col justify-between h-full">
        <h1 className="text-xl font-bold">{title}</h1>
        <h1 className="text-xs font-semibold text-darkGolden p-1 px-3 rounded my-3" style={style}> course with guaranteed {type}</h1>
        <div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-time-line text-gray/[.8]"></i>{" "}
            <span className="text-xs">{duration}</span>
          </div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-money-rupee-circle-line text-gray/[.8] my-3"></i>{" "}
            <span className="text-xs">₹ {salary}</span>
          </div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-briefcase-3-line text-gray/[.8]"></i>{" "}
            <span className="text-xs">{opportunities} job/internship opportunities</span>
          </div>
        </div>
        <div className="text-primaryHover flex items-center gap-1 cursor-pointer">
          <h3 className="text-sm font-semibold">Know more</h3>
          <i className="ri-arrow-right-s-line text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Card3;
