import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../hooks';
import { SignUpService } from '../../../services';
import {Header} from '../../../components'
import './SignUp.css'

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
    <div className='signup-page-wrapper'>
        <Header/>
    <form onSubmit={signUpHandler} className="signup-form-wrapper">
        <h1>Sign-up</h1>
        <div className="signup-wrapper">

            <div className="signup-input-container">
                <label htmlFor="signup-fname"> First Name : 
                </label>
                <input name='firstName' onChange={(e)=>inputHandler(e)} className="signup-input" type="text" required/>
            </div>

            <div className="signup-input-container">
                <label htmlFor="signup-lname"> Last Name :  
                </label>
                <input name='lastName' onChange={(e)=>inputHandler(e)} className="signup-input" type="text" required/>
            </div>

            <div className="signup-input-container">
                <label htmlFor="signup-email"> Email : 
                </label>
                <input name='email' onChange={(e)=>inputHandler(e)} className="signup-input" type="email" required/>
            </div>

            <div className="signup-input-container">
                <label htmlFor="signup-password"> Password : 
                </label>
                <input name='password' onChange={(e)=>inputHandler(e)} className="signup-input" type="text" required/>
            </div>
            
            
            <button type="submit" onClick={(e)=>signUpHandler(e)} className="signup-btn">Sign Up</button>
            <p onClick={()=>navigate('/login')} className='signup-signup-btn'>Already have an account</p>
        </div>
        
    </form>
    </div>
    )
}

