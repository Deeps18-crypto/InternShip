import React, { useEffect, useState } from "react";
import JobApplication from "./JobApplication";
import "./JobApplicationMain.css";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";
import onelogo from "../assests/Group 62.png";
import DetailedRows from "../DetailedJobs/DetailedRows/DetailedRows";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import JobFooter from "../Jobs/JobFooter/JobFooter";
import { useStateValue } from "../StateProvider";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";

function JobApplicationMain() {
  const [{ card }, dispatch] = useStateValue();
  const { id } = useParams();
  const [post, setpost] = useState([]);

  // useEffect(() => {
  //   if (id) {
  //     db.collection("jobs")
  //       .doc(id)
  //       .onSnapshot((snapshot) => {
  //         setpost(
  //           snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data() }))
  //         );
  //       });
  //   }
  // }, []); 



  
  return (
    <div className="jobApplicationMain">
      <JobsHeader />
      <div className="jobApplicationMain__head">
        <Link to="/jobs">
          <ArrowBackIosIcon />
        </Link>
        <h2>XYZ Facility is looking for talented professionals like you</h2>
      </div>
      {card.map((item) => (
        <JobApplication
          id={item.id}
          title={item.title}
          place={item.place}
          time={item.time}
          qualification={item.qualification}
          amount={item.amount}
          date={item.date}
          image={item.image}
          key={item.id}
          location={item.location}
        />
      ))}

      <div className="jobApplicationMain__content">
        <h2>Complete these Necessary Steps</h2>
        <div className="jobApplicationMainbody">
          <div className="jobApplicationMainbody__logo">
            <img src={onelogo} />
          </div>
          <div className="jobApplicationMainbody__content">
            <h4>Provide additional documents relevant for this job</h4>
            <p>
              The facility you're applying for needed these documents.
              <br />
              You'll be unable to submit your application without these.
            </p>
            <button className="jobApplicationMainbody__button1">Upload</button>
            <button className="jobApplicationMainbody__button2">
              Submit the application
            </button>
          </div>
        </div>
      </div>
      <DetailedRows />
      <JobFooter />
    </div>
  );
}

export default JobApplicationMain;
