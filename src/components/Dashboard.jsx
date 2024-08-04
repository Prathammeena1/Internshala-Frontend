import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 pt-28 bg-gray-100 min-h-screen">
      {/* <div className="bg-blue-50 p-4 rounded-lg mb-6 shadow-sm">
        <p className="text-sm text-gray-700">
          Post unlimited listings and get access to features like boosted visibility,
          applicant contact numbers, etc., with Internshala Premium. 
          <a href="#" className="text-blue-600 font-semibold"> View Premium Plans now</a>
        </p>
      </div> */}
      <div className="bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex space-x-8">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Internships</button>
            <button className="text-gray-500">Jobs</button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4 py-2 border-b font-semibold text-gray-600">
            <div>PROFILE</div>
            <div>STATUS</div>
            <div className="text-center">TOTAL VIEWS</div>
            <div className="text-center">ACTION</div>
            <div className="text-center">UPGRADE TO PREMIUM</div>
            <div className="text-center">SHARE ON LINKEDIN</div>
          </div>
          <div className="grid grid-cols-6 gap-4 py-4 text-gray-700">
            <div>Web Development</div>
            <div className="text-blue-500">Under review</div>
            <div className="text-center">0</div>
            <div className="text-center">
              <button className="text-blue-600 hover:underline">Manage</button>
            </div>
            <div className="text-center">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Upgrade</button>
            </div>
            <div className="text-center">
              <button className="text-blue-600 hover:underline">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
