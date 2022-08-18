import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Validation function
import { validation } from './helpers/validation';

//styles
import style from "./Login.module.css";

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validation(data, "login"))
    },[data, touched]);


    const navigate = useNavigate();

    const changeHandler = e => setData({...data, [e.target.name]: e.target.value});
    const touchHandler = e => setTouched({...touched, [e.target.name]: true});

    const submitHandler = e => {
        e.preventDefault();
        if(Object.keys(errors).length){
            setTouched({
                email: true,
                password: true
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
                    <label>Email:</label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="email" 
                        name='email' 
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    { errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={style.inputContainer}>
                    <label>Password:</label>
                    <input 
                        className={(errors.name && touched.name) ? style.notCompleted : style.formInput}
                        type="password" 
                        name='password' 
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    { errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={style.btnContainer}>
                    <button type='submit'>Login</button>
                    <div>
                        <p>Don't Have an Account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;