

function ValidateInfo(values) {
    
    let errors ={}
    if(!values.firstname.trim()){
        errors.firstname = "Firstname is required"
    }
    if(!values.lastname.trim()){
        errors.lastname = "Lastname is required"
    }
    if(!values.phnnum.trim()){
        errors.phnnum = "Phonenumber is required"
    }
    if(!values.emgnum.trim()){
        errors.emgnum = "Emergency number is required"
    }
    if(!values.street_address.trim()){
        errors.street_address = "Address is required"
    }
    if(!values.city.trim()){
        errors.city = "city is required"
    }
    if(!values.state.trim()){
        errors.state = "state required"
    }
    if(!values.zipcode.trim()){
        errors.zipcode = "zipcode required"
    }
    else if(values.zipcode.length < 5){
        errors.zipcode = "zipcode is to short" 
    }
    else if(values.zipcode.length >5){
        errors.zipcode = "zipcode is undefined"
    }
    if(!values.secondary_email.trim()){
        errors.secondary_email ="email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.secondary_email)){
        errors.secondary_email="Email address is invalid"
    }else if(!values.secondary_email.includes("@gmail.com")){
        errors.secondary_email = "invalid mail"
    }
    if(!values.dob.trim()){
        errors.dob ="DOB is required"
    }
    else if(!values.dob.includes("/")){
        errors.dob ="/ is required"
    }
    else if(values.dob.length > 10){
        errors.dob ="invalid DOB"
    } 
     else if(values.dob.length < 10){
        errors.dob ="invalid DOB"
    }
   
    return errors
}
export default ValidateInfo;
