import React, { useRef } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutemployee } from "../store/actions/employeeActions";
import { logoutstudent } from "../store/actions/studentActions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Nav = () => {
  const { employee } = useSelector((state) => state.employeeSlice);
  // console.log(employee)
  const { student } = useSelector((state) => state.studentSlice);
  const dispatch = useDispatch();

  const logoutEmployeeHandler = () => {
    dispatch(logoutemployee());
  };
  const logoutStudentHandler = () => {
    dispatch(logoutstudent());
  };


  const menu = useRef(null)


  const showMenu = () => { 
    gsap.to(menu.current, {
      display: 'flex',
      opacity: 1,
      duration: 0.5,
      ease: 'elastic', 
    });
  };
  
  const hideMenu = () => { 
    gsap.to(menu.current, {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      ease: 'elastic', 
    });
  };
  


  
  



  return (
    <nav className="bg-zinc-900 shadow-zinc-800 shadow fixed w-full z-[2]">
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

          {Object.keys(student).length == 0 &&
            Object.keys(employee).length == 0 && (
              <div className=" ml-10 flex gap-8 items-center ">
                <div className="capitalize font-semibold text-zinc-400">
                  <h3>
                    internships <i className="ri-arrow-down-s-fill"></i>
                  </h3>
                </div>
                <div className="capitalize font-semibold text-zinc-400">
                  <h3>
                    Jobs <i className="ri-arrow-down-s-fill"></i>
                  </h3>
                </div>
                <div className="capitalize font-semibold text-zinc-400">
                  <h3>
                    Courses <i className="ri-arrow-down-s-fill"></i>
                  </h3>
                </div>
              </div>
            )}
        </div>

        <div className="space-x-4 font-semibold flex items-center text-sm capitalize">
          {Object.keys(student).length > 0 && (
            <div className="flex gap-8 items-center ">
              <div className="capitalize font-semibold text-zinc-400">
                <h3>
                  internships <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-zinc-400">
                <h3>
                  Jobs <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-zinc-400">
                <h3>
                  Courses <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>

              <div className="h-7 aspect-square bg-zinc-500 rounded-full relative">
                <img
                  onMouseEnter={showMenu}
                  onMouseLeave={hideMenu}
                  src={student.avatar.url}
                  className="h-full w-full rounded-full object-cover object-center"
                  alt=""
                  />
                <div
                  ref={menu}
                  onMouseEnter={showMenu}
                  onMouseLeave={hideMenu}
                  className="menu absolute hidden opacity-0 bg-zinc-700 top-[150%] flex flex-col gap-[1.1px] w-[200px] items-center justify-between left-[50%] translate-x-[-50%] overflow-hidden rounded-sm"
                >
                  <Link
                  
                    className="capitalize text-base font-light bg-zinc-800 px-4 py-2 w-full hover:bg-zinc-900 hover:text-primary duration-[.3s]"
                  >
                    My Applications
                  </Link>
                  <Link
                    onClick={logoutStudentHandler}
                    className="capitalize text-base font-light bg-zinc-800 px-4 py-2 w-full hover:bg-zinc-900 hover:text-primary duration-[.3s]"
                  >
                    log out
                  </Link>
                </div>
              </div>
            </div>
          )}
          {Object.keys(employee).length == 0 &&
          Object.keys(student).length == 0 ? (
            <>
              <div className="flex text-zinc-400 gap-2 font-normal">
                <i className="ri-search-2-line"></i>
                <h3>search</h3>
              </div>
              <Link to={"/login"}>
                <Button text={"login"} />
              </Link>
              <Link to={"/register/student"}>
                {" "}
                <Button text={"Candidate Sign-up"} type={"fill"} />
              </Link>
              <Link to={"/register/employee"}>
                {" "}
                <Button text={"Employer Sign-up"} type={"fill"} />
              </Link>
            </>
          ) : (
            ""
          )}
          {Object.keys(employee).length > 0 && (
            <div className="space-x-8">
              <NavLink
                to="/employee/dashboard"
                className={({ isActive }) => (isActive ? "text-primary " : "")}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/employee/post/internships"
                className={({ isActive }) => (isActive ? "text-primary " : "")}
              >
                Post Internships
              </NavLink>
              <NavLink
                to="/employee/post/jobs"
                className={({ isActive }) => (isActive ? "text-primary " : "")}
              >
                Post Jobs
              </NavLink>
              <Link onClick={logoutEmployeeHandler}>
                <Button text={"logout"} type={"fill"} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
