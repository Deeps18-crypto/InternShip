import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountInformationRightChild from "./AccountInformationRightChild";

function AccountInformationRight() {
  const [datas, setDatas] = useState([]);
  console.log(datas);
  useEffect(() => {
    axios
      .get("https://nursd-42b0a-default-rtdb.firebaseio.com/Info.json")
      .then((response) => {
        const fetchData = [];
        for (let key in response.data) {
          fetchData.unshift({
            ...response.data[key],
          });
        }
        setDatas(fetchData);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ flex: "0.7" }}>
      {datas.map((detail) => (
        <AccountInformationRightChild
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
}

export default AccountInformationRight;
