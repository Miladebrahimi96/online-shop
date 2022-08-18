import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Validation function
import { validation } from './helpers/validation';

//Styles
import style from "./SignUp.module.css";

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

    const touchHandler = e => setTouched({...touched, [e.target.name]: true});

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if(Object.keys(errors).length){
            setTouched({
                email: true,
                password: true,
                name: true,
                confirmPassword: true,
                isAccepted: true
            })
        }else{
            navigate("/products")
        }
    }

    return (
        <div className={style.container}>
            <form className={style.formContainer} onSubmit={submitHandler}>
                <h2>Login</h2>
                <div className={style.inputContainer}>
                    <label>Name: </label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="text" 
                        name='name' 
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={style.inputContainer}>
                    <label>Email: </label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="email" 
                        name='email' 
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={style.inputContainer}>
                    <label>Password: </label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="password" 
                        name='password' 
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={style.inputContainer}>
                    <label>Confirm Password: </label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="password" 
                        name='confirmPassword' 
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={style.inputContainer}>
                    <div className={style.checkboxField}>
                        <label>I accept terms of privacy policy </label>
                        <input 
                            type="checkbox" 
                            name='isAccepted' 
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={touchHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={style.btnContainer}>
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