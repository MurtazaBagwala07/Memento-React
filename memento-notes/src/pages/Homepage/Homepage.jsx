import React from 'react'
import './Homepage.css'
import { useNavigate,Link } from "react-router-dom";

export const Homepage = () => {
    const navigate=useNavigate()
  return (
    <div className='homepage-wrapper'>
        <h1 className='homepage-title'>Memento Notes</h1>
        <h4 className='homepage-description'>create , store , share notes</h4>
        <div className='homepage-action-btns'>
            <button className='homepage-action-btn'>Get started</button>
            <button className='homepage-action-btn'>Login</button>
        </div>
    </div>
  )
}

