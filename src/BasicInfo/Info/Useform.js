import React,{useState,useEffect} from 'react'
import ValidateInfo from './ValidateInfo'

const Useform=(callback)=> {
    const [values,setvalues] = useState({
        firstname:"",
        lastname:"",
        phnnum:"",
        emgnum:"",
        address:"",
        city:"",
        state:"",
        zipcode:"",
        email:"",
        dob:""
      
      })
      const [errors,seterrors]=useState({})
      const [submit,setsubmit]=useState(false)

      
      const handleChange=(e)=>{
        setvalues({
          ...values,
        [e.target.name]:e.target.value
        })
      }
        //submitting the total form 
      
      const submitHandler=(e)=>{
        e.preventDefault();
        seterrors(ValidateInfo(values))
        setsubmit(true)
       // alert(`${values.firstname} ${values.lastname} ${values.phnnum} ${values.emgnum} ${values.address} ${values.city} ${values.state} ${values.zipcode} ${values.email} ${values.dob}`)

      }
      useEffect(()=>{
        if(Object.keys(errors).length === 0 && submit){
          callback();
        }
    },[errors])
    
 
    return {submitHandler,handleChange,values,errors}
}
export default Useform
