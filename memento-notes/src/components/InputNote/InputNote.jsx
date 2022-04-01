import React,{useState} from 'react'
import { AddNoteService } from '../../services';
import {useAuth,useNotes} from '../../hooks'
export const InputNote = () => {

    const {auth} = useAuth();
    const {state,dispatch} = useNotes();

    const [expand, setExpand] = useState(false);

    const [inputNote,setInputNote] = useState({
        title: "",
        content: "",
        time: ""
    })

    const changeHandler = (e) => {
        setInputNote({ ...inputNote, [e.target.name]: e.target.value });
      };

      const submitHandler=async(e)=>{
        e.preventDefault();
        const response = await AddNoteService(inputNote,auth.token);
        dispatch({
          type:"SET_NOTES",
          payload:response
        })
        setExpand(false);
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
        <div className="action-btns">
          <button className="action-btn">Save</button>
          <button
            className="action-btn"
            type="button"
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

