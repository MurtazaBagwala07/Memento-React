import axios from "axios";

export const GetNotesService=async(token)=>{
    try {
        const response = await axios.get('/api/notes',{
            headers:{authorization:token}
        });
        if(response.status===200 || response.status===201){
            return response.data.notes;
        }
    } catch (error) {
        console.log(error);
    }
}

export const AddNoteService=async(note,token)=>{
    try {
        const response = await axios.post('/api/notes',{
            note
        },{ headers :{authorization:token}})

        if(response.status===200 || response.status===201){
            console.log(response.data.notes);
            return response.data.notes;
        }

    } catch (error) {
        console.log(error);
    }
}

export const EditNoteService=async(note,token)=>{
    try {
        const response = await axios.post(`/api/notes/${note._id}`,{
            note
        },{ headers :{authorization:token}})

        if(response.status===200 || response.status===201){
            return response.data.notes;
        }

    } catch (error) {
        console.log(error);
    }
}

export const DeleteNoteService=async(id,token)=>{
    
    try {
        const response = await axios.delete(`/api/notes/${id}`,
        { headers :{authorization:token}}
        )

        if(response.status===200 || response.status===201){
            return response.data.notes;
        }

    } catch (error) {
        
    }
}