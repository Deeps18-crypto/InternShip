import React from 'react';
import "./Nurse.css";
import NurseLogo from "../assests/nurse.JPG"
import {useHistory} from "react-router-dom"

function Nurse() {
    const history = useHistory()

  const clickHandler=()=>{
    history.push("/Application-page")
  }
    return (
        <div className="nurse">
          <h2>Nurse</h2>
          <img src={NurseLogo} alt=""  />
          <p>Sign up as a Nurse</p>
          <button onClick={clickHandler}>Sign Up</button>
      </div>
    )
}

export default Nurse


















// import React from 'react'
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import "./Signup.css"

// const style ={
//     root:{
//         marginLeft :"22%"
//         }
// };

// const useStyle = makeStyles(style)

// function Signup() {
//  const classes = useStyle()
//      return (
//       <div className={classes.root}>
//           <Button variant="contained" color="primary" className="Signup__button">
//          SignUp
//          </Button>
//      </div>
//     )
// }

// export default Signup
