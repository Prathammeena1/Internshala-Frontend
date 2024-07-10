import React from "react";

const Card2 = ({
  title,
  duration,
  image,
  rating,
  learners
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray/[.1]  w-[288px] flex-shrink-0 flex flex-col justify-between overflow-hidden">
      <img
        src={image}
        alt=""
      />
      <div className="p-5 flex flex-col justify-between">
        <h3 className="font-medium text-gray" >{duration}</h3>
        <h1 className="text-lg font-bold">{title}</h1>
        <div className="flex gap-2 items-center" >
        <i class="ri-star-s-fill text-[#FFAE00] text-lg"></i> <p className="text-sm font-medium text-gray " >{rating}</p> <span className="text-2xl text-primary/[.2] ">|</span> <p className="text-sm font-medium text-gray " >{learners}</p>
        </div>
        <div className="text-primaryHover flex items-center gap-1 cursor-pointer">
              <h3 className="text-sm font-semibold">Know more</h3>
              <i className="ri-arrow-right-s-line text-xl"></i>
            </div>
      </div>
    </div>
  );
};

export default Card2;
