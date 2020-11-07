import {useState,useEffect} from 'react'
import Validate from "./Validate"

const Useforms=(callback)=> {
   const [values,setvalues] = useState({
    email:"",
    password:"",
    confirmpassword:""
   })
  const [errors,seterrors] = useState({})
  const [submit,setsubmit] = useState(false)

 
   const handlerChange = (e)=>{
       setvalues({
           ...values,
        [e.target.name] : e.target.value
    })
   }
   const submitHandler = (e)=>{
    e.preventDefault()
    seterrors(Validate(values))
    setsubmit(true)
    console.log(values)
}
useEffect(()=>{
  if(Object.keys(errors).length===0 && submit){
      callback()
  }
},[errors])
   return{submitHandler,handlerChange,values,errors}
}

export default Useforms
