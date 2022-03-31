export const initialState ={ 
    notes:[],
    archivedNotes:[]
}

export const DataReducer=(state,action)=>{
    switch(action.type){
        
        case 'SET_NOTES':
            return  {...state,notes:[...action.payload]}
        
        case 'SET_ARCHIVE':
            return {...state,archivedNotes:[...action.payload]}

        default:
            return state
    }
}