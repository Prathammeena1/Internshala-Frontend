import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white shadow fixed w-full">
      <div className="container mx-auto px-32 py-4  text-sm flex justify-between items-center">
        <div className="flex gap-4 items-end">
          <div>
            <i className="ri-menu-2-line xl:hidden"></i>
          </div>
          <div className="h-[36px]">
            <img
              className="h-full w-full object-cover"
              src="/images/logo.png"
              alt=""
            />
          </div>
          <div className="ml-10 flex gap-8 ">
            <div className="capitalize font-semibold text-gray"><h3>internships <i className="ri-arrow-down-s-fill"></i></h3></div>
            <div className="capitalize font-semibold text-gray"><h3>Jobs <i className="ri-arrow-down-s-fill"></i></h3></div>
            <div className="capitalize font-semibold text-gray"><h3>Courses <i className="ri-arrow-down-s-fill"></i></h3></div>
          </div>
        </div>
        <div className="space-x-4 font-semibold flex items-center text-sm capitalize">
          <div className="flex text-gray gap-2 font-normal">
            <i className="ri-search-2-line"></i>
            <h3>search</h3>
          </div>
          <Link to={'/login'}><Button text={"login"} /></Link>
          <Button text={"Candidate Sign-up"} type={"fill"} />
          <Button text={"Employer Sign-up"} type={"fill"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
