import React from 'react'
import { Link,NavLink } from "react-router-dom";
import './Sidebar.css'



export const Sidebar = () => {
    const userName = localStorage.getItem('user')
  return (
    <aside className='sidebar-wrapper'>
        <ul className='sidebar-list-wrapper'>
            <div className='sidebar-list-item'>
                <NavLink className='sidebar-link' activeClassName='active' to='/notes'><i class="fas fa-clipboard"></i>  Notes</NavLink>
            </div>
            <div className='sidebar-list-item'>
                <NavLink className='sidebar-link' to='/archive'><i class="fas fa-folder-open"></i>  Archives</NavLink>
            </div>
            <div className='sidebar-list-item'>
                <NavLink className='sidebar-link' to='/labels'><i class="fas fa-tag"></i>  Labels</NavLink>
            </div>
            <div className='sidebar-list-item'>
                <NavLink className='sidebar-link' to='/#'><i class="fas fa-user-circle"></i> {userName}</NavLink>
            </div>
        </ul>
    </aside>
    )
}

