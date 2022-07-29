import { createContext, useEffect, useReducer } from "react";
import {useAuth} from '../../hooks'
import {GetNotesService,GetArchiveNotesService} from '../../services'
import { DataReducer,initialState } from "../../reducer/DataReducer";

export const NoteContext = createContext();

export const NoteProvider =({children})=>{
    const {auth} = useAuth();
    const [state,dispatch] = useReducer(DataReducer,initialState);

    useEffect(()=>{
        (async ()=>{
            if(auth.isAuth){
                const notesData = await GetNotesService(auth.token)
                const archiveData = await GetArchiveNotesService(auth.token)
                dispatch({
                    type: 'SET_NOTES',
                    payload: notesData
                })
                dispatch({
                    type: 'SET_ARCHIVES',
                    payload: archiveData
                })
            }            
        })();
    },[auth.isAuth])
    return(
        <NoteContext.Provider value={{state,dispatch}}>
            {children}
        </NoteContext.Provider>
    )
}