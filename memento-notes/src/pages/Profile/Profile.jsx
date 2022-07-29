import React from 'react'
import { Header } from '../../components'
import './Profile.css'

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="profile-page-wrapper">
        <Header/>
        <div className='profile-main-wrapper'>
            <div className='profile-container'>
                <h3>First Name : {user.firstName}</h3>
                <h3>Last Name : {user.lastName}</h3>
                <h3>Email : {user.email}</h3>
            </div>
        </div>

    </div>
  )
}
