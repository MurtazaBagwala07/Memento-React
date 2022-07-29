import React from 'react'
import {Header, InputNote,Notecard,Sidebar} from '../../components'
import {useNotes} from '../../hooks'
import './LabelDisplayPage.css'

export const LabelDisplayPage = () => {
    const {state} = useNotes();
    const labels = state.notes.reduce((acc,curr)=> acc.concat(curr.label),[])
    let labelsFiltered = [...new Set(labels)];
    let uniqueLabels = labelsFiltered.filter((label)=>label!=='')
  return (
    <div className='main-page-wrapper'>
      <Header/>
    <div className="page-wrapper">
      <Sidebar/>
      <div className='label-page'>
        <div className='label-page-title'>{uniqueLabels.length>0?'Label Page':'No Labels to display'}</div> 
        { uniqueLabels.length>0 &&
            uniqueLabels.map((label) =>{
                const labelNotes = state.notes.filter((item) => item.label === label)
                const filteredNotes = labelNotes.filter((note)=>note.label!=='')
                return (
                    <div key={label} className="label-container">
                      <h1 className="label-heading">Label : {label}</h1>
                      <div className="label-inner-container">
                        {filteredNotes.map((note) => (
                          <Notecard note={note} />
                        ))}
                      </div>
                    </div>
                  );
            })
        }
      </div>
    </div>
    </div>
  )
}

