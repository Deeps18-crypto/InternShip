import React, { useState, useEffect } from "react";
import ContentData from "./ContentData";
import { db } from "../../../firebase";
import ContentSpinner from "./ContentSpinner";
import "./Content.css";

function Content() {
  const [details, setdetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState(false);

  useEffect(() => {
    setloading(true);
    seterrors(false);
    db.collection("posts").onSnapshot((snapshot) => {
      setdetails(
        snapshot.docs.map((doc) => ({ id: doc.id, detail: doc.data() }))
      );
      setloading(false);
    });
  }, []);
  console.log(details);

  let data = (
    <div>
      {details.map(({ detail, id }) => (
        <ContentData
          key={id}
          title={detail.title}
          place={detail.place}
          time={detail.time}
          qualification={detail.qualification}
          amount={detail.amount}
          date={detail.date}
          image={detail.image}
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
