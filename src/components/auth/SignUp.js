import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Validation function
import { validation } from './helpers/validation';

const SignUp = () => {

    const [data, setData] = useState({
        name:"",
        email: "",
        password: "",
        confirmPassword:"",
        isAccepted: false
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validation(data, "signup"))
    },[data, touched]);

    const changeHandler = e => {
        if(e.target.name === "isAccepted"){
            setData({...data, [e.target.name]: e.target.checked})
        }else {
            setData({...data, [e.target.name]: e.target.value});
        }
    }

    const touchHandler = e => {
        setTouched({...touched, [e.target.name]: true});
    }

    return (
        <div style={{marginTop: "100px"}}>
            <form>
                <h2>Login</h2>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name='name' 
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        name='email' 
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        name='password' 
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                        type="password" 
                        name='confirmPassword' 
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I accept terms of privacy policy </label>
                    <input 
                        type="checkbox" 
                        name='isAccepted' 
                        value={data.isAccepted}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <button type='submit'>Sign Up</button>
                    <div>
                        <p>Already Have an Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;