import React from "react";
import IndexContent from "./IndexContent";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";

function Index() {
  return (
    <div>
      <div className="container">
        <IndexContent />
        <Services />
        <AboutUs />
      </div>
    </div>
  );
}

export default Index;
