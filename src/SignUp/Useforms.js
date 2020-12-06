import React, { Component } from "react";
import axios from "axios";
import Inputs from "./Inputs";
import "./Useforms.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, Redirect } from "react-router-dom";

class Useforms extends Component {
  state = {
    orderform: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        error: <p>email is invalid</p>,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        value: "",
        validation: {
          required: true,
          minlength: 8,
          maxlength: 8,
        },
        valid: false,
        touched: false,
        error: <p>password is to short</p>,
      },
      confirmpassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "confirmpassword",
        },
        value: "",
        validation: {
          required: true,
          minlength: 8,
          maxlength: 8,
        },
        valid: false,
        touched: false,
        error: <p>password is to short</p>,
      },
    },
    formisValid: false,
    isSubmitted: false,
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minlength) {
      isValid = value.length >= rules.minlength && isValid;
    }
    if (rules.maxlength) {
      isValid = value.length <= rules.maxlength && isValid;
    }
   
   
    return isValid;
  }

  changeHandler = (e, inputIdentifier) => {
    console.log(e.target.value);
    const formdata = { ...this.state.orderform };
    const updateform = { ...formdata[inputIdentifier] };
    updateform.value = e.target.value;
    updateform.valid = this.checkValidity(
      updateform.value,
      updateform.validation
    );
    updateform.touched = true;

    formdata[inputIdentifier] = updateform;
    console.log(updateform);
    let formisValid = true;
    for (let inputIdentifier in formdata) {
      formisValid = formdata[inputIdentifier].valid && formisValid;
    }
    this.setState({ orderform: formdata, formisValid: formisValid });
  };

  orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formdata in this.state.orderform) {
      formData[formdata] = this.state.orderform[formdata].value;
    }
    const data = {
      data: formData,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        this.setState({ isSubmitted: true });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    let redirect = null;
    if (this.state.isSubmitted) {
      redirect = <Redirect to="/BasicInfo" />;
    }
    const formElementArray = [];
    for (let key in this.state.orderform) {
      formElementArray.push({
        id: key,
        config: this.state.orderform[key],
      });
    }

    return (
      <div className="useforms">
        {redirect}
        <Link to="/">
          <div className="useforms__align">
            <ArrowBackIcon className="useforms__arrowIcon" />
          </div>
        </Link>
        <h2>
          Great,<br></br>
          Let's start with your application
        </h2>
        <form onSubmit={this.orderHandler}>
          {formElementArray.map((formElement) => (
            <Inputs
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(e) => this.changeHandler(e, formElement.id)}
              invalid={!formElement.config.valid}
              errorMessage={formElement.config.error}
              touched={formElement.config.touched}
            />
          ))}
          <button
            className="useforms__button"
            disabled={!this.state.formisValid}
          >
            Create Account
          </button>
        </form>
      </div>
    );
  }
}
export default Useforms;
