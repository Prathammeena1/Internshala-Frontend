import React from 'react'

const Card1 = ({
    isActivelyHiring,
    title,
    company,
    location,
    stipend,
    type,
    duration,
    logo,
}) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray/[.1]  w-[284px] flex-shrink-0 h-[316px] flex flex-col justify-between">
          {isActivelyHiring && <div className="space-x-2 text-xs font-medium border border-gray/[.1] px-3 py-1 rounded-md w-fit">
            <img
              src="/images/growth.png"
              className="w-[15px] rotate-[-45deg] inline-block"
              alt=""
            />
            <span className="flex-shrink-0">Actively hiring</span>
          </div>}
          <div className="mt-3 flex justify-between">
            <div>
              <h1 className="font-semibold text-sm w-[60%] mb-2">
                {title}
              </h1>
              <p className="text-xs font-semibold text-gray/[.6]">
                {company}
              </p>
            </div>
            {logo && <div className="h-[15px] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={logo}
                alt=""
              />
            </div>}
          </div>
          <hr className="border-gray/[.1] my-5 " />
          <div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-map-pin-line text-gray/[.8]"></i>{" "}
            <span className="text-xs">{location}</span>
          </div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-wallet-line text-gray/[.8] my-3"></i>{" "}
            <span className="text-xs">₹ {stipend}</span>
          </div>
          <div className="text-sm flex items-center gap-1 font-medium ">
            {" "}
            <i className="ri-calendar-line text-gray/[.8]"></i>{" "}
            <span className="text-xs">{duration}</span>
          </div>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <button className="bg-gray/[.1] py-[1px] px-1 text-xs rounded-sm text-gray/[.9] font-medium ">{type}</button>
            <div className="text-primaryHover flex items-center gap-1 cursor-pointer">
              <h3 className="text-sm font-semibold">View details</h3>
              <i className="ri-arrow-right-s-line text-xl"></i>
            </div>
          </div>
        </div>
  )
}

export default Card1