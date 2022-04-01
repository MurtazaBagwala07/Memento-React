import React from 'react'
import {useNotes} from '../../hooks'

import {Header,Sidebar,ArchiveCard} from '../../components'
import './ArchiveDisplayPage.css'


export const ArchiveDisplayPage = () => {
    const {state} = useNotes();
  return (

    <div className='main-page-wrapper'>
      <Header/>
    <div className="page-wrapper">
      <Sidebar/>
      <div className='notes-page'>
        {state.archivedNotes.map((arch)=>{
            return (
                <ArchiveCard arch={arch}/>
            )
        })}
      </div>
    </div>
    </div>
    
  )
}

