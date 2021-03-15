import React,{useState} from 'react'
import amazon from "./assets/amazon.png"
import "./Login.css"
import {Link} from "react-router-dom"
import {auth} from "./firebase"
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=(e)=>{
        e.preventDefault()

        //some fency firebase 

    }
    const register =e=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
        })
        .catch(error=>alert(error.message))
        //some firebas 
    }
    return (
        <div className="login">
            <Link to ="/">
            <img className="login_logo" src={amazon} alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login_signinButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's 
                    fake clone condition of Use & Sale.
                    Please see our Private Notice 
                    our Cookies Noticeand our 
                    Interest-Based Ads
                </p>
                <button onClick={register}
                className="login_registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
