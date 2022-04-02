import React from 'react'
import './Homepage.css'
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
    const navigate=useNavigate()
  return (
    <div className='homepage-wrapper'>
        <h1 className='homepage-title'>Memento Notes</h1>
        <h4 className='homepage-description'>create , store , share notes</h4>
        <div className='homepage-action-btns'>
            <button onClick={()=>navigate('/sign-up')} className='homepage-action-btn'>Get started</button>
            <button onClick={()=>navigate('/login')} className='homepage-action-btn'>Login</button>
        </div>
    </div>
  )
}

