import React from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutemployee } from "../store/actions/employeeActions";
import { logoutstudent } from "../store/actions/studentActions";

const Nav = () => {
  const { employee } = useSelector((state) => state.employeeSlice);
  // console.log(employee)
  const { student } = useSelector((state) => state.studentSlice);
  const dispatch =  useDispatch()

  const logoutEmployeeHandler = ()=>{
    dispatch(logoutemployee())
  }
  const logoutStudentHandler = ()=>{
    dispatch(logoutstudent())
  }

  console.log(student)



  return (
    <nav className="bg-white shadow fixed w-full z-[2]">
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

          {
          Object.keys(student).length == 0 && Object.keys(employee).length == 0  && (
            <div className=" ml-10 flex gap-8 items-center ">
              <div className="capitalize font-semibold text-gray">
                <h3>
                  internships <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-gray">
                <h3>
                  Jobs <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-gray">
                <h3>
                  Courses <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
            </div>
          ) }
        </div>

        <div className="space-x-4 font-semibold flex items-center text-sm capitalize">
          {
          Object.keys(student).length > 0 && (
            <div className="flex gap-8 items-center ">
              <div className="capitalize font-semibold text-gray">
                <h3>
                  internships <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-gray">
                <h3>
                  Jobs <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>
              <div className="capitalize font-semibold text-gray">
                <h3>
                  Courses <i className="ri-arrow-down-s-fill"></i>
                </h3>
              </div>


            <div className="h-7 aspect-square bg-zinc-500 rounded-full overflow-hidden">
                <img src={student.avatar.url} className="h-full w-full object-cover object-center" alt="" />
            </div>

              {/* <Link onClick={logoutStudentHandler}>
                <Button text={"logout"} type={"fill"} />
              </Link> */}
            </div>
          ) }
          {Object.keys(employee).length == 0 &&
          Object.keys(student).length == 0 ? (
            <>
              <div className="flex text-gray gap-2 font-normal">
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
                className={({ isActive }) =>
                  isActive ? "text-primary ":''
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/employee/post/internships"
                className={({ isActive }) =>
                  isActive ? "text-primary ":''
                }
              >
                Post Internships
              </NavLink>
              <NavLink
                to="/employee/post/jobs"
                className={({ isActive }) =>
                  isActive ? "text-primary ":''
                }
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
