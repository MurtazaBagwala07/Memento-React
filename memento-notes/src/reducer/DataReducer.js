export const initialState ={ 
    notes:[],
    archivedNotes:[],
    searchValue:'',
    date:''
}

export const DataReducer=(state,action)=>{
    switch(action.type){
        
        case 'SET_NOTES':
            return  {...state,notes:[...action.payload]}
        
        case 'SET_ARCHIVE':
            return {...state,archivedNotes:[...action.payload]}
        
        case 'SET_DATE':
            return {...state,date:action.payload}

        case 'SET_SEARCH':
            return {...state,searchValue:action.payload}

        case 'LOGOUT_USER':{
            return {
                notes:[],
                archivedNotes:[],
                searchValue:'',
                date:''
            }
        }

        default:
            return state
    }
}