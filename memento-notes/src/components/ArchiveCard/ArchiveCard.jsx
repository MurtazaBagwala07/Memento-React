import React from 'react'
import {RestoreFromArchive,DeleteFromArchive} from '../../services'
import {useAuth,useNotes} from '../../hooks'

export const ArchiveCard = ({arch}) => {

    const {auth} = useAuth();
    const {state,dispatch} = useNotes();
    
    const restoreNote=async(arch)=>{
        const resp = await RestoreFromArchive(arch._id,auth.token)
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

        dispatch({
            type:"SET_ARCHIVE",
            payload:resp
          })
    }

  return (
    <div className="notecard" >
      <h2 className="note-title">{arch.title}</h2>
      <h4 className="note-content">{arch.content}</h4>
      <h5>Time Created : </h5>
      <div className="note-action-btns">
        <button onClick={()=>restoreNote(arch)} className="note-action-btn">
            <i class="fas fa-trash-restore"></i>
        </button>
        <button onClick={()=>deleteArchive(arch)} className="note-action-btn">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

