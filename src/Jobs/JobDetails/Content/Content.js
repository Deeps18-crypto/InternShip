import React, { useState, useEffect } from "react";
import ContentData from "./ContentData";
import { db } from "../../../firebase";
import ContentSpinner from "./ContentSpinner";
import "./Content.css";

function Content() {
  const [details, setdetails] = useState(null);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState(false);

  useEffect(() => {
    setloading(true);
    seterrors(false);
    db.collection("posts")
      .get()
      .then((snapshot) => {
        const post = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          post.push(data);
        });
        console.log(snapshot);
        setdetails(post);
        setloading(false);
      })
      .catch((errors) => {
        alert("Network error!!");
        console.log(errors);
      });
  }, []);
  console.log(details);

  let data = (
    <div>
      {details &&
        details.map((detail) => (
          <ContentData
            key={detail.id}
            title={detail.title}
            place={detail.place}
            time={detail.time}
            qualification={detail.qualification}
            amount={detail.amount}
            date={detail.date}
          />
        ))}
    </div>
  );
  if (loading) {
    data = <ContentSpinner />;
  }
  if (errors) {
    return <div>Network error..</div>;
  }
  return <div className="content">{data}</div>;
}
export default Content;
