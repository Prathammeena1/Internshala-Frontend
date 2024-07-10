import React from "react";
import Poster from "./Poster";
import ButtonRounded from "./ButtonRounded";

const HomepageS2 = () => {
  return (
    <div className="HomepageS2 mt-24 bg-lightGray px-32 h-screen pt-14">
      <h2 className="text-3xl font-semibold text-darkGray text-center text-gray-600 mb-8">
        Latest internships on Internshala
      </h2>
      <div className="flex items-center justify-center font-medium text-sm">
        <span className="uppercase font-meduim text-gray">
          popular categories:
        </span>
        <div className="ml-5 space-x-3">
          <ButtonRounded text={"Big brands"} type={"fill"} />
          <ButtonRounded text={"Work from home"} />
          <ButtonRounded text={"Part-time"} />
          <ButtonRounded text={"MBA"} />
          <ButtonRounded text={"Engineering"} />
          <ButtonRounded text={"Media"} />
          <ButtonRounded text={"Design"} />
          <ButtonRounded text={"Data Science"} />
        </div>
      </div>
      <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto mt-8">
        
      </div>
    </div>
  );
};

export default HomepageS2;
