import React from 'react'
import {RestoreFromArchive,DeleteFromArchive} from '../../services'
import {useAuth,useNotes} from '../../hooks'
import './ArchiveCard.css'
import { toastHandler } from '../../utils/utilFilter'

export const ArchiveCard = ({arch}) => {

    const {auth} = useAuth();
    const {state,dispatch} = useNotes();
    
    const restoreNote=async(arch)=>{
        const resp = await RestoreFromArchive(arch._id,auth.token)
        toastHandler('success','Note successfully restored')
        dispatch({
            type:"SET_ARCHIVE",
            payload:resp.archives
          })
          dispatch({
            type:'SET_NOTES',
            payload:resp.notes
          })
    }

    const deleteArchive=async(arch)=>{
        const resp = await DeleteFromArchive(arch._id,auth.token)
        toastHandler('success','Note deleted from archived')
        dispatch({
            type:"SET_ARCHIVE",
            payload:resp
          })
    }

  return (
    <div className={`notecard ${arch.color}`} >
      <span className='archive-label'>Archived</span>
      <h2 className="note-title">{arch.title}</h2>
      <h4 className="note-content">{arch.content}</h4>
      <h5>Time Created : {arch.time}</h5>
      <div className="note-action-btns">
        <button onClick={()=>restoreNote(arch)} className="note-action-btn">
            <i class="fas fa-trash-restore"></i>
        </button>
        <button onClick={()=>deleteArchive(arch)} className="note-action-btn">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

