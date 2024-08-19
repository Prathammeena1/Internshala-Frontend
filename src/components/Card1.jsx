import React from "react";
import { formatDate } from "./utils/dateConvert";
import Button from "./Button";

const Card1 = ({
  isActivelyHiring,
  title,
  company,
  location,
  stipend,
  type,
  duration,
  logo,
  applicants,
  from,
  to,
  responsibility,
  skills,
  assessment,
  perks,
  openings,
}) => {
  return (
    <div className=" p-5 rounded-xl shadow text-zinc-200 shadow-zinc-800  w-1/2 flex-shrink-0">
      {isActivelyHiring && (
        <div className="space-x-2 text-xs font-medium border border-gray/[.1] px-3 py-1 rounded-md w-fit">
          <img
            src="/images/growth.png"
            className="w-[15px] rotate-[-45deg] inline-block"
            alt=""
          />
          <span className="flex-shrink-0">Actively hiring</span>
        </div>
      )}
      <div className="mt-3 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-zinc-200 text-2xl capitalize mb-2">
            {title}
          </h1>
          <p className="text-xs font-semibold text-gray/[.6]">{company}</p>
        </div>
        {logo && (
          <div className="h-[60px] overflow-hidden">
            <img className="h-full w-full object-cover" src={logo} alt="" />
          </div>
        )}
      </div>

      {/* type */}
      <div className="flex items-center my-4 w-fit text-zinc-400 gap-2">
        {type.includes("office") ? (
          <i className="ri-building-2-line"></i>
        ) : (
          <i className="ri-home-4-line"></i>
        )}
        <span>{type}</span>
      </div>

      {/* durations */}
      <div className="flex items-center text-xs my-6 justify-between text-zinc-400 gap-2">
        <div>
          <div className="tracking-wider uppercase">
            {" "}
            <i className="ri-play-circle-line"></i> Start date
          </div>
          <span className=" tracking-wide">{formatDate(from)}</span>
        </div>
        <div>
          <div className="tracking-wider uppercase ">
            {" "}
            <i className="ri-calendar-2-line"></i> Duration
          </div>
          <span className=" tracking-wide capitalize">{duration}</span>
        </div>
        <div>
          <div className="tracking-wider uppercase ">
            {" "}
            <i className="ri-stop-circle-line"></i> End date
          </div>
          <span className=" tracking-wide">{formatDate(to)}</span>
        </div>
        <div>
          <div className="tracking-wider uppercase ">
            {" "}
            <i className="ri-wallet-2-line"></i> Stipend
          </div>
          <span className=" tracking-wide">{stipend}</span>
        </div>
      </div>

      {/* applicants */}
      <div className="flex items-center w-fit text-zinc-400 gap-2">
        <i className="ri-group-line text-2xl text-zinc-600"></i>
        <span>
          {applicants.length < 10
            ? `${applicants.length}`
            : `${Math.floor(applicants.length / 10) * 10}+`}
        </span>{" "}
        <span>applicants</span>
      </div>

      <hr className="border-gray/[.5] my-5 " />

      <div className="w-[70%]">
        <div className="my-6">
          <div>Responsibilies</div>
          <span className="text-sm font-light tracking-wider">
            {responsibility}
          </span>
        </div>

        <div className="my-6">
          <div>Skills</div>
          <span className="text-sm font-light tracking-wider">{skills}</span>
        </div>

        <div className="my-6">
          <div>Assessment</div>
          <span className="text-sm font-light tracking-wider">
            {assessment}
          </span>
        </div>

        <div className="my-6">
          <div>Perks</div>
          <span className="text-sm font-light tracking-wider">{perks}</span>
        </div>

        <div className="my-6">
          <div>Number of openings</div>
          <span className="text-sm font-light tracking-wider">{openings}</span>
        </div>
      </div>

      <div className="w-full text-center">
        <Button text={"Apply Now"} type={"fill"} />
      </div>

    </div>
  );
};

export default Card1;
