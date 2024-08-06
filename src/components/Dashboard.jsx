import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { internships } = useSelector((state) => state.internshipSlice);
  // const internships = []

  console.log(internships);



  const isExpired = (expiryDateStr) => {
    // Parse the given expiry date string into a Date object
    const expiryDate = new Date(expiryDateStr);
    
    // Get the current date
    const currentDate = new Date();
    
    // Check if the current date is past the expiry date
    return currentDate > expiryDate;
  };
  // const expired = ;
  // console.log(expired); // Output: true or false based on the current date
  



  return (
    <div className="p-8 pt-28 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex space-x-8">
            <button className="text-primary duration-[.3s] font-semibold">
              Internships
            </button>
            <button className="text-gray-500">Jobs</button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-5 gap-4 py-2 border-b font-semibold text-gray-600">
            <div>PROFILE</div>
            <div>STATUS</div>
            <div className="text-center">TOTAL Applications</div>
            <div className="text-center">ACTION</div>
            <div className="text-center">SHARE ON LINKEDIN</div>
          </div>
          <div>
            {internships.length > 0 ? (
              internships.map((internship, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 py-4 text-gray-700">
                  <div className="font-semibold text-gray">{internship.profile}</div>
                  {!isExpired(internship.from) ?

                      <div className="text-green-500 font-medium flex items-center gap-2">
                      {" "}
                      <span className=" inline-block h-2 aspect-square rounded-full bg-green-500"></span>{" "}
                      Live
                      </div>
                      :
                      <div className="text-red-500 font-medium flex items-center gap-2 line-through">
                      {" "}
                      <span className=" inline-block h-2 aspect-square rounded-full bg-red-500"></span>{" "}
                      Live

                      </div>

                    }
                 
                  <div className="text-center font-medium">
                    {internship.students.length}
                  </div>
                  <div className="text-center">
                    <button className="text-primary hover:text-primaryHover duration-[.3s] font-medium ">
                      Manage
                    </button>
                  </div>
                  <div className="text-center">
                    <button className="text-primary hover:text-primaryHover duration-[.3s] font-medium">
                      Share
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-4xl my-16 font-bold capitalize ">
                No interships yet ! <br />
                <Link
                  to={"/employee/post/internships"}
                  className=" text-2xl text-primary font-medium border-b-2 duration-[.3s] border-transparent hover:border-primary "
                >
                  Post Internships
                </Link>
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
