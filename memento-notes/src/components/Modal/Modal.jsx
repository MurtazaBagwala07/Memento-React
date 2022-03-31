import React,{useState} from 'react';
import { EditNoteService } from '../../services';
import {useAuth,useNotes} from '../../hooks'

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
        console.log(editInput)
        const response = await EditNoteService(editInput,auth.token)
        console.log(response)
        dispatch({
            type: 'SET_NOTES',
            payload: response
        })
        setEdit(false)
    }

  return (
    <div class="modal-container">
    <input onChange={(e)=>editHandler(e)} name='title' value={editInput.title} class="modal-title"/>
    <input onChange={(e)=>editHandler(e)} name='content' value={editInput.content} class="modal-body"/>
    <div class="modal-action-btns">
        <button onClick={()=>setEdit(false)} class="modal-btn modal-alert-btn">Delete</button>
        <button onClick={()=>editNote(editInput)} class="modal-btn modal-success-btn">Save</button>
    </div>
</div>

  )
}

