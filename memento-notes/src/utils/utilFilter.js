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