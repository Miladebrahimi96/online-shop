import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Validation function
import { validation } from './helpers/validation';

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


    const changeHandler = e => setData({...data, [e.target.name]: e.target.value});

    const touchHandler = e => setTouched({...touched, [e.target.name]: true});

    return (
        <div style={{marginTop: "100px"}}>
            <form>
                <h2>Login</h2>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name='email' 
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    { errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name='password' 
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={touchHandler}
                    />
                    { errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
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