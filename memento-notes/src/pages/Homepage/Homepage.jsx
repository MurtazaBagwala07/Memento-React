import React from 'react'
import './Homepage.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks';

export const Homepage = () => {
    const navigate=useNavigate()
    const {auth} = useAuth();

    if(auth.isAuth){
      navigate('/notes')
    }

  return (
    <div className="homepage">
      <div className='homepage-wrapper'>
        <h1 className='homepage-title'>Memento Notes  <i class="far fa-clipboard"></i></h1>
        <h4 className='homepage-description'>Create , Store , Share notes</h4>
        <div className='homepage-action-btns'>
            <button onClick={()=>navigate('/sign-up')} className='homepage-action-btn main-button'>Get started</button>
            <button onClick={()=>navigate('/login')} className='homepage-action-btn secondary-button'>Login</button>
        </div>
      </div>
    </div>
    
  )
}

