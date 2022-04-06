import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'



export const Sidebar = () => {
    const userName = localStorage.getItem('user')
  return (
    <aside className='sidebar-wrapper'>
        <ul className='sidebar-list-wrapper'>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/notes'><i class="far fa-clipboard"></i>  Notes</Link>
            </div>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/archive'><i class="far fa-folder-open"></i>  Archives</Link>
            </div>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/labels'><i class="fas fa-tag"></i>  Labels</Link>
            </div>
            <div className='sidebar-list-item'>
                <Link className='sidebar-link' to='/notes'><i class="far fa-user-circle"></i> {userName}</Link>
            </div>
        </ul>
    </aside>
    )
}

