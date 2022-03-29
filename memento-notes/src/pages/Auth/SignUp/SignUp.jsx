import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../hooks';
import { SignUpService } from '../../../services';
import {Header} from '../../../components'

export const SignUp = () => {

    const navigate = useNavigate();

    const [signUp,setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const inputHandler=(e)=>{
        setSignUp((prevData)=>({...prevData,[e.target.name]:e.target.value}))
    }

    const signUpHandler = async(e)=>{
        e.preventDefault()
        const {firstName,lastName,email,password} = signUp
        const token = await SignUpService(firstName,lastName,email,password)
        if(token) {
            navigate('/login')
        }
        console.log(token)
    }

  return (
    <div className='login-page-wrapper'>
        <Header/>
    <form className="login-form-wrapper">
        <h1>Sign-up</h1>
        <div className="login-wrapper">

            <div className="login-input-container">
                <label htmlFor="login-email"> First Name : 
                </label>
                <input name='firstName' onChange={(e)=>inputHandler(e)} className="login-input" type="text" />
            </div>

            <div className="login-input-container">
                <label htmlFor="login-email"> Last Name :  
                </label>
                <input name='lastName' onChange={(e)=>inputHandler(e)} className="login-input" type="text" />
            </div>

            <div className="login-input-container">
                <label htmlFor="login-email"> Email : 
                </label>
                <input name='email' onChange={(e)=>inputHandler(e)} className="login-input" type="email" />
            </div>

            <div className="login-input-container">
                <label htmlFor="login-password"> Password : 
                </label>
                <input name='password' onChange={(e)=>inputHandler(e)} className="login-input" type="text" />
            </div>
            
            
            <button onClick={(e)=>signUpHandler(e)} className="login-btn">Sign Up</button>
            <p className='login-signup-btn'>Already have an account</p>
        </div>
        
    </form>
    </div>
    )
}

