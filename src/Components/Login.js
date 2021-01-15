import React,{useState} from 'react'
import '../css/Login.css'
import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Amazon's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
