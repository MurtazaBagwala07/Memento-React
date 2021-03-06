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
        const data =  await LoginService(login.email, login.password)
        console.log(data)
        if(data){
            localStorage.setItem("token", data.encodedToken);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem("user",data.foundUser.firstName);
            setAuth({...auth, token:data.encodedToken,isAuth:true});
            navigate('/notes')
        }
    }

    const guestLogin=async(e)=>{
        e.preventDefault();
        const data =  await LoginService('adarshbalika@gmail.com','adarshBalika123' )
        console.log(data)

        if(data){
            localStorage.setItem("token", data.encodedToken);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem("user",data.foundUser.firstName);
            setAuth({...auth, token:data.encodedToken,isAuth:true});
            navigate('/notes')
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
                <input name='email' onChange={(e)=>inputHandler(e)} className="login-input" type="email" required/>
            </div>

            <div className="login-input-container">
                <label htmlFor="login-password"> Password : 
                </label>
                <input name='password' onChange={(e)=>inputHandler(e)} className="login-input" type="text" required/>
            </div>
            
            
            <button onClick={(e)=>loginHandler(e)} className="login-btn">Login</button>
            <button onClick={(e)=>guestLogin(e)} className="login-btn">Login With Test Credentials</button>
            <p onClick={()=>navigate('/sign-up')} className='login-signup-btn'>Create a new account</p>
        </div>
        
    </form>
    </div>
  )
}
