import React from "react";
import Swiper1 from "./swiper/swiper1";
import Poster from "./Poster";

const HomepageS1 = () => {
  return (
    <div className="HomepageS1 mt-24">
      <h1 className="text-5xl font-bold text-darkGray text-center mb-8 flex flex-col items-center">
        <span>Make your dream career a reality</span>
        <img className="w-[20vw]" src="/images/underline.png" alt="" />
      </h1> 
      <h2 className="text-3xl font-bold text-darkGray text-center text-gray-600 mb-8">
        Trending on Internshala 🔥
      </h2>
      <div className="noScrollBar flex overflow-x-auto gap-5 items-center w-[78vw] mx-auto">
        <Poster
          url={
            "https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png"
          }
        />
        <Poster
          url={
            "https://internshala-uploads.internshala.com/banner-images/home_new/employers_choice_launch_july24-student.png.webp"
          }
        />
        <Poster
          url={
            "https://internshala-uploads.internshala.com/banner-images/home_new/mahindra_logistics-student.png.webp"
          }
        />
        <Poster
          url={
            "https://internshala-uploads.internshala.com/banner-images/home_new/mahindra_logistics-student.png.webp"
          }
        />
        <Poster
          url={
            "https://internshala-uploads.internshala.com/banner-images/home_new/planetspark-student.png.webp"
          }
        />
        <Poster
          url={
            "https://internshala-uploads.internshala.com/banner-images/home_new/swiggy_internship_mar24-student.png.webp"
          }
        />
      </div>
      {/* <Swiper1/> */}
      
    </div>
  );
};

export default HomepageS1;
