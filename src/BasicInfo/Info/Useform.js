import { useState, useEffect } from "react";
import ValidateInfo from "./ValidateInfo";

const Useform = (callback) => {
  const [values, setvalues] = useState({
    firstname: "",
    lastname: "",
    phnnum: "",
    emgnum: "",
    secondary_email: "",
    dob: "",

    street_address: "",
    city: "",
    state: "",
    zipcode: "",

    RN: false,
    LPN: false,
    CRNA: false,
    CNM: false,
    CNS: false,
    CNASTNA: false,

    morning: false,
    afternoon: false,
    night: false,
    weekend: false,
    weekday: false,
    rotating: false,

    six: false,
    eight: false,
    ten: false,
    twelve: false,
    nopreference: false,

    lessthanayear: false,
    onetwo: false,
    two: false,
  });

  const [errors, seterrors] = useState({});
  const [submit, setsubmit] = useState(false);

  const handleChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handlecheckChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  //submitting the total form

  const submitHandler = (e) => {
    e.preventDefault();
    seterrors(ValidateInfo(values));
    setsubmit(true);
    console.log(values);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback();
    }
  }, [errors]);

  return { submitHandler, handleChange, handlecheckChange, values, errors };
};
export default Useform;
