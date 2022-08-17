import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

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
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name='password' 
                        value={data.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                    <div>
                        <p>Don't Have an Account? <Link to="">Sign Up</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;