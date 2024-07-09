// src/HomePage.js
import React from "react";
import Nav from "./Nav";
import Poster from "./Poster";
import HomepageS1 from "./HomepageS1";
import HomepageS2 from "./HomepageS2";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="container mx-auto px-32 py-12">
        <HomepageS1/>
        <HomepageS2/>
      </main>
    </div>
  );
};

export default HomePage;
