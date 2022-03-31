import React, { useState } from 'react'
import { DeleteNoteService } from '../../services'
import {useAuth,useNotes} from '../../hooks'
import {Modal} from '../Modal/Modal'

export const Notecard = ({note}) => {
  const {auth} = useAuth();
  const {state,dispatch} = useNotes();
  
  const [edit,setEdit] = useState(false);

  const deleteNote=async(id)=>{
    const response = await DeleteNoteService(id,auth.token);
    dispatch({
      type:"SET_NOTES",
      payload:response
    })
  }

  return (
    <>
    <div className="notecard" >
      <h2 className="note-title">{note.title}</h2>
      <h4 className="note-content">{note.content}</h4>
      <h5>Time Created : </h5>
      <div className="note-action-btns">
        <button onClick={()=>setEdit(true)} className="note-action-btn">
          <i class="far fa-edit"></i>
        </button>
        <button onClick={()=>deleteNote(note._id)} className="note-action-btn">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    {edit && <Modal setEdit={setEdit} note={note}/>}
    </>
  )
}

