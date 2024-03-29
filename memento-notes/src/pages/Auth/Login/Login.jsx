import React,{useState} from 'react'
import {Header} from '../../../components'
import './Login.css'
import {toastHandler} from '../../../utils/utilFilter'
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

        if(login.email===''||login.password===''){
            toastHandler('warn','Enter Correct Details')
            return
        }

        const data =  await LoginService(login.email, login.password)
        if(data){
            localStorage.setItem("token", data.encodedToken);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem("user",JSON.stringify(data.foundUser));
            setAuth({...auth, token:data.encodedToken,isAuth:true});
            toastHandler('success','Login Successful')
            navigate('/notes')
        }
    }

    const guestLogin=async(e)=>{
        e.preventDefault();
        const data =  await LoginService('murtaza@gmail.com','murtaza123' )

        if(data){
            localStorage.setItem("token", data.encodedToken);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem("user",JSON.stringify(data.foundUser));
            setAuth({...auth, token:data.encodedToken,isAuth:true});
            toastHandler('success','Login Successful')
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
                <input name='password' onChange={(e)=>inputHandler(e)} className="login-input" type="password" required/>
            </div>
            
            
            <button onClick={(e)=>loginHandler(e)} className="login-btn">Login</button>
            <button onClick={(e)=>guestLogin(e)} className="login-btn">Login With Test Credentials</button>
            <p onClick={()=>navigate('/sign-up')} className='login-signup-btn'>Create a new account</p>
        </div>
        
    </form>
    </div>
  )
}
