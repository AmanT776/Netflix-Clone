import React from 'react'
import {useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.svg'
import { signIn, signUp } from '../../firebase'; 
import loadingGear from   "../../assets/Gear.gif"

export default function Login(){
    const [signState, setSignState] = useState("Sign In")
    const [loading,setLoading] = useState(false)

    function handleSign(){
        setSignState(prevSignState=>prevSignState === "Sign In" ? "Sign Up" : "Sign In")
    }
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   async function user_auth(event){
    setLoading(true)
        event.preventDefault()
        if(signState === "Sign Up"){
        await signUp(name,email,password)
    }else{
        await signIn(email,password)
    }
    setTimeout(()=>{
        setLoading(false)
    },5000)
    
}
    return(
        loading ? <div className="loading-div">
        <img src={loadingGear} alt="" />
    </div>:
        <div className="login">
            <img src={logo} alt="" className="login-logo" />
            <div className="login-form">
                <h1>{signState}</h1>
                <form onSubmit={user_auth}>
                    {
                    signState === "Sign Up" ?  
                    <input value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} type="text" name="firstName" placeholder="First Name" className="input"/> : null
                    }
                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} type="email" name="email" placeholder="Email" className="input"/>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} type="password" name="password" placeholder="Password" className="input"/>
                    <button className="submit-btn" type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <label className="info-txt" htmlFor="remember">Remember Me</label>
                            <input id='remember' type="checkbox" />
                        </div>
                        <p className="info-txt">Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {
                    signState === "Sign In" ? <p>New to Netflix? <span onClick={handleSign} className='span'>Sign Up Now</span></p> : <p>Already have an account? <span onClick={handleSign}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    )
}

