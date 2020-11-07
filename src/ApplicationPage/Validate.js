const Validate = (values)=>{
 
    let errors = {}
 if(!values.email.trim()){
        errors.email ="email is required"
}
else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email="email address is invalid"
}else if(!values.email.includes("@gmail.com")){
    errors.email = "invalid email"
}
if(!values.password.trim()){
    errors.password ="password is required"
}
else if(values.password.length < 6){
    errors.password ="password should be greater than six"
}

 if(!values.confirmpassword.trim()){
    errors.confirmpassword ="confirm password is required"
}

else if(values.confirmpassword !== values.password){
    errors.confirmpassword ="password does not match"
}

 return errors
}
export default Validate