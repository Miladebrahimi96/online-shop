export const validation = (data, type) => {
    const errors = {};
    
    if(!data.email){
        errors.email = "Email Required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Invalid Email"
    }else {
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password Required"
    }else if(data.password.length < 8) {
        errors.password = "Password must be at leats 8 characters"
    }else {
        delete errors.password;
    }

    if(type === "signup"){
        if(!data.name.trim()){
            errors.name = "Name Required"
        }else if (data.name.length < 6 ){
            errors.name = "Name must be at least 6 characters"
        }else {
            delete errors.name
        }
        
        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm Your Password"
        }else if (data.confirmPassword !== data.password){
            errors.confirmPassword = "Passwords don't Match"
        }else {
            delete errors.confirmPassword;
        }
        if(data.isAccepted){
            delete errors.isAccepted;
        }else {
            errors.isAccepted = "Accept Our Regulations"
        }
    }
    
    return errors;
}