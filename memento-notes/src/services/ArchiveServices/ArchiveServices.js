import axios from "axios";

export const GetArchiveNotesService=async(token)=>{
    try {
        const response = await axios.get('/api/archives',{
            headers:{authorization:token}
        });
        if(response.status===200 || response.status===201){
            return response.data.archives;
        }
    } catch (error) {
        console.log(error);
    }
}

export const AddtoArchive=async(note,token)=>{
    try {
        const response = await axios.post(`/api/notes/archives/${note._id}`,
        {note},
        {headers:{authorization:token}}
        )
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const RestoreFromArchive=async(id,token)=>{
    console.log(id,token)
    try {
        const response =await axios.post(`/api/archives/restore/${id}`,{},{
            headers:{authorization:token}
        })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const DeleteFromArchive=async(id,token)=>{
    try {
        const response = await axios.delete(`/api/archives/delete/${id}`,{
            headers:{authorization:token}
        })
        return response.data.archives
    } catch (error) {
        
    }
}