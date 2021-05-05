import { TextField } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="Login-info">
            <TextField placeholder="Enter user name">User Name</TextField>
            <br/>
            <TextField placeholder="Enter password" type="password">Password</TextField>
            <br/>
            <button className="btn btn-success">Login</button>
            </div>
        </div>
    );
}

export default Login;
