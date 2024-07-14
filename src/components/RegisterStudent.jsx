import React from "react";
import { Link } from "react-router-dom";

const RegisterStudent = () => {
  return (
    <div className="pt-20">
      <h1 className="text-5xl font-bold text-darkGray text-center flex flex-col items-end w-fit mx-auto">
        <span>Sign-up and apply for free</span>
        <img className="w-[18vw]" src="/images/underline.png" alt="" />
      </h1>
      <h2 className="text-2xl font-meduim text-darkGray text-center mt-[-3vh] text-gray-600">
        1,50,000+ companies hiring on Internshala
      </h2>

      <div className="w-full max-w-md p-6 bg-white rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] mx-auto mt-10">
        <div>
          <button className="w-full py-2 mb-4 text-sm font-medium text-gray rounded border flex justify-center gap-2 items-center">
            <img
              className="h-4"
              src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
              alt=""
            />
            Login with Google
          </button>
          <div className="flex gap-2 items-center mb-5">
            <hr className="w-1/2" />
            <span className="text-center text-gray-400 text-xs">OR</span>
            <hr className="w-1/2" />
          </div>
          <form>
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> email </span>
              <input
                type="email"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> password </span>
              <input
                type="password"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="Password (Must be at least 6 characters)"
              />
            </div>
            <div className="flex mb-2 gap-2">
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> first name </span>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="John"
              />
            </div>
            <div className="mb-4">
              <span className="text-sm capitalize font-medium"> last name </span>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border border-gray/[.5] rounded focus:outline-none focus:border-primaryHover"
                placeholder="doe"
              />
            </div>

            </div>
            <p className="text-xs mb-2">By signing up, you agree to our  <Link className='text-primary' >Terms and Conditions.</Link> </p>
            <button className="w-full py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primaryHover">
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600 font-medium">
           Already registered {" "}
            <a href="#" className="text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;
