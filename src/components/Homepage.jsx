// src/HomePage.js
import React, { useState } from "react";
import Nav from "./Nav";
import HomepageS1 from "./HomepageS1";
import HomepageS2 from "./HomepageS2";
import HomepageS3 from "./HomepageS3";
import Home from "./Home";

const HomePage = () => {




  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Home/>
    </div>
  );
};

export default HomePage;
