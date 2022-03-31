import React from 'react'
import {InputNote,Notecard} from '../../components'
import {useNotes} from '../../hooks'


export const NoteDisplayPage = () => {
  const {state} = useNotes();
  return (
    <div>
      <InputNote/>
      {state.notes.map((note)=>{
        return(
          <Notecard note={note} />
        )
      })}
    </div>
  )
}

