import React from "react";
import IndexContent from "./IndexContent";
import Services from "../components/Services/Services";

function Index() {
  return (
    <div>
      <div className="container">
        <IndexContent />
        <Services />
      </div>
    </div>
  );
}

export default Index;
