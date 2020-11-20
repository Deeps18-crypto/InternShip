import React from "react";
import "./JobFooter.css";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";
import Footer21 from "./Footer21";
import Footimg from "./Footimg";

function JobFooter() {
  return (
    <div className="jobfooter">
      <Footimg />
      <Footer1 />
      <Footer2 />
      <Footer21 />
    </div>
  );
}

export default JobFooter;
