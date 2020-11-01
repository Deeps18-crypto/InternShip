import React from 'react'
import "./Inputs.css"
import {TextField,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link,useHistory} from "react-router-dom"

const style={
    root:{
        width:"50%",
        marginBottom:"2em",
        marginLeft:"8em",
        marginTop:"3em"
   }
}
 const useStyle = makeStyles(style)

function Inputs() {
    const history = useHistory()
    const changeHandler = ()=>{
        history.push("/Basicinfo")
    }
    const classes = useStyle()
    return (
     <div className="inputs">
     <Link to="/">
     <div className="inputs__align">

     <ArrowBackIcon className="inputs__arrowIcon"/>
     </div>

     </Link>
     
        <h2>Great,<br></br>
        Let's start with your application</h2>
        <TextField className={classes.root} variant="outlined" label="Email"  /><br/>
        <TextField className={classes.root} variant="outlined" label="Create a Password" /><br/>
        <TextField className={classes.root} variant="outlined" label="Confirm a Password" /><br/>
        <button onClick={changeHandler}>Create a Account</button>
        </div>
        
    )
}

export default Inputs
