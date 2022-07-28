import React, { useState } from 'react'
import { DeleteNoteService,AddtoArchive,EditNoteService } from '../../services'
import {useAuth,useNotes} from '../../hooks'
import {Modal} from '../Modal/Modal'
import './Notecard.css'

export const Notecard = ({note}) => {
  const {auth} = useAuth();
  const {state,dispatch} = useNotes();
  const [colorPalette,setColorPalette] = useState(false)
  
  const [edit,setEdit] = useState(false);

  const deleteNote=async(id)=>{
    const response = await DeleteNoteService(id,auth.token);
    dispatch({
      type:"SET_NOTES",
      payload:response
    })
  }

  const toggleColorPalette=()=>{
    setColorPalette((prev)=>!prev)
  }

  const noteColorChange= (currNote,color)=>{
    const newNote = {...note,color:color}
    const updatesNotes = state.notes.map((note)=>{
      if(note._id===currNote._id){
        return newNote
      }
      else{
        return note
      }
    })
    console.log(updatesNotes)
    dispatch({
      type:'SET_NOTES',
      payload:updatesNotes
    })
  }

  const moveToArchive = async(note)=>{
    const resp = await AddtoArchive(note,auth.token)
    dispatch({
      type:"SET_ARCHIVE",
      payload:resp.archives
    })
    dispatch({
      type:'SET_NOTES',
      payload:resp.notes
    })
  }

  return (
    <>
    <div className={`notecard ${note.color}`}>
      {note.label.trim()!=='' && <span className="note-label"><i class="fas fa-tag"></i> {note.label}</span>}
      <h2 className="note-title">{note.title}</h2>
      <h4 className="note-content">{note.content}</h4>
      <h5>Time Created : {note.time}</h5>
      {colorPalette && 
      <div className="note-color-btns">
        <button
          className="color-btn shade-1"
          onClick={()=>noteColorChange(note,'shade-1')} 
        >
        </button>
        <button
          className="color-btn shade-2"
          onClick={()=>noteColorChange(note,'shade-2')}
        >
        </button>
        <button
          className="color-btn shade-3"
          onClick={()=>noteColorChange(note,'shade-3')}
        >
        </button>
        <button
          className="color-btn shade-4"
          onClick={()=>noteColorChange(note,'shade-4')}
        >
        </button>
        <button
          className="color-btn shade-5"
          onClick={()=>noteColorChange(note,'shade-5')}
        >
        </button>
      </div>}
      <div className="note-action-btns">
        <button onClick={()=>toggleColorPalette()} className="note-action-btn">
          <i class="fas fa-palette"></i>
        </button>
        <button onClick={()=>setEdit(true)} className="note-action-btn">
          <i class="far fa-edit"></i>
        </button>
        <button onClick={()=>moveToArchive(note)} className="note-action-btn">
          <i class="fas fa-archive"></i>
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

