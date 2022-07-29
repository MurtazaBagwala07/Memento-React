import { toast } from 'react-toastify';

export const searchNote =(data,searchWord)=>{
    if (searchWord.trim()==='')
        return data
    
    return data.filter((note)=>note.title.toLowerCase().startsWith(searchWord.toLowerCase()))
}

export const sortByDate = (data,type)=>{
    if(type==='recentFirst')
        return data.sort((a, b) => a.sortTime - b.sortTime);
    if(type==='oldestFirst')
        return data.sort((a, b) => b.sortTime - a.sortTime);
    else{
        return data
    }
}

export const toastHandler = (type, message) => {
    if (type === 'error') {
      toast.error(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'warn') {
      toast.warn(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'success') {
      toast.success(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (type === 'info') {
      toast.info(message, {
        position: 'bottom-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };