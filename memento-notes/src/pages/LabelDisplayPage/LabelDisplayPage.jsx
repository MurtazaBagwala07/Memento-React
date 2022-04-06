import React from 'react'
import {Header, InputNote,Notecard,Sidebar} from '../../components'
import {useNotes} from '../../hooks'
import './LabelDisplayPage.css'

export const LabelDisplayPage = () => {
    const {state} = useNotes();
    const labels = state.notes.reduce((acc,curr)=> acc.concat(curr.label),[])
    let uniqueLabels = [...new Set(labels)];
  return (
    <div className='main-page-wrapper'>
      <Header/>
    <div className="page-wrapper">
      <Sidebar/>
      <div className='label-page'>
        {
            uniqueLabels.map((label) =>{
                const labelNotes = state.notes.filter((item) => item.label === label)
                return (
                    <div key={label} className="label-container">
                      <h1 className="label-heading">Label : {label}</h1>
                      <div className="label-inner-container">
                        {labelNotes.map((note) => (
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

