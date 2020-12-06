import React from "react";
import "./Inputs.css";

function Inputs(props) {
  let inputElement = null;
  const inputClasses = ["inputs__input"];
  if (props.invalid && props.touched) {
    inputClasses.push("inputs__invalid");
    //validationError = <p>{props.errorMessage}</p>;
  }
  let validationError = null
  if (props.invalid && props.touched) {
    validationError = <p>{props.errorMessage}</p>;
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className={inputClasses.join(" ")}
          onChange={props.changed}
        />
      );
      break;
    // case "textarea":
    //   inputElement = (
    //     <textarea
    //       {...props.elementConfig}
    //       value={props.value}
    //       className={inputClasses.join(" ")}
    //       onChange={props.changed}
    //     />
    //   );
    //   break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="inputs">
      {inputElement}
      {validationError}
    </div>
  );
}

export default Inputs;
