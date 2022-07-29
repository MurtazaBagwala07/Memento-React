import React,{useState} from 'react';
import ReactDOM from "react-dom";
import { EditNoteService } from '../../services';
import {useAuth,useNotes} from '../../hooks'
import './Modal.css'
import {toastHandler} from '../../utils/utilFilter'

export const Modal = ({note,setEdit}) => {
    const {auth} = useAuth();
    const {state,dispatch} = useNotes();
    const [editInput,setEditInput] = useState({
        ...note
    })

    const editHandler =(e)=>{
        setEditInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const editNote=async(editInput)=>{
        const response = await EditNoteService(editInput,auth.token)
        toastHandler('success','Note Edited Successfully')
        dispatch({
            type: 'SET_NOTES',
            payload: response
        })
        setEdit(false)
    }

  return ReactDOM.createPortal(
      <>
    <div className="modal-page">
        <div class="modal-container">
        <input onChange={(e)=>editHandler(e)} name='title' value={editInput.title} class="modal-title" placeholder='Edit Title...'/>
        <input onChange={(e)=>editHandler(e)} name='content' value={editInput.content} class="modal-body" placeholder='Edit Content'/>
        <div class="modal-action-btns">
            <button onClick={()=>setEdit(false)} class="modal-btn modal-alert-btn">Cancel</button>
            <button onClick={()=>editNote(editInput)} class="modal-btn modal-success-btn">Edit</button>
        </div>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

