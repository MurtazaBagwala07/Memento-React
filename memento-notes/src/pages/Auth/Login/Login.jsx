import React,{useState} from 'react'
import {Header} from '../../../components'
import './Login.css'
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../../hooks'
import {LoginService} from '../../../services'

export const Login = () => {
    const navigate = useNavigate();
    const {auth,setAuth} = useAuth();
    const [login,setLogin] = useState({
        email:'',
        password:'',
    })

    const inputHandler =(e)=>{
        setLogin((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const loginHandler = async(e)=>{
        e.preventDefault()
        const token =  await LoginService(login.email, login.password)
        if(token){
            localStorage.setItem("token", token);
		    localStorage.setItem("isAuth", true);
            setAuth({...auth, token:token,isAuth:true});
        }
    }

  return (
    <div className='login-page-wrapper'>
        <Header/>
    <form className="login-form-wrapper">
        <h1>Login</h1>
        <div className="login-wrapper">
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
            
            
            <button onClick={(e)=>loginHandler(e)} className="login-btn">Login</button>
            <p className='login-signup-btn'>Create a new account</p>
        </div>
        
    </form>
    </div>
  )
}
