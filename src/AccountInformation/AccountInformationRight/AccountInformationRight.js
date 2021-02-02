import React, { useEffect, useState } from "react";
import AccountInformationRightChild from "./AccountInformationRightChild";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import AccountInformationRightdata from "./AccountInformationRightdata";
import axios from "axios";
import ContentSpinner from "../../Jobs/JobDetails/Content/ContentSpinner";

function AccountInformationRight() {
  const [info, setinfo] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  console.log("user", user);

  useEffect(() => {
    setLoading(true);
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("info")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setinfo(
            snapshot.docs.map((doc) => ({ id: doc.id, detail: doc.data() }))
          );
          setLoading(false);
        });
    } else {
      setinfo([]);
    }
  }, [user]);

  let data = (
    <div>
      {info &&
        info.map(({ detail, id }) => (
          <AccountInformationRightChild
            key={id}
            firstname={detail.firstname}
            lastname={detail.lastname}
            phone_number={detail.phone_number}
            emergency_number={detail.emergency_number}
            street_address={detail.street_address}
            city={detail.city}
            state={detail.state}
            zipcode={detail.zipcode}
            secondary_email={detail.secondary_email}
            dob={detail.dob}
            qualification={detail.qualification}
            work_shift_types={detail.work_shift_types}
            work_in_shifts={detail.work_in_shifts}
            willingness_to_commute={detail.willingness_to_commute}
          />
        ))}
    </div>
  );
  if (loading) {
    data = <ContentSpinner />;
  }

  return <div style={{ flex: "0.7" }}>{data}</div>;
}

export default AccountInformationRight;
//
