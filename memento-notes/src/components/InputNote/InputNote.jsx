import React,{useState} from 'react'
import { AddNoteService } from '../../services';
import {useAuth,useNotes} from '../../hooks'
import './InputNote.css'
import {toastHandler} from '../../utils/utilFilter'

export const InputNote = () => {

    const colors= ["shade-1","shade-2","shade-3","shade-4","shade-5"] 

    const {auth} = useAuth();
    const {state,dispatch} = useNotes();

    const [expand, setExpand] = useState(false);

    const [inputNote,setInputNote] = useState({
        title: "",
        content: "",
        time: `${new Date(Date.now()).toLocaleDateString()}`,
        label:"",
        color:'',
        sortTime: new Date().getTime()
    })

    const changeHandler = (e) => {
        const random =colors[Math.floor(Math.random()*colors.length)]
        setInputNote({ ...inputNote, [e.target.name]: e.target.value,color:random });
      };

    const resetForm=()=>{
      setInputNote(
        {
          title: "",
          content: "",
          time: `${new Date(Date.now()).toLocaleDateString()}`,
          label:"",
          color:'',
          sortTime: new Date().getTime()
      }
      )
    }

      const submitHandler=async(e)=>{
        e.preventDefault();

        if(inputNote.title === ""){
          toastHandler('warn','Title cannot be empty')
          return;
        }

        if(inputNote.content === ""){
          toastHandler('warn','Content cannot be empty')
          return;
        }

        if(inputNote.label === ""){
          toastHandler('warn','Label cannot be empty')
          return;
        }

        const time=`${new Date(Date.now()).toLocaleDateString()}`
        const sortTime = new Date().getTime()
        setInputNote((prev)=>({...prev,time,sortTime}))
        const response = await AddNoteService(inputNote,auth.token);
        dispatch({
          type:"SET_NOTES",
          payload:response
        })
        setExpand(false);
        setInputNote(
          {
            title: "",
            content: "",
            time: `${new Date(Date.now()).toLocaleDateString()}`,
            label:"",
            sortTime: new Date().getTime()
        }
        )
      }

  return (
    <form onSubmit={submitHandler} className="input-wrapper">
    <input
      className="input input-title"
      name="title"
      onFocus={() => setExpand(true)}
      onChange={changeHandler}
      value={inputNote.title}
      type="text"
      placeholder="Enter Title here..."
    />
    {expand && (
      <>
        <textarea
          className="input input-content"
          name="content"
          onChange={changeHandler}
          value={inputNote.content}
          type="text"
          placeholder="Enter Content here..."
        />
        <input className="input input-title" name='label' value={inputNote.label} onChange={changeHandler} type="text" placeholder='Enter Label for Note'/>
        <div className="action-btns">
          <button className="action-btn">Save</button>
          <button
            className="action-btn"
            type="button"
            onClick={()=>resetForm()}
          >
            Reset
          </button>
          <button
            className="action-btn"
            onClick={() => {
              setExpand(false);
            }}
          >
            Close
          </button>
        </div>
      </>
    )}
  </form>
  )
}

