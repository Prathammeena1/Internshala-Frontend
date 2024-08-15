import React from "react";
import Poster from "./Poster";

const HomepageS1 = ({internships}) => {
  return (
    <div className="HomepageS1 my-24 px-32">
      <h1 className="text-5xl font-bold text-darkGray text-center mb-8 flex flex-col items-center">
        <span>Make your dream career a reality</span>
        <img className="w-[20vw]" src="/images/underline.png" alt="" />
      </h1> 
      <h2 className="text-3xl font-bold text-darkGray text-center text-gray-600 mb-8">
        Trending on Internshala 🔥
      </h2>

      {internships && <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto">

        {internships.map((internship,i)=> <Poster key={i}
  url={
    internship.image.url
  }
/>)}


</div> }
      
      
    </div>
  );
};

export default HomepageS1;
