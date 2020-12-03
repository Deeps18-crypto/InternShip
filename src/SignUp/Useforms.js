import { useState, useEffect } from "react";
import Validate from "./Validate";
import axios from "axios";
import SignUp from "./SignUp";
import { useHistory } from "react-router-dom";

const Useforms = (callback) => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    valid: true,
  });

  const [errors, seterrors] = useState({});
  const [submit, setsubmit] = useState(false);
  const [formisValid, setformisValid] = useState(false);
  const history = useHistory();

  const handlerChange = (e) => {
    const updatedform = { ...values };
   // updatedform.valid = Validate(updatedform.value);
   // console.log(updatedform)
    let formisValid = true;
    for (let value in values) {
      formisValid = values[value].valid && formisValid;
      console.log(formisValid);
      console.log(values);
    }
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setformisValid({ formisValid: formisValid });
    //console.log(formisValid);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    seterrors(Validate(values));

    // const formData = {};
    // for (let value in values) {
    //   formData[value] = values[value].values;
    // }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", values)
      .then((response) => {
        console.log(response);
        history.push("/BasicInfo");
      })
      .catch((error) => {
        console.log(error);
      });
    setsubmit(true);
    console.log(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback();
    }
  }, [errors]);
  return { submitHandler, handlerChange, values, errors, formisValid };
};

export default Useforms;
