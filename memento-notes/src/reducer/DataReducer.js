export const initialState ={ 
    notes:[],
    archivedNotes:[],
    label:[]
}

export const DataReducer=(state,action)=>{
    switch(action.type){
        
        case 'SET_NOTES':
            return  {...state,notes:[...action.payload]}
        
        case 'SET_ARCHIVE':
            return {...state,archivedNotes:[...action.payload]}
        
        case 'SET_LABEL':
            return {...state,label:[...state.label,action.payload]}

        default:
            return state
    }
}