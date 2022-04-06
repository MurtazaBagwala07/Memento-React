import React,{useState} from 'react'
import {Header, InputNote,Notecard,Sidebar} from '../../components'
import {useNotes} from '../../hooks'
import './NoteDisplayPage.css'
import {searchNote,sortByDate} from '../../utils/utilFilter'


export const NoteDisplayPage = () => {

  const [filters,setFilters] = useState(false)
  const {state,dispatch} = useNotes();
 

  const toggleFilters=()=>{
    setFilters((prev)=>!prev)
  }

  console.log(state)

  let notesToDisplay = searchNote(state.notes,state.searchValue)
  notesToDisplay = sortByDate(notesToDisplay,state.date)


  return (
    <div className='main-page-wrapper'>
      <Header/>
    <div className="page-wrapper">
      <Sidebar/>
      <div className='notes-page'>
        <InputNote/>
        <div className="note-wrapper">
          <div className="note-filter-wrapper">
            <input onChange={(e)=>dispatch({
              type:'SET_SEARCH',
              payload:e.target.value
            })} 
            value={state.search} className='note-search-input' type="text" placeholder='Search for Notes here'/>
            <i onClick={toggleFilters} class="fas fa-filter"></i>
          </div>
          {filters && <div className="note-filter">
                <label className='filter-input'>
                <input
                  onClick={(e) =>
                    dispatch({
                      type: 'SET_DATE',
                      payload: e.target.value,
                    })
                  }
                  name='filter'
                  type='radio'
                  value='recentFirst'
                />
                <span className='filter-type'>Recent to Oldest</span>
                </label>
                <label className='filter-input'>
                <input
                  onClick={(e) =>
                    dispatch({
                      type: 'SET_DATE',
                      payload: e.target.value,
                    })
                  }
                  name='filter'
                  type='radio'
                  value='oldestFirst'
                />
                <span className='filter-type'>Oldest to Recent</span>
                </label>
          </div>}
          <div className='notes-container'>
          {notesToDisplay.map((note)=>{
          return(
            <Notecard note={note} />
          )
        })}
          </div>
        
        </div>
      </div>
    </div>
    </div>
  )
}

