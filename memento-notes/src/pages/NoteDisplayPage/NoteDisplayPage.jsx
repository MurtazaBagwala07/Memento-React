import React from 'react'
import {Header, InputNote,Notecard,Sidebar} from '../../components'
import {useNotes} from '../../hooks'
import './NoteDisplayPage.css'


export const NoteDisplayPage = () => {
  const {state} = useNotes();
  return (
    <div className='main-page-wrapper'>
      <Header/>
    <div className="page-wrapper">
      <Sidebar/>
      <div className='notes-page'>
        <InputNote/>
        {state.notes.map((note)=>{
          return(
            <Notecard note={note} />
          )
        })}
      </div>
    </div>
    </div>
  )
}

