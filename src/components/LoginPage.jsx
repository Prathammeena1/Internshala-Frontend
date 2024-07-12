import React, { useState } from "react";

function LoginPage() {
  const [activeTab, setActiveTab] = useState("Student");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 fixed top-0 h-screen w-full bg-gray/[.5] z-[99]">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div className="flex mb-4">
          <button
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === "Student"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Student")}
          >
            Student
          </button>
          <button
            className={`w-1/2 py-2 text-sm font-medium ${
              activeTab === "Employer"
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("Employer")}
          >
            Employer / T&P
          </button>
        </div>

        <div>
          {activeTab === "Student" && (
            <div>
              <button className="w-full py-2 mb-4 text-sm font-medium text-gray bg-red-500 rounded border flex justify-center gap-2 items-center">
                <img
                  className="h-4"
                  src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
                  alt=""
                />
                Login with Google
              </button>
              <div className="flex gap-2 items-center mb-5" >
                <hr className="w-1/2" />
                <span className="text-center text-gray-400 text-xs">OR</span>
                <hr className="w-1/2" />
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:border-blue-500"
                    placeholder="Password (Must be at least 6 characters)"
                  />
                </div>
                <div className="flex justify-end mb-4">
                  <a
                    href="#"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button className="w-full py-2 text-sm font-medium text-white font-semibold bg-primary rounded hover:bg-blue-600">
                  Login
                </button>
              </form>
              <div className="mt-4 text-center text-sm text-gray-600">
                New to Internshala?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Register (Student / Company)
                </a>
              </div>
            </div>
          )}

          {activeTab === "Employer" && (
            <div>{/* Add Employer / T&P login form here */}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
