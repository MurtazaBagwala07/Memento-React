import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'


export const Sidebar = () => {
  return (
    <aside className='sidebar-wrapper'>
        <ul className='sidebar-list-wrapper'>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/notes'>Notes</Link>
            </div>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/archive'>Archives</Link>
            </div>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/labels'>Labels</Link>
            </div>
        </ul>
        <div>
            <h4>UserName</h4>
        </div>
    </aside>
    )
}

