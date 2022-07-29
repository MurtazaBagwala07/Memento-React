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
      <div className="archive-page-container">
        <h1>{state?.archivedNotes?.length>0?'Archived Notes' : 'No Archived Notes Yet'}</h1> 
        {state?.archivedNotes?.length>0 && <div className='archive-page'>
          {state.archivedNotes.map((arch)=>{
              return (
                  <ArchiveCard arch={arch}/>
              )
          })}
        </div>}
      </div>
    </div>
    </div>
    
  )
}

